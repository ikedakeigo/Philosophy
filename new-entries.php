    <div class="news">
      <?php
        $args = array(
          'post_type' => 'post', /* 投稿タイプ */
          'paged' => $paged,
          'posts_per_page'=> 3
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

    </div><!-- /.news -->
    
    <p class="top_blog_btn"><a href="<?php echo get_template_directory_uri(); ?>/blog/">MORE</a></p>