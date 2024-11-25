<?php
/*
Template Name: page_interview_en
Template Post Type: post, page, interview
*/
?>
<?php get_header(null, array('locale' => 'en_US')); ?>

<?php get_template_part('md-slidemenu-interview', null, array('locale' => 'en_US')); ?>
<span class="menu-button lg-show"><i class="fa fa-bars"></i></span>

<div id="container">
  <div id="content">
    <div class="presents">
      <a href="/en/">
        <img
          src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/logo_philosophy_presents.png"
          alt='Presented by "My Philosophy®︎"'>
      </a>
    </div>
    <div class="detailMain">
      <div class="taC logo pc">
        <a class="scroll" href="/en/">
          <img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/detail_main_title_en.png"
            alt="My Philosophy®︎ | Interview and Dialogue Series">
        </a>
      </div>
      <div class="taC logo sp">
        <a class="scroll" href="/en/">
          <img
            src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/detail_main_title_sp_en.png"
            alt="My Philosophy®︎ | Interview and Dialogue Series">
        </a>
      </div>
    </div>
    <div class="container">
      <div id="main">
        <img src="<?php the_field('eyecatch'); ?>" id="eyecatch" alt="<?php the_title(); ?>" />
        <div id="main-inner">
          <div class="lead">
            <p><?php the_field('lead_txt'); ?></p>
          </div>
<!---------------------------------------------------
言語切り替えボタン
--------------------------------------------------->
          <div class="LangBtn">
            <?php if( get_field('link_jp') ): ?>
            <a href="<?php the_field('link_jp'); ?>">Japanese</a>
            <?php endif; ?>
            <!-- <?php if( get_field('link_al') ): ?>
            <a href="<?php the_field('link_al'); ?>">Albanian</a>
            <?php endif; ?> -->
            <?php if( get_field('link_ch') ): ?>
            <a href="<?php the_field('link_ch'); ?>">Chinese</a>
            <?php endif; ?>
            <?php if( get_field('link_fr') ): ?>
            <a href="<?php the_field('link_fr'); ?>">French</a>
            <?php endif; ?>
          </div>
<!---------------------------------------------------
言語切り替えボタン
--------------------------------------------------->
          <div class="cB"></div>
          <div class="profile">
            <h3 class="widget-title mT0">Profile</h3>
            <?php $volume = get_field('interview_vol') ? get_field('interview_vol') : get_post_number('interview'); ?>
            <p class="large"><strong>Vol.<span id="js-number"><?php echo $volume; ?></span>
                <?php the_field('name'); ?></strong></p>
            <p>
              <?php echo wp_kses_post(get_field('position')); ?><br>
              <?php echo wp_kses_post(get_field('profile')); ?>
            </p>
            <?php
              $tags = get_the_terms($post->ID, 'interview_tag_en');
              if ($tags):
            ?>
            <div class="article-detail__tag">
              <?php foreach ($tags as $tag): ?>
              <span class="article-detail__tag-item">#<?php echo $tag->name; ?></span>
              <?php endforeach; ?>
            </div>
            <?php endif; ?>
          </div>
          <?php the_content(); ?>
        </div>
      </div>
      <?php get_template_part('md-sidebar-interview_en', null, array('locale' => 'en_US')); ?>
    </div>
  </div>
</div>

<?php get_footer(null, array('locale' => 'en_US')); ?>