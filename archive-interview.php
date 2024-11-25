<?php 
  get_header(null, $args);

  $locale = $args['locale'] ? $args['locale'] : 'ja';
  $is_ja = $locale === 'ja';
  $the_query = new WP_Query(array(
    'post_type' => $is_ja ? 'interview' : 'interview_en',
    'order' => 'DESC',
    'orderby' => 'meta_value_num',
    'meta_key' => 'interview_vol',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'has_password' => false,
  ));

  $home_url = $is_ja ? home_url() : home_url('en');
  $text = array(
    'main_alt' => $is_ja ? 'インタビューシリーズ『私の哲学®︎』' : 'My Philosophy®︎ | Interview and Dialogue Series',
    'about_button' => $is_ja ? '『私の哲学』について' : '"About My Philosophy"'
  );

  $image = array(
    'main_pc' => $is_ja
      ? get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_pc.png'
      : get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_pc_en.png',
    'main_sp' => $is_ja
      ? get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_sp.png'
      : get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_sp_en.png',
  );
?>

<span class="menu-button lg-show"><i class="fa fa-bars"></i></span>

<!-- <?php get_template_part('md-slidemenu-interview', null, $args); ?> -->



<div id="container">
  <div id="content">
	  <div class="cntHdr">
	  　<h1><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_logo_phy.png" alt="『私の哲学』" ></h1>
		  <p>時代を先導するリーダーズインタビュー</p>
		  
		  <div class="l-header__navigation">
        <div class="l-header__navigation-inner" data-transition>
                    <a
            class="l-header__cta"
            href="/en/"
          ><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_icm_en.png" alt="EN" ></a>
          
        </div>
      </div>
	  </div>
	  
	  <video controls autoplay muted playsinline>
  <source src="<?php echo get_template_directory_uri(); ?>/img/top/top_movie.mov" type="video/mp4" />
  <p>
    このブラウザーは HTML の動画に対応していません。代わりに<a
      href="<?php echo get_template_directory_uri(); ?>/img/top/top_movie.mov"
      >動画へのリンク</a
    >があります。
  </p>
</video>

	  <div class="cntHdrTxt">
	  	<p>めまぐるしい変化を遂げる世の中で、人も企業も成長し続けるためには<br class="pc">「アイデンティティー」の確立が必要不可欠だと考えます。<br class="pc">『私の哲学』では、世界を知る各界でご活躍中のオピニオンリーダーの方々に、<br class="pc">大切にしておられる哲学や信条をご経験談とともに伺い、皆様に紹介して参ります。<br class="pc">未来を生きるヒントを発信する情報サイトです。<br><span>編集長　杉山大輔</span>
</p>
	  </div>
	  
	  <div class="cntBnrWrp">
	  	<ul>
			<li>
				<dl>
					<dt><a href="/about/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_bnr_01.jpg" alt="『私の哲学』について" ></a></dt>
				  <dd><a href="https://myphilosophy.global/about/">『私の哲学』について</a></dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><a href="/message/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_bnr_02.jpg" alt="編集長について" ></a></dt>
					<dd><a href="https://myphilosophy.global/message/">編集長について</a></dd>
				</dl>
			</li>
		</ul><br style="clear: both;">
	  </div>
	  
	  <br style="clear: both;">
	  
	  <div class="cntIntBg">
	  	<div class="cntIntWrp">
			<h2>最新号</h2> 
			
			
			<?php 
        $args = array(
            'post_type' => 'interview', // 投稿タイプのスラッグ
            'posts_per_page' => 3,  // 1ページあたりの表示数
            'paged' => $paged
            );
            $the_query = new WP_Query( $args ); if($the_query->have_posts()):
        ?>

				<ul>
					<?php while($the_query->have_posts()): $the_query->the_post();?>
					<li>
						<dl>
							<dt>
								<a href="<?php the_permalink(); ?>">
									<?php
if (has_post_thumbnail() ) {
// アイキャッチ画像が設定されてれば大サイズで表示
the_post_thumbnail('large');
} else {
// なければnoimage画像をデフォルトで表示
echo '<img src="' . esc_url(get_template_directory_uri()) . '/img/noimg.png" alt="">';
}
?>
								</a>
							</dt>
							<dd>
					
<?php the_excerpt(); ?>
		<a href="<?php the_permalink(); ?>">	
							 READ
							</a>

							</dd>
						</dl>
					</li>
					<?php endwhile; ?>
				</ul> <br style="clear: both;">

				<?php wp_reset_postdata();?>
				<?php else:?>
				<?php endif;?>

			</div>
		 
		  <div class="cntIntWrp">
			<h2>最も読まれたインタビュー</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/otsuka_k/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_16_main.jpg" alt="vol.16" ></a></dt>
						<dd>家業を継ぐ形で社長に就任した大塚久美子氏は、幼い頃から親しんできた家具に対する思い入れが人一倍。家具と人々のライフスタイルに関わる価値観から環境問題まで、熱い思いを伺いました。<a href="https://myphilosophy.global/interview/otsuka_k/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/kuma_k/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_56_main.jpg" alt="vol.56" ></a></dt>
						<dd>1回目の東京オリンピックを見たことで建築家を目指し、二度目の東京オリンピックには、自らが建築家として携わることになった隈研吾氏。「不思議な巡り合わせ。運命」と語る氏に、建築へのこだわりを伺いました。<a href="https://myphilosophy.global/interview/kuma_k/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/tohdo_k/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_58_main.jpg" alt="vol.58" ></a></dt>
						<dd>会員制クラブ“ロイヤルボックス”の名が全国に届くクラブに育て上げた、藤堂和子氏。第58回は、クラブ経営にとどまらず、執筆、講演会など幅広く活動されている氏にご登場いただきました。<a href="https://myphilosophy.global/interview/tohdo_k/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
			  
		</div>
		  
		  
		  <div class="cntIntWrp">
			<h2>編集長厳選</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/miura_y/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_36_main.jpg" alt="vol.36" ></a></dt>
						<dd>世界最高峰のエベレスト登頂に、世界最高齢となる80歳224日で成功した、三浦雄一郎氏。82歳になってもなおアグレッシブな氏が目指す、今後のチャレンジ目標などについて伺いました。<a href="https://myphilosophy.global/interview/miura_y/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/amari_n/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_48_main.jpg" alt="vol.48" ></a></dt>
						<dd>浄土宗寺院専修寺の住職である、甘利直義氏。『私の哲学』編集長の子どもたちが通った、専修幼稚園の園長でもある氏に、人の生き方についてお話しいただきました。<a href="https://myphilosophy.global/interview/amari_n/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/aoki_i/"><img src="https://myphilosophy.global/wp-content/uploads/2020/07/74.jpg" alt="vol.74" ></a></dt>
						<dd>日本プロゴルフ界のレジェンド、青木功氏。1,250試合以上戦ってきた氏に、経験から得た夢の実現、目標達成のための極意を伺いました。<a href="https://myphilosophy.global/interview/aoki_i/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
		</div>
		  
		  <div class="cntIntWrp">
			<h2>遺された哲学</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/idei_n/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_19_main.jpg" alt="vol.19" ></a></dt>
						<dd>ソニーグループを世界的な企業へと牽引し、今もなお日本経済界の中心的存在として活躍を続ける出井伸之氏。ソニー時代のエピソードや経営哲学、日本とアジアのこれからについてお話しいただきました。<a href="https://myphilosophy.global/interview/idei_n/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/suzuki_e/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_13_main.jpg" alt="vol.13" ></a></dt>
						<dd>独立して35年。現在もなお精力的に作品を生み出し続ける建築家・鈴木エドワード氏。原子論や哲学、科学にも造詣が深く、トライアスロンなどのスポーツもタフにこなす。65歳とは思えないパワフルな行動力の源と建築家としての使命について伺いました。<a href="https://myphilosophy.global/interview/suzuki_e/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/kato_h/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_12_main.jpg" alt="vol.12" ></a></dt>
						<dd>加藤寛先生は、経済学者として、日本の経済政策の理論と実践における中心的な役割を担ってきました。日本の行政改革をリードする先生に、今の日本に必要なものはなにか、私たちは何をすべきなのか、お話を伺いました。<a href="https://myphilosophy.global/interview/kato_h/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
		</div>
	  
	  <br style="clear: both;">
	  </div>
  
    <div class="cntIntWrp2">
			<h2>出演者一覧　(2007~)</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/george_a/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/george_a/img_85_06.jpg" alt="vol.85" ></a></dt>
						<dd>第85回　ハワイ州元知事　ジョージ・アリヨシ　<a href="https://myphilosophy.global/interview/george_a/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/ookura_t/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/ookura_t/5.jpg" alt="vol.53" ></a></dt>
						<dd>第53回　株式会社鳥貴族 代表取締役社長　大倉 忠司　<a href="https://myphilosophy.global/interview/ookura_t/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/konishi_d/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/konishi_d/5.jpg" alt="vol.50" ></a></dt>
						<dd>第50回　ファッションデザイナー　ドン 小西　<a href="https://myphilosophy.global/interview/konishi_d/">READ</a></dd>
					</dl>
				</li>
			</ul>
		
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/yoshida_j/"><img src="/wp-content/uploads/2024/08/img_42_sub.jpg" alt="vol.42" ></a></dt>
						<dd>第42回　ヨシダソース創業者　吉田 潤喜　<a href="https://myphilosophy.global/interview/yoshida_j/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/kikuma_y/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/kikuma_y/_DSC2851.jpg" alt="vol.33" ></a></dt>
						<dd>第33回　弁護士　菊間 千乃　<a href="https://myphilosophy.global/interview/kikuma_y/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/interview/tateishi_f/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/tateishi_f/_DSC6559.jpg" alt="vol.20" ></a></dt>
						<dd>第20回　オムロン株式会社 取締役会長　立石 文雄　<a href="https://myphilosophy.global/interview/tateishi_f/">READ</a></dd>
					</dl>
				</li>
			</ul>
		
		<br style="clear: both;">
		<div class="btnArcWrp"><a href="<?php echo home_url(); ?>/archives">一覧へ</a></div>
		
		<p class="atnTxt">※肩書は、インタビュー実施当時のものです。</p>
		</div>
    
    
  </div>
</div>

<?php get_footer(null, $args); ?>