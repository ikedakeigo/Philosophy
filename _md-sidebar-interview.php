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
<div id="sidebar" class="sidemenu">
  <div class="sideBnrWrap">
	<a href="https://prtimes.jp/main/html/rd/p/000000002.000141808.html" target="_blank">
      <img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bnr_img_aod.jpg">
    </a>  
	  
	  
    <a href="https://masaakimiyazawa.jp/" target="_blank">
      <img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bnr_img_miyazawa.jpg">
    </a>
    
  </div> 
  <h3 class="widget-title">Milestone(2007~)</h3>
  <ul>
    <?php if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post(); ?>
      <li class="clearfix">
        <a href="<?php the_permalink(); ?>">
          <img src="<?php the_field('thumb_sidebar'); ?>" width="70" height="70" class="thumb">
          <p class="phil-name"><?php the_title(); ?></p>
          <p class="phil-title"><?php echo wp_kses_post(get_field('position')); ?></p>
        </a>
      </li>
    <?php endwhile; endif; wp_reset_query(); ?>
  </ul>
  <div class="cB"></div>
  <div id="banner-container" class="clearfix lg-hide xl-show" data-sticky_parent>
    <div id="banner" class="clearfix" data-sticky_column></div>
  </div>
</div>