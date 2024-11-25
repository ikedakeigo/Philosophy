<?php get_header(); ?>

<div id="wrapper" class="underlayer">
  <?php if (have_posts()): while (have_posts()): the_post(); ?>
    <?php the_content(); ?>
  <?php endwhile; else: ?>
    <p><?php echo "お探しの記事、ページは見つかりませんでした。"; ?></p>
  <?php endif; ?>
</div>

<?php get_footer(); ?>