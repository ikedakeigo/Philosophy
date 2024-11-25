<?php
  $locale = $args['locale'] ? $args['locale'] : 'ja'; 
?>
<!DOCTYPE html>
<html lang="<?php echo $locale; ?>">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/philosophy/favicon.png">
    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/style.css" type="text/css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/tools.css" type="text/css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/plugins/fancyBox/source/jquery.fancybox.css" type="text/css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/plugins/jquery.bxslider/jquery.bxslider.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/portfolio.css" type="text/css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/responsive.css" type="text/css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/plugins/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/print.css" type="text/css" media="print">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/plugins/slick/slick.css" type="text/css" media="screen">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/plugins/slick/slick-theme.css" type="text/css" media="screen">
    <link rel="stylesheet" id="fontawesome-style-css" href="<?php echo get_template_directory_uri(); ?>/base/css/font-awesome.min.css" type="text/css" media="all">
    <style>.grecaptcha-badge { visibility: hidden; }</style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" integrity="sha512-u3fPA7V8qQmhBPNT5quvaXVa1mnnLSXUep5PS1qo5NRzHwG19aHmNJnj1Q8hpA/nBWZtZD4r4AX6YOt5ynLN2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('philosophy'); ?> id="<?php echo esc_attr($post->post_name); ?>">