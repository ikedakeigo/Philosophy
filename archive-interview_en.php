<?php
get_header(null, $args);

$locale = $args['locale'] ? $args['locale'] : 'en';
$is_ja = $locale === 'ja';

// ここで英語と日本語の投稿タイプを分けて設定
$the_query = new WP_Query(array(
    'post_type' =>  'interview_en', // 英語の場合は 'interview_en'
    'order' => 'DESC',
    'orderby' => 'meta_value_num',
    'meta_key' => 'interview_vol',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'has_password' => false,
));

$home_url = $is_ja ? home_url() : home_url('interview_en'); // 英語のURL設定
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

<!-- メニューの表示 -->
<span class="menu-button lg-show"><i class="fa fa-bars"></i></span>

<?php get_template_part('md-slidemenu-interview', null, $args); ?>

<!-- ページスタイルの設定 -->
<style>
  body {
    visibility: hidden;
  }
  body.loaded {
    visibility: visible;
  }
</style>

<div id="container">
  <div id="content">
    <div class="cntHdr">
      <h1><a href="/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_logo_phy.png" alt="私の哲学"></a></h1>
      <p>Leading the Future: Leaders' Interviews</p>
    </div>

    <!-- <?php if (!$is_ja): ?>
      <div class="top-category pB60">
        <div class="container">
          <h2 class="top-heading">Interview Directory</h2>
          <div class="interview-directory">
            <?php
            // 英語のインタビュータグを取得
            $taxonomy = 'interview_tag_en';
            $tags = get_terms($taxonomy);
            foreach ($tags as $tag):
                $is_show = get_field('interview_tag_show', $taxonomy . '_' . $tag->term_id);
                if ($is_show):
            ?>
                <a class="interview-directory__item" href="<?php echo get_term_link($tag); ?>">
                  <?php echo $tag->name; ?>
                </a>
            <?php endif; endforeach; ?>
          </div>
        </div>
      </div>
    <?php endif; ?> -->

    <div class="container">
      <?php if (!$is_ja): ?>
        <h2 class="top-heading">All Interviews</h2>
      <?php endif; ?>
      <div class="pf">
        <div class="row50">
          <?php
          if ($the_query->have_posts()):
            while ($the_query->have_posts()):
              $the_query->the_post();

              $volume = get_field('interview_vol');
              $name = get_field('name');
              $volume_text = $is_ja ? "第{$volume}回" : "Vol.{$volume}";
              $name_text = $is_ja ? "{$name}氏" : $name;
          ?>
              <div class="col_4 md-6 sm-12 pf-item">
                <div class="box-content">
                  <a class="article-card" href="<?php the_permalink(); ?>">
                    <?php
                    the_post_thumbnail(
                      'full',
                      array(
                        'alt' => get_the_title(),
                        'class' => 'philosophy-thumbnail',
                        'loading' => 'eager' // 遅延読み込みを無効化
                      )
                    );
                    ?>

                    <h2>
                      <span class="number"><?php echo $volume_text; ?></span>
                      <span class="small position"><?php echo wp_kses_post(get_field('position')); ?></span>
                      <span class="nowrap"><?php echo $name_text; ?></span>
                    </h2>
                    <div class="box-text">
                      <p class="cB"><?php echo custom_field_excerpt_with_dots('lead_txt'); ?><span class="textlink">READ</span></p>
                    </div>
                    <?php if (!$is_ja): ?>
                      <?php
                      $tags = get_the_terms($post->ID, 'interview_tag_en');
                      if ($tags):
                      ?>
                        <div class="article-card__tag">
                          <?php foreach ($tags as $tag): ?>
                            <span class="article-card__tag-item">#<?php echo $tag->name; ?></span>
                          <?php endforeach;  ?>
                        </div>
                      <?php endif;  ?>
                    <?php endif; ?>
                  </a>
                </div>
              </div>
          <?php endwhile;
          endif;
          wp_reset_query(); ?>
        </div>
      </div>
    </div>
  </div>
</div>


<footer id="footer">
	<div class="container inner">
		<a class="logo_en" href="<?php echo $home_url; ?>">
			<img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_footer_logo_en.png"
				alt="私の哲学Presents" height="500" width="500" loading="lazy" decoding="async" />
		</a>
		<!-- <div class="footer-content">
          <div class="footer-menu">
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/en/about/"
            >About "My Philosophy</a>
            <a
              class="footer-menu-item"
              href="https://ili.inc/"
              target="_blank"
            >Website is managed by ILI</a>
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/en/contact/"
            >Inquiry</a>
          </div> -->

		<div class="footer-content">
			<div class="footer-menu">
				<a class="footer-menu-item"
					href="<?php echo $home_url; ?>/en/about/">
					About "My Philosophy
				</a>
				<a class="footer-menu-item"
					href="https://myphilosophy.global/message/">
					Editor's Message
				</a>
				<a class="footer-menu-item"
					href="<?php echo $home_url; ?>/archives/">
					Past performers
				</a>
				<a class="footer-menu-item" href="https://ili.inc/"
					target="_blank">
					Website is managed by ILI
				</a>
				<a class="footer-menu-item"
					href="<?php echo $home_url; ?>/contact/">
					Inquiry
				</a>
			</div>
			<span class="copyright" translate="no">©︎ <?php echo date('Y'); ?> My Philosophy</span>
		</div>

	</div>
</footer>

<script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/jquery/jquery.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/jquery/jquery-migrate.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sticky.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/fancyBox/source/jquery.fancybox.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery.parallax.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/easing.js"></script>
  
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/us.widgets.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sticky.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/nicescroll.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/init.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery.mixitup.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/loopslider.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/slick/slick.min.js"></script>
    <script type="text/javascript">
      $(function() {
        $('.thumb-item').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.thumb-item-nav' //サムネイルのクラス名
        });
        $('.thumb-item-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.thumb-item', //スライダー本体のクラス名
          focusOnSelect: true,
        });
      });
    </script>


    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/humbergerMenu.js"></script>

    <?php wp_footer(); ?>
  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sp-slidemenu.js" defer></script>

  
    </body>

    </html>
