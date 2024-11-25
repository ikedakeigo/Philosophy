<?php

/**
 * headにmetaタグを出力
 */

function post_has_archive($args, $post_type){
  if('post'== $post_type){
    $args['rewrite']=true;
    $args['has_archive']='archives';
  }
  return $args;
}

add_filter('register_post_type_args', 'post_has_archive', 10, 2);

function create_meta() {
  if (is_front_page() || is_home() || is_singular()) {
    global $post;
    $ogp_img = '';
    $insert = '';

    if (is_singular() && has_post_thumbnail()) {
      $ps_thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
      $ogp_img = $ps_thumb[0];
    } else {
      $ogp_img = get_template_directory_uri() . '/src/img/ogimage.jpg';
    }

    //出力するOGPタグ
    $insert .= '<meta property="og:image" content="'.esc_url($ogp_img).'" />' . "\n";
    $insert .= '<meta property="og:image:secure_url" content="'.esc_url($ogp_img).'" />' . "\n";
    $insert .= '<meta property="twitter:image" content="'.esc_url($ogp_img).'" />' . "\n";
    echo $insert;
  }
}
add_action('wp_head','create_meta');

//アイキャッチサムネイル
add_theme_support('post-thumbnails');
add_image_size('thumb100',100,100,true);
add_image_size('thumb110',110,110,true);

//カスタムメニュー
register_nav_menus(array('gnav' => 'ナビゲーションバー'));
register_nav_menus(array('foot_nav' => 'フッターのナビゲーション'));

//カスタムヘッダー
$args = array(
  'width'         => 986,
  'height'        => 150,
  'flex-height' => true,
  'default-image' => get_template_directory_uri() . '/images/stinger3.png',
);
add_theme_support( 'custom-header', $args );


//RSS
add_theme_support('automatic-feed-links');

//エディタスタイル
add_theme_support('editor-style');
add_editor_style('editor-style.css');
function custom_editor_settings( $initArray ){
  $initArray['body_class'] = 'editor-area';
  return $initArray;
}
add_filter( 'tiny_mce_before_init', 'custom_editor_settings' );

//画像に重ねる文字の色
define('HEADER_TEXTCOLOR', '');

//画像に重ねる文字を非表示にする
define('NO_HEADER_TEXT',true);

//投稿用ファイルを読み込む
get_template_part('functions/create-thread');

//カスタム背景
add_theme_support( 'custom-background' );

//search-〇〇.phpを使用するための記述
add_filter('template_include','custom_search_template');
function custom_search_template($template){
  if ( is_search() ){
    $post_types = get_query_var('post_type');
    foreach ( (array) $post_types as $post_type )
      $templates[] = "search-{$post_type}.php";
    $templates[] = 'search.php';
    $template = get_query_template('search',$templates);
  }
  return $template;
}

//検索ワードが0や未入力のときにもsearch.phpを使う
function search_template_redirect() {
  global $wp_query;
  $wp_query->is_search = true;
  $wp_query->is_home = false;
  if (file_exists(TEMPLATEPATH . '/search.php')) { 
    include(TEMPLATEPATH . '/search.php');
  }
  exit;
}
if (isset($_GET['s']) && $_GET['s'] == false) {
  add_action('template_redirect', 'search_template_redirect');
}

//ページネーション
function pagination($pages = '', $range = 2){
     $showitems = ($range * 2)+1;
     global $paged;
     if(empty($paged)) $paged = 1;
     if($pages == ''){
         global $wp_query;
         $pages = $wp_query->max_num_pages;
         if(!$pages) {
           $pages = 1;
         }
     }
     if(1 != $pages){
        echo '<div class="pagination">';
        echo '<div class="page_inner">';
        echo '<span class="page-of">Page'.$paged."/".$pages.'</span>';
         if($paged > 2 && $paged > $range+1 && $showitems < $pages){
            echo '<a class="m-prev" href="'.get_pagenum_link(1).'"><<</a>';
        }
        if($paged > 1){
            echo '<a class="pn-prev" href="'.get_pagenum_link($paged - 1).'">< Prev.</a>';
        }
         for ($i=1; $i <= $pages; $i++)
         {
             if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
             {
                 echo ($paged == $i)? '<span class="current">'.$i.'</span>':'<a href="'.get_pagenum_link($i).'" class="pn-numbers">'.$i.'</a>';
             }
         }
        if($paged < $pages){
            echo '<a class="pn-next" href="'.get_pagenum_link($paged + 1).'">Next ></a>';
        }
        if($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages){
            echo '<a class="m-next" href="'.get_pagenum_link($pages).'">>></a>';
        }
        echo '</div></div>';
    }
}

//ウイジェット追加
if(function_exists('register_sidebars')) {
    register_sidebars(2,
      array(
      'name' => 'サイドバー%d',
      'before_widget' => '<div id="%1$s" class="archive %2$s">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="en">',
      'after_title' => '</h3>',
    ));
}

//contents widthの指定
if ( ! isset( $content_width ) ) $content_width = 546;

//更新日の追加
function get_mtime($format) {
    $mtime = get_the_modified_time('Ymd');
    $ptime = get_the_time('Ymd');
    if ($ptime > $mtime) {
        return get_the_time($format);
    } elseif ($ptime === $mtime) {
        return null;
    } else {
        return get_the_modified_time($format);
    }
}

//ショートコードを外す
function stinger_noshotcode( $content ) {
    if ( ! preg_match( '/\[.+?\]/', $content, $matches ) ) {
        return $content;
    }

    $content = str_replace( $matches[0], '', $content );

    return $content;
}

if ( function_exists('register_sidebar') )
    register_sidebar();
register_nav_menus(array(
        'main_navigation' => 'Primary Navigation'
    )
);

function new_excerpt_mblength($length) {
     return 100;
}
add_filter('excerpt_mblength', 'new_excerpt_mblength');

function new_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');


//記事別にhead内に追加
add_action('admin_menu', 'add_head_hooks');
add_action('save_post', 'save_add_head');
add_action('wp_head','insert_add_head');
function add_head_hooks() {
	add_meta_box('add_head', 'headに追加', 'add_head_input', 'post', 'normal', 'high');
	add_meta_box('add_head', 'headに追加', 'add_head_input', 'page', 'normal', 'high');
}
function add_head_input() {
	global $post;
	echo '<input type="hidden" name="add_head_noncename" id="add_head_noncename" value="'.wp_create_nonce('add-head').'" />';
	echo '<textarea name="add_head" id="add_head" rows="5" cols="30" style="width:100%;">'.get_post_meta($post->ID,'_add_head',true).'</textarea>';
}
function save_add_head($post_id) {
	if (!wp_verify_nonce($_POST['add_head_noncename'], 'add-head')) return $post_id;
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
	$add_head = $_POST['add_head'];
	update_post_meta($post_id, '_add_head', $add_head);
}
function insert_add_head() {
	if (is_page() || is_single()) {
		if (have_posts()) : while (have_posts()) : the_post();
			echo get_post_meta(get_the_ID(), '_add_head', true);
		endwhile; endif;
		rewind_posts();
	}
}

//固定ページのpタグ挿入削除
function wpautop_filter($content) {
    global $post;
    $remove_filter = false;
    $arr_types = array('page', 'interview', 'interview_en'); //autopを無効にする投稿タイプを配列として用意する
    $post_type = get_post_type($post->ID);
    if (in_array($post_type, $arr_types)) $remove_filter = true;
    if ($remove_filter) {
      remove_filter('the_content', 'wpautop');
      remove_filter('the_excerpt', 'wpautop');
    }
  return $content;
}
add_filter('the_content', 'wpautop_filter', 9);

/**
 * wp_title()の日付アーカイブのタイトルを変更
 */
function adjust_date_title( $title, $sep, $seplocation ) {
	$m        = get_query_var( 'm' );
	$year     = get_query_var( 'year' );
	$monthnum = get_query_var( 'monthnum' );
	$day      = get_query_var( 'day' );
	$date_title = '';

	// mパラメータがある場合 (パーマリンク設定がデフォルトの場合の日付アーカイブ)
	if ( is_archive() && ! empty( $m ) ) {
		$my_year  = substr( $m, 0, 4 );
		$my_month = substr( $m, 4, 2 );
		$my_day   = substr( $m, 6, 2 );
		$date_title    = $my_year . '年' . ( $my_month ? $my_month . '月' : '' ) . ( $my_day ? $my_day . '日' : '' );
	}
	// yearパラメータがある場合 (パーマリンク設定がデフォルト以外の日付アーカイブ)
	if ( is_archive() && ! empty( $year ) ) {
		$date_title = $year . '年';
		if ( ! empty( $monthnum ) ) {
			$date_title .= zeroise( $monthnum, 2 ) . '月';
		}
		if ( ! empty( $day ) ) {
			$date_title .= zeroise( $day, 2 ) . '日';
		}
	}
	// 日付調整を行ったタイトルがあれば区切り文字を追加(左か右)
	if ( '' != $date_title ) {
		if ( 'right' == $seplocation ) {
			$title = $date_title . " $sep ";
		} else {
			$title = " $sep " . $date_title;
		}
	}
	
	return $title;
}
add_filter( 'wp_title', 'adjust_date_title', 10, 3 );

//概要（抜粋）の文字数調整
// function my_excerpt_length($length) {
// 	return 100;
// }
// add_filter('excerpt_length', 'my_excerpt_length');


function custom_excerpt_length($length) {
  if (is_post_type_archive('interview_en') || is_singular('interview_en')) {
      return 200; // 英語の投稿のみ200文字
  }
  return 100; // その他はデフォルトの100文字
}
add_filter('excerpt_length', 'custom_excerpt_length');




//ショートコード生成
function my_php_Include($params = array()) {
  extract(shortcode_atts(array('file' => 'default'), $params));
  ob_start();
  include(STYLESHEETPATH . "/$file.php");
  return ob_get_clean();
}
add_shortcode('myphp', 'my_php_Include');

//現在の記事は何記事目かを取得
function get_post_number( $post_type = 'post', $op = '<=' ) {
  global $wpdb, $post;
  $post_type = is_array($post_type) ? implode("','", $post_type) : $post_type;
  $number = $wpdb->get_var("
    SELECT COUNT( * )
    FROM $wpdb->posts
    WHERE post_date {$op} '{$post->post_date}'
    AND post_status = 'publish'
    AND post_type = ('{$post_type}')
  ");
  return $number;
}

/**
 * 404ページをトップページにリダイレクト
 */
add_action('template_redirect', 'is404_redirect');
function is404_redirect() {
  if (is_404()) {
    wp_safe_redirect(home_url('/'), 301);
    exit();
  }
}

/**
 * Contact Form 7の自動pタグ無効
 */
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}

/**
 * 自動生成CSSを削除
 */
add_action('wp_enqueue_scripts', function() {
  wp_deregister_style('wp-block-library');
  wp_deregister_style('global-styles');
});

/**
 * 非公開の記事をメインループから除外
 */
function custom_posts() {
  global $wp_query;
  if($wp_query->is_admin) return;
  if(is_post_type_archive()){
    $wp_query->query_vars['post_status'] = 'publish';
  }
}
add_filter('pre_get_posts', 'custom_posts');

/**
 * 第三者共有リンクの有効期限を変更
 */
add_filter('ppp_nonce_life', 'my_nonce_life');
function my_nonce_life() {
  return 60 * 60 * 24 * 31; // 31 days
}

/**
 * 「SEO SIMPLE PACK」プラグインで出力されるタイトルタグを書き換え
 */
function ssp_output_english_title($ssp_title) {
  if (is_archive('interview_en')) return 'My Philosophy®︎ | Interview and Dialogue Series';
  return $ssp_title;
}
add_filter('ssp_output_title', 'ssp_output_english_title');

/**
 * 「SEO SIMPLE PACK」プラグインで出力されるサイト説明文を書き換え
 */
function ssp_output_english_description($ssp_description) {
  if (is_archive('interview_en')) return 'In the interview series "My Philosophy®︎," Editor-in-Chief Daisuke Sugiyama conducts discussions with opinion leaders from various fields around the world, exploring their cherished philosophies and beliefs along with their personal experiences, and introducing them to our readers.';
  return $ssp_description;
}
add_filter('ssp_output_description', 'ssp_output_english_description');

/**
 * カスタムフィールド「interview_vol」の入力値に応じて投稿を並び替え
 */
function my_add_columns($columns) {
  $columns['volume'] = 'volume';
  return $columns;
}
add_filter( 'manage_edit-interview_en_columns', 'my_add_columns' );

function my_add_columns_content($column_name, $post_id) {
  if ($column_name == 'volume') {
    $metas = get_post_meta($post_id);
    $stitle = $metas['interview_vol'][0];
  }
  if (isset($stitle) && $stitle) echo esc_attr($stitle);
}
add_action( 'manage_interview_en_posts_custom_column', 'my_add_columns_content', 10, 2 );

function my_add_sort($columns){
  $columns['volume'] = 'volume';
  return $columns;
}

function my_add_sort_by_meta($query) {
  if ($query->is_main_query() && ($orderby = $query->get('orderby'))) {
    switch($orderby) {
      case 'volume':
        $query->set('meta_key', 'interview_vol');
        $query->set('orderby', 'meta_value_num');
        break;
    }
  }
}
add_filter('manage_edit-interview_en_sortable_columns', 'my_add_sort');
add_action('pre_get_posts', 'my_add_sort_by_meta', 1);


function basic_auth($auth_list,$realm="Restricted Area",$failed_text="認証に失敗しました"){
if (isset($_SERVER['PHP_AUTH_USER']) and isset($auth_list[$_SERVER['PHP_AUTH_USER']])){
if ($auth_list[$_SERVER['PHP_AUTH_USER']] == $_SERVER['PHP_AUTH_PW']){
return $_SERVER['PHP_AUTH_USER'];
}
}
header('WWW-Authenticate: Basic realm="'.$realm.'"');
header('HTTP/1.0 401 Unauthorized');
header('Content-type: text/html; charset='.mb_internal_encoding());
die($failed_text);
}



// wpautopが自動的に段落を削除
remove_filter('the_content', 'wpautop');
remove_filter('the_excerpt', 'wpautop');