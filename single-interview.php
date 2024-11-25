<?php
/*
  Template Name: page_interview
  Template Post Type: post, page, interview
*/
?>
<?php get_header(null, array('locale' => 'ja')); ?>
<?php get_template_part('md-slidemenu-interview', null, array('locale' => 'ja')); ?>
<span class="menu-button lg-show"><i class="fa fa-bars"></i></span>
<div id="container">
  <div id="content">
    <div class="presents">
      <a href="/interview/"><img
          src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/logo_philosophy_presents.png"
          alt="私の哲学Presents"></a>
    </div>
    <div class="detailMain">
      <div class="taC logo pc">
        <a class="scroll" href="/interview/"><img
            src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/detail_main_title.png"
            alt="インタビュー・対談シリーズ「私の哲学」"></a>
      </div>
      <div class="taC logo sp">
        <a class="scroll" href="/interview/"><img
            src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/detail_main_title_sp.png"
            alt="インタビュー・対談シリーズ「私の哲学」"></a>
      </div>
    </div>
    <div class="container">
      <div id="main">
        <img src="<?php the_field('eyecatch'); ?>" id="eyecatch" alt="<?php the_title(); ?>" />
        <div id="main-inner">
          <div class="lead">
            <p><?php the_field('lead_txt'); ?></p>
          </div>

          <!-- -------------------------------------------------
言語切り替えボタン
各言語のurlを入れるとボタンが表示される！
--------------------------------------------------->

          <div class="LangBtn">
            <?php if( get_field('link_en') ): ?>
            <a href="<?php the_field('link_en'); ?>">English</a>
            <?php endif; ?>
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
            <p class="large"><strong>第<span
                  id="js-number"><?php echo $volume; ?></span>回　<?php the_field('name'); ?></strong><span
                class="small">（<?php the_field('name_kana'); ?>）</span></p>
            <p>
              <?php echo wp_kses_post(get_field('position')); ?><br>
              <?php echo wp_kses_post(get_field('profile')); ?>
            </p>
          </div>
          <?php the_content(); ?>
        </div>
        <?php
            $comments = SCF::get('comment');
            if ($comments[0]['comment_message']):
          ?>
        <div class="main-comments">
          <div class="main-comments__inner">
            <h2 class="main-comments__heading">読者コメント</h2>
            <div class="main-comments__main">
              <?php foreach ($comments as $comment): ?>
              <div class="main-comments__item">
                <span class="main-comments__name"><?php echo $comment['comment_name']; ?></span>
                <p class="main-comments__message"><?php echo $comment['comment_message']; ?></p>
              </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
        <?php endif; ?>
      </div>
      <?php get_template_part('md-sidebar-interview', null, array('locale' => 'ja')); ?>
    </div>
  </div>
</div>

<?php get_footer(null, array('locale' => 'ja')); ?>