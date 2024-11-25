<?php 
  $locale = $args['locale'] ? $args['locale'] : 'ja';
  $is_ja = $locale === 'ja';
  $the_query = new WP_Query(array(
    'post_type' => $is_ja ? 'interview' : 'interview',
    'order' => 'DESC',
    'orderby' => 'date',
    'orderby' => 'meta_value_num',
    'meta_key' => 'interview_vol',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'has_password' => false,
  ));
?>
<div id="mobile-menu" class="sidemenu slidemenu lg-show">
  <div class="slidemenu-header">
    <div>
      <a class="scroll" href="/interview/"><img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/logo_media_light.png" alt="インタビュー・対談シリーズ『私の哲学』"></a>
    </div>
  </div>
  <div class="slidemenu-body">
    <ul id="menu-navi" class="sidebar-menu slidemenu-content">
      <?php if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post(); ?>
        <li class="clearfix">
          <a href="<?php the_permalink(); ?>">
            <img src="<?php the_field('thumb_sidebar'); ?>" width="70" height="70" class="thumb"/>
            <p class="phil-name"><?php the_title(); ?></p>
            <p class="phil-title"><?php echo wp_kses_post(get_field('position')); ?></p>
          </a>
        </li>
      <?php endwhile; endif; wp_reset_query(); ?>
    </ul>
  </div>
</div>