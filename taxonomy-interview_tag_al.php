<?php 
  get_header(null, array('locale' => 'en_US'));

  $locale = 'en_US'; 
  $is_ja = $locale === 'ja';
  $term_object = get_queried_object();
  $term_name = $term_object->name;
  $term_slug = $term_object->slug;

  $the_query = new WP_Query(array(
    'post_type' => $is_ja ? 'interview' : 'interview_en',
    'order' => 'DESC',
    'orderby' => 'meta_value_num',
    'meta_key' => 'interview_vol',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'has_password' => false,
    'taxonomy' => 'interview_tag_en',
    'term' => $term_slug,
  ));

  $text = array(
    'main_alt' => $is_ja ? 'インタビューシリーズ『私の哲学®︎』' : 'My Philosophy®︎ | Interview and Dialogue Series',
    'about_button' => $is_ja ? '『私の哲学』について' : 'About "My Philosophy"'
  );

  $image = array(
    'main_pc' => $is_ja
      ? get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_pc.png'
      : get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_pc_en.png',
    'main_sp' => $is_ja
      ? get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_sp.png'
      : get_template_directory_uri() . '/img/philosophy/new_philosophy/img_top_kv_catch_sp_en.png',
  );
?>

<span class="menu-button lg-show"><i class="fa fa-bars"></i></span>

<?php get_template_part('md-slidemenu-interview', null, $args); ?>

<div id="container">
  <div id="content">
  <div class="topMain">
      <div class="topMain__content">
        <picture class="topMain__lead">
          <source
            media="(max-width: 767px)"
            srcset="<?php echo $image['main_sp']; ?>"
          >
          <img
            src="<?php echo $image['main_pc']; ?>"
            alt="<?php echo $text['main_alt']; ?>"
            height="265"
            width="533"
            loading="eager"
          >
        </picture>
        <?php if ($is_ja): ?>
          <div class="topMain__more">
            <a class="button small" href="/about/"><?php echo $text['about_button']; ?></a>
          </div>
        <?php endif; ?>
      </div>
    </div>
    <div id="loopslider01" class="pc">
      <ul>
        <li><img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_philosophy_01.jpg" alt="" width="3183" height="198" ></li>
      </ul>
    </div>
    <div id="loopslider02" class="sp">
      <ul>
        <li><img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_philosophy_sp01.jpg" alt="" width="1328.5" height="162.5" ></li>
      </ul>
    </div>
    <div id="loopslider03" class="sp">
      <ul>
        <li><img src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_philosophy_sp02a.jpg" alt="" width="1328.5" height="162.5" ></li>
      </ul>
    </div>
    <h1 class="white taC pT40"><?php echo $term_name; ?></h1>
    <div class="container">
      <div class="pf">
        <div class="row50">
          <?php
            if ($the_query->have_posts()):
            while ($the_query->have_posts()):
            $the_query->the_post();

            $volume = get_field('interview_vol');
            $name = get_field('name');
            $volume_text = $is_ja ? "第{$volume}回" : "Vol.{$volume}";
            $name_text = $is_ja ? "{$name}氏" : $name;
          ?>
            <div class="col_4 md-6 sm-12 pf-item">
              <div class="box-content">
                <a class="article-card" href="<?php the_permalink(); ?>">
                  <?php
                    the_post_thumbnail(
                      'full',
                      array(
                        'alt' => get_the_title(),
                        'class' => 'philosophy-thumbnail'
                      )
                    );
                  ?>
                  <h2>
                    <span class="number"><?php echo $volume_text; ?></span>
                    <span class="small position"><?php echo wp_kses_post(get_field('position')); ?></span>
                    <span class="nowrap"><?php echo $name_text; ?></span>
                  </h2>
                  <div class="box-text">
                    <p class="cB"><?php the_field('lead_txt'); ?><span class="textlink">READ</span></p>
                  </div>
                  <?php
                    $tags = get_the_terms($post->ID, 'interview_tag_en');
                    if ($tags):
                  ?>
                    <div class="article-card__tag">
                      <?php foreach ($tags as $tag): ?>
                        <span class="article-card__tag-item">#<?php echo $tag->name; ?></span>
                      <?php endforeach;  ?>
                    </div>
                  <?php endif; ?>
                </a>
              </div>
            </div>
          <?php endwhile; endif; wp_reset_query(); ?>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(null, $args); ?>