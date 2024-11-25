      <div id="side">
        <!-- <?php get_search_form(); //検索フォーム表示 ?> -->
        
        <?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar(1)): ?>
        
          <div class="widget">
            <h2>No Wedget</h2>
            <p>ウィジェットが設定されていません。</p>
          </div><!-- /.widget -->
        <?php endif;?>

		  <div class="banner_top">
			  <a href="/">back to HOME</a>
		  </div><!-- /.banner_top -->

      </div><!-- /.#side -->