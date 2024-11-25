<?php get_header(); ?>

    <div id="wrapper" class="underlayer">

      <div id="post">
        <?php
        if (have_posts()) : // WordPress ループ
          while (have_posts()) : the_post(); // 繰り返し処理開始 ?>
            <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

              <h4>
                <span><?php the_title();?></span>
              </h4>
              <h5 class="post_date"><?php the_time("Y.m.j") ?></h5>

				<div class="blog_area">
				<div class="blog_main">
              <div class="post_it">

                <div class="post_image">
                  <?php the_post_thumbnail(); ?>
                </div><!-- /.post_image -->

                <?php the_content(); ?>

              </div><!-- /.post -->

              <?php
              $args = array(
                'before' => '<div class="page-link">',
                'after' => '</div>',
                'link_before' => '<span>',
                'link_after' => '</span>',
              );
              wp_link_pages($args); ?>

            
            <div class="pager">
              <?php
              if( get_previous_post() ): ?>
                <?php previous_post_link('%link', 'PREV.'); ?>
                <?php
                endif;

                if( get_next_post() ): ?>
                <?php next_post_link('%link', 'NEXT'); ?>
              <?php
              endif;
              ?>
            </div><!-- /.pager -->
				</div><!-- /.blog_main -->
          <div class="side">
            <?php get_sidebar(); ?>
          </div><!-- /.side -->
				</div><!-- /.blgo_area -->

          <?php
          endwhile; // 繰り返し処理終了
        else : // ここから記事が見つからなかった場合の処理 ?>
            <div class="post_it">
              <h2>記事はありません</h2>
              <p>お探しの記事は見つかりませんでした。</p>
            </div>
        <?php
        endif;
        ?>

        <div id="other">
          <h4>
            <span>OTHER</span>
          </h4>
          <div class="other_posts">
            <div class="blog_area">
              <?php include( TEMPLATEPATH . '/related-entries.php' ); ?>
            </div><!-- /.other_posts -->

          </div><!-- /.blog_area /#bx -->
        </div><!-- /#other -->

      </div><!-- /#post -->
      
<!-- footer -->
<?php get_footer(); ?>
<!-- /#footer -->
