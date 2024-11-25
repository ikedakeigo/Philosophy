/**
 * 画像一括変換スクリプト
 * 参考： https://github.com/GoogleChromeLabs/squoosh/tree/dev/libsquoosh
 *
 * 実行(例)
 * node convertImage.mjs -i ./dev/_assets/images -o ./public_html/static/images -w -t
 *
 * ヘルプ
 * node convertImage.mjs -h
 */
import { ImagePool } from '@squoosh/lib';
import { cpus } from 'os';
import glob from 'glob';
import path from 'path';
import fse from 'fs-extra';
import { Command } from 'commander';

// 引数設定
const program = new Command();
program
  .requiredOption('-i, --input <type>', 'ソースディレクトリ（必須）')
  .requiredOption('-o, --out <type>', '出力先ディレクトリ（必須）')
  .option('-m, --minify', '画像の最適化を行う（同一拡張子での変換）', false)
  .option('-w, --webp', 'webp化を行う', false)
  .option(
    '-a, --webp-suffix-add',
    'webp化を行った際の拡張子の処理（true:拡張子の後ろに追加、false:既存の拡張子を置換）',
    false
  )
  .option('-t, --truncate', '変換前に出力先のディレクトリを空にする', false)
  .option('-s, --size <n>', '最大利用CPU(worker)数（0 = CPU数）メモリ不足になるようなら減らす', parseInt, 0)
  .action((Options) => {
    if (isNaN(Options.size)) {
      console.error('最大利用CPU(worker)数は数値で入力してください');
      process.exit(1);
    }
  })
  .parse();

/**
 * 設定項目ここから
 */
// 変換対象拡張子とエンコーダーの設定（参考： https://squoosh.app/）
const GET_ENCODER_FROM_EXTENSION = {
  jpg: 'mozjpeg',
  jpeg: 'mozjpeg',
  png: 'oxipng',
};
// 変換オプション（参考： https://squoosh.app/）
const ENCODER_OPTIONS = {
  oxipng: {
    level: 3,
    interlace: false,
  },
  mozjpeg: {
    quality: 90,
  },
  webp: {
    png: {
      lossless: true,
    },
    jpg: {
      quality: 100,
    },
  },
};
/**
 * 設定項目ここまで
 */

// オプション項目読み取り
const Options = program.opts();
const IMAGE_DIR = Options.input;
const OUTPUT_DIR = Options.out;
const MAX_WORKER_SIZE = Options.size;
const DO_OPTIMIZE = Options.minify;
const ENCODE_WEBP = Options.webp;
const WEBP_SUFFIX_ADD = Options.webpSuffixAdd;
const TRUNCATE_BEFORE = Options.truncate;

// ソースディレクトリからファイル一覧を取得
let imageFileList = [];
glob.sync(IMAGE_DIR + '/**/*.*').map(function (file) {
  imageFileList.push(file.replace(IMAGE_DIR, '.'));
});

// Worker Sizeの算出
let numberOfWorkers = cpus().length;
if (MAX_WORKER_SIZE > 0 && MAX_WORKER_SIZE < numberOfWorkers) {
  numberOfWorkers = MAX_WORKER_SIZE;
}
const imagePool = new ImagePool(numberOfWorkers);
console.info('Set', numberOfWorkers, 'Workers');

// 変数初期化
const ts_start = Date.now();
let ts_worker_start = Date.now();
let ts_worker_end;
let targetFileNum = imageFileList.length;
let encodedFileNum = 1;

await Promise.all(
  imageFileList.map(async (imagePath) => {
    const fileExtension = path.extname(imagePath).substring(1);
    const sourcePath = path.join(IMAGE_DIR, imagePath);
    const encoder = GET_ENCODER_FROM_EXTENSION[fileExtension];
    let action = '';
    let isCopy = !encoder;
    let encodeOptions = {};

    if (!isCopy) {
      if (DO_OPTIMIZE) encodeOptions[encoder] = ENCODER_OPTIONS[encoder];
      if (ENCODE_WEBP) encodeOptions['webp'] = ENCODER_OPTIONS['webp'];
      if (Object.keys(encodeOptions).length === 0) isCopy = true;
    }

    if (isCopy) {
      // エンコード対象外
      // const destinationPath = path.join(OUTPUT_DIR + '/svg/', imagePath);
      // if (TRUNCATE_BEFORE) {
      //   // 初期化
      //   fse.emptyDirSync(OUTPUT_DIR + '/svg/');
      // }
      // await fse.copy(sourcePath, destinationPath);
      // action = 'copied';
    } else {
      // エンコード対象
      const destinationPath = path.join(OUTPUT_DIR + '/compressed/', imagePath);
      const rawImageFile = await fse.readFile(sourcePath);
      const ingestedImage = imagePool.ingestImage(rawImageFile);

      if (TRUNCATE_BEFORE) {
        // 初期化
        fse.emptyDirSync(OUTPUT_DIR + '/compressed/');
        fse.emptyDirSync(OUTPUT_DIR + '/webp/');
      }

      await ingestedImage.encode(encodeOptions);

      if (DO_OPTIMIZE) {
        const encodedImage = await ingestedImage.encodedWith[encoder];
        await fse.outputFile(destinationPath, encodedImage.binary);
        action += 'optimized';
      }

      if (ENCODE_WEBP) {
        // WebP
        const encodedImageWebp = await ingestedImage.encodedWith.webp;
        const destinationPathWebp = WEBP_SUFFIX_ADD
          ? path.join(OUTPUT_DIR + '/webp/', imagePath) + '.webp'
          : path.join(OUTPUT_DIR + '/webp/', imagePath).slice(0, fileExtension.length * -1) + 'webp';

        await fse.outputFile(destinationPathWebp, encodedImageWebp.binary);

        if (action !== '') {
          action += ' and ';
        }

        action += 'encoded to webp';
      }
    }

    // 変換結果表示
    ts_worker_end = Date.now();
    console.info(
      '[',
      encodedFileNum++,
      '/',
      targetFileNum,
      ']',
      imagePath,
      'is',
      action,
      '(',
      ts_worker_end - ts_worker_start,
      'ms',
      ')'
    );
    ts_worker_start = ts_worker_end;
  })
);

// 結果表示
console.info('done!', '(', 'total:', ts_worker_end - ts_start, 'ms', ')');
await imagePool.close();
