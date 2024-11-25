<?php
//カテゴリ情報から関連記事を3個ランダムに呼び出す
$categories = get_the_category($post->ID);
$category_ID = array();
foreach($categories as $category):
  array_push( $category_ID, $category -> cat_ID);
endforeach ;
$args = array(
  'post__not_in' => array($post -> ID),
  'posts_per_page'=> 3,
  'category__in' => $category_ID,
  'orderby' => 'rand',
);
$query = new WP_Query($args); ?>
  <?php if( $query -> have_posts() ): ?>
  <?php while ($query -> have_posts()) : $query -> the_post(); ?>
    <div class="blog_bx">
        <p class="blog_image">
          <a href="<?php the_permalink() ?>">
            <?php the_post_thumbnail(); ?>
          </a>
        </p>
        <p class="blog_date"><?php the_time("Y.m.j") ?></p>
        <h5 class="blog_title"><a href="<?php the_permalink() ?>"><?php the_title();?></a></h5>
        <p class="blog_text"><?php echo mb_substr( strip_tags( $post->post_content  ), 0, 70 ) . ''; //記事本文の抜粋を70文字だけ取り出す?></p>
      </div><!-- /.blog_bx -->
      <?php endwhile; ?>
      <?php else : ?>
        <div class="post">
          <h5>記事がありません</h5>
          <p>表示する記事はありませんでした</p>
        </div>
      <?php
      endif;
      wp_reset_postdata();
      ?>

    </div><!-- /.blog_area /#bx -->