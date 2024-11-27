    <!-- <?php
          $locale = $args['locale'] ? $args['locale'] : 'ja';
          $is_ja = $locale === 'ja';

          $home_url = $is_ja ? home_url() : home_url('en');
          $text = array(
            'footer_about' => $is_ja ? '『私の哲学』について' : 'About "My Philosophy"',
            'footer_company' => $is_ja ? '運営会社' : 'Website is managed by ILI',
            'footer_contact' => $is_ja ? 'お問い合わせ' : 'Inquiry',
            'copyright' => $is_ja ? '私の哲学' : 'My Philosophy',
          );
          ?> -->

    <!-- footerの項目変更 -->
    <?php
    $locale = $args['locale'] ? $args['locale'] : 'ja';
    $is_ja = $locale === 'ja';

    $home_url = $is_ja ? home_url() : home_url('en');
    $text = array(
      'footer_about' => $is_ja ? '『私の哲学』について' : 'About "My Philosophy"',
      'footer_editing' => $is_ja ? '編集長について' : 'Editors Message',
      'footer_past' => $is_ja ? '過去の出演者' : 'Past Performers',
      'footer_company' => $is_ja ? '運営会社' : 'Website is managed by ILI',
      'footer_contact' => $is_ja ? 'お問い合わせ' : 'Inquiry',
      'copyright' => $is_ja ? '私の哲学' : 'My Philosophy',
    );
    ?>

    <footer id="footer">
      <div class="container inner">
        <a class="logo" href="<?php echo $home_url; ?>">
          <img
            src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_footer_logo.svg"
            alt="私の哲学Presents"
            height="300"
            width="300"
            loading="lazy"
            decoding="async" />
        </a>
        <div class="footer-content">
          <div class="footer-menu">
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/about/"><?php echo $text['footer_about']; ?>
            </a>
            <a
              class="footer-menu-item"
              href="https://myphilosophy.global/message/"><?php echo $text['footer_editing']; ?>
            </a>
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/archives/"><?php echo $text['footer_past']; ?>
            </a>
            <a
              class="footer-menu-item"
              href="https://ili.inc/"
              target="_blank"><?php echo $text['footer_company']; ?>
            </a>
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/contact/"><?php echo $text['footer_contact']; ?></a>
          </div>
          <span class="copyright" translate="no">©︎ <?php echo date('Y'); ?> <?php echo $text['copyright']; ?></span>
        </div>
      </div>
    </footer>



    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/jquery/jquery.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/jquery/jquery-migrate.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sticky.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/fancyBox/source/jquery.fancybox.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery.parallax.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/easing.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sp-slidemenu.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/us.widgets.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/sticky.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/nicescroll.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/init.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery.mixitup.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/loopslider.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/plugins/slick/slick.min.js"></script>
    <script type="text/javascript">
      $(function() {
        $('.thumb-item').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.thumb-item-nav' //サムネイルのクラス名
        });
        $('.thumb-item-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.thumb-item', //スライダー本体のクラス名
          focusOnSelect: true,
        });
      });
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/humbergerMenu.js"></script>
    <?php wp_footer(); ?>
    </body>

    </html>
