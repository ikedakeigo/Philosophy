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
	  
	  
	  
	<a href="https://amzn.asia/d/iaf48Ai" target="_blank">
      <img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/do_chan_3.jpg">
    </a>  
	  
	  <div id="myplace"></div>
  
<script type="text/javascript">
var lists=[
	
"<a href='https://prtimes.jp/main/html/rd/p/000000002.000141808.html'><img src='<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bnr_img_aod.jpg'></a>",		
	
"<a href='https://prtimes.jp/main/html/rd/p/000000003.000141808.html'><img src='<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bnr_img_mierusa.jpg'></a>",	
	

	
"<a href='https://daisukesugiyama.jp/'><img src='<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bn_global_business_consulting.jpg'></a>",
	
"<a href='https://www.amazon.co.jp/%25E3%2580%2590%25E4%25B8%2596%25E7%2595%258C%25E6%25A8%2599%25E6%25BA%2596%25E3%2580%2591AO%25E5%25BC%258F%25E5%25AD%2590%25E8%2582%25B2%25E3%2581%25A6-DK%25E3%2582%25B9%25E3%2582%25AE%25E3%2583%25A4%25E3%2583%259E/dp/4867341452/ref=sr_1_1?__mk_ja_JP=%25E3%2582%25AB%25E3%2582%25BF%25E3%2582%25AB%25E3%2583%258A&amp;crid=38JIPGWH4ANJO&amp;keywords=AO%25E5%25BC%258F&amp;qid=1696317892&amp;sprefix=ao%25E5%25BC%258F%252Caps%252C187&amp;sr=8-1&_encoding=UTF8&tag=interliteracy-22&linkCode=ur2&linkId=d62412a56c63ba72520b6d8119fb65ee&camp=247&creative=1211' target='_blank'><img src='<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bn_ao_kosodate2.jpg'></a>",

"<a href='https://doers.style/' target='_blank'><img src='<?php echo get_template_directory_uri(); ?>/img/philosophy/philosophy/bnr_img_doers.jpg'></a>",
];
  
var rNo = Math.floor(Math.random() * lists.length);
document.getElementById('myplace').innerHTML = lists[rNo];
</script>
	  
	  
   
    
  </div> 
  <h3 class="widget-title"><a href="https://myphilosophy.global/archives/">Milestone(2007~)</a></h3>
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