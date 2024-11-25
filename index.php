<?php get_header(); ?>

  <div id="wrapper" class="underlayer">

    <div id="article">
      <h4>
        <span>MOVIE</span>
      </h4>

      <div class="blog_area">
        <?php
          $args = array(
            'post_type' => 'post', /* 投稿タイプ */
            'paged' => $paged
          ); ?>
          <?php query_posts( $args ); ?>
          <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post();
            /* ループ開始 */ ?>

        <div class="blog_bx">
          <p class="blog_image">
            <a href="<?php the_permalink() ?>">
              <?php the_post_thumbnail(); ?>
            </a>
          </p>
          <p class="blog_date"><?php the_time("Y.m.j") ?></p>
          <h5 class="blog_title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h5>
          <p class="blog_text"><?php the_excerpt(); ?></p>
        </div><!-- /.blog_bx -->
        <?php endwhile; ?>
        <?php else : ?>
          <div class="blog_bx">
            <h5>記事がありません</h5>
            <p>表示する記事はありませんでした</p>
          </div>
        <?php endif; ?>

      </div><!-- /.blog_area /#bx -->
      
      <!-- pagination -->
      <?php 
        global $wp_query;
        $bignum = 999999999;
        if ( $wp_query->max_num_pages <= 1 )
          return;
        echo '<nav class="pagination">';
        echo paginate_links( array(
          'base'         => str_replace( $bignum, '%#%', esc_url( get_pagenum_link($bignum) ) ),
          'format'       => '',
          'current'      => max( 1, get_query_var('paged') ),
          'total'        => $wp_query->max_num_pages,
          'prev_text'    => 'PREV.',
          'next_text'    => 'NEXT',
          'type'         => 'list',
          'end_size'     => 3,
          'mid_size'     => 3
        ) );
        echo '</nav>';
      ?>
      <!-- /pagination -->

    </div><!-- /#article -->

<?php get_footer(); ?>