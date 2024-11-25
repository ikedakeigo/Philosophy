<?php
/* Template Name: blog-top */
?>

<?php get_header(); ?>
  
    <div id="wrapper" class="underlayer">
      <div class="inner">

      <div class="sp_ttl sp">
        <h2><?php wp_title(''); ?></h2>
      </div><!-- /.sp_ttl -->
      
      <h2 class="pc blog_top_title"><?php wp_title(''); ?></h2>
       
        <div class="blog_area">
			    <div class="blog_main">
            <div class="news">
              <?php
                $args = array(
                  'post_type' => 'post', /* 投稿タイプ */
                  'paged' => $paged
                ); ?>
                <?php query_posts( $args ); ?>
                <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post();
              /* ループ開始 */ ?>

              <article>
                <div class="news_image">
                  <a href="<?php the_permalink() ?>">
                    <?php the_post_thumbnail(); ?>
                  </a>
                </div><!-- /.news_image -->
                <div class="news_summary">
                  <h2 class="news_title">
                    <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
                  </h2>
                  <p class="news_text"><a href="<?php the_permalink() ?>"><?php echo get_the_excerpt(); ?></a></p>
                  <div class="news_info">
                    <p class="date"><?php the_time("Y.m.j") ?></p>
                    <p class="tag"><a href="$link"><?php echo get_the_category_list( ' ,' ); ?></a></p>
                  </div><!-- /.news_info -->
                </div><!-- /.news_summary -->
              </article>
              <?php endwhile; ?>
              <?php else : ?>
                <div class="blog_bx">
                  <h5>記事がありません</h5>
                  <p>表示する記事はありませんでした</p>
                </div>
              <?php endif; ?>

              <?php if (function_exists("pagination")) {
                pagination($additional_loop->max_num_pages);
              } ?>

            </div><!-- /.news -->
			    </div><!-- /.blog_main -->
          <div class="side">
            <?php get_sidebar(); ?>
          </div><!-- /.side -->
          
        </div><!-- /.blog_area -->
      </div><!-- /.inner -->
<?php get_footer(); ?>
