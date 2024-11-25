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

<?php get_template_part('md-slidemenu-interview', null, $args); ?>

<div id="container">
  <div id="content">
    <div class="cntHdr">
	  　<h1><a href="/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_logo_phy.png" alt="私の哲学" ></a></h1>
		  <p>時代を先導するリーダーズインタビュー</p>
	  </div>
  
    <?php if (!$is_ja): ?>
      <div class="top-category pB60">
        <div class="container">
          <h2 class="top-heading">Interview Directory</h2>
          <div class="interview-directory">
            <?php
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
    <?php endif; ?>
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
                    <p class="cB"><?php the_field('lead_txt'); ?><span class="textlink">READ</span></p>
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
          <?php endwhile; endif; wp_reset_query(); ?>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(null, $args); ?>