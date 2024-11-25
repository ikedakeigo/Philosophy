<?php 
  get_header(null, $args);

  $locale = $args['locale'] ? $args['locale'] : 'en';
  $is_ja = $locale === 'en';
  $the_query = new WP_Query(array(
    'post_type' => $is_ja ? 'interview' : 'interview_en',
    'order' => 'DESC',
    'orderby' => 'meta_value_num',
    'meta_key' => 'interview_vol',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'has_password' => false,
  ));

  $home_url = $is_ja ? home_url() : home_url('en');
  $text = array(
    'main_alt' => $is_ja ? 'インタビューシリーズ『私の哲学®︎』' : 'My Philosophy®︎ | Interview and Dialogue Series',
    'about_button' => $is_ja ? '『私の哲学』について' : '"About My Philosophy"'
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
	  <div class="cntHdr">
	  　<h1 class="en"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_logo_phy_en.png" alt="My Philosophy" ></h1>
		  <p>Leading the Future: Leaders' Interviews</p>
	  </div>
	  
	  <video controls autoplay muted playsinline>
  <source src="<?php echo get_template_directory_uri(); ?>/img/top/top_movie_en.mp4" type="video/mp4" />
  <p>
	  This browser does not support HTML videos. There is a <a
      href="<?php echo get_template_directory_uri(); ?>/img/top/top_movie_en.mp4"
      >link</a> to the video instead.
  </p>
</video>

	  <div class="cntHdrTxt">
	  	<p>In a rapidly changing world, both individuals and organizations must continuously grow and adapt.<br class="pc">At the heart of this growth lies the crucial need to establish a strong sense of identity.<br class="pc">In "My Philosophy," we engage with distinguished opinion leaders across diverse fields who share the philosophies and<br class="pc">principles that have guided them through their journeys. Through their personal experiences, <br class="pc">we aim to offer insights that inspire and provide valuable perspectives for navigating the future.<br><span>Editor in Chief of "My Philosophy" DK Sugiyama</span>
</p>
	  </div>
	  
	  <div class="cntBnrWrp">
	  	<ul>
			<li>
				<dl>
					<dt><a href="/en/about/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_bnr_01_en.jpg" alt="About "My Philosophy"" ></a></dt>
				  <dd><a href="https://myphilosophy.global/about/">About "My Philosophy"</a></dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><a href="/en/message/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_bnr_02_en.jpg" alt="About Editor in Chief" ></a></dt>
					<dd><a href="https://myphilosophy.global/message/">Editor's Message</a></dd>
				</dl>
			</li>
		</ul><br style="clear: both;">
	  </div>
	  
	  <br style="clear: both;">
	  
	  <div class="cntIntBg">
	  	<div class="cntIntWrp">
			<h2>Latest Issue</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/leslie_k/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_112_main_en.jpg" alt="vol.112" ></a></dt>
						<dd>Leslie Kee, born in Singapore, is a photographer who operates globally with bases in Tokyo and New York. Rising from a background of poverty, he transformed adversity into a source of energy, exploring the beauty of art, fashion, and advertising through his unique lens. His passion fuels his contributions to society through photography, with his work inspiring courage and hope in many.&nbsp;<a href="https://myphilosophy.global/en/interview/leslie_k/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/takada_m/"><img src="https://myphilosophy.global/wp-content/uploads/2024/08/img_111_main_en.jpg" alt="vol.108" ></a></dt>
						<dd>From an Executive Officer and Advisor at Mitsubishi Corporation to the Ambassador to Albania, Mitsuyuki Takada is now striving to connect Albanian and Japanese companies. Moving from big business at Mitsubishi to nurturing small businesses, he is sowing seeds with care. At 65, he shares his dreams and challenges with us.&nbsp;<a href="https://myphilosophy.global/en/interview/takada_m/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/sato_k/"><img src="https://myphilosophy.global/wp-content/uploads/2024/06/img_110_main_en.jpg" alt="vol.110" ></a></dt>
						<dd>Koji Sato began his apprenticeship as a chef at the age of 18. The inspiration behind this decision was the popular television drama “Dear Mother” (aired on NTV at the time). After 17 years, the young man who admired the reserved chefs opened a traditional Japanese restaurant in Akasaka, where he emphasized the ingredients and flavors of his hometown.&nbsp;<a href="https://myphilosophy.global/en/interview/sato_k/">READ</a></dd>
					</dl>
				</li>
				
				
			</ul> <br style="clear: both;">
		</div>
		 
		  <div class="cntIntWrp">
			<h2>Most-Read Interviews</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/otsuka_k/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_16_main_en.jpg" alt="vol.16" ></a></dt>
						<dd>Kumiko Otsuka, who took over the family business to become president, has had a deep connection with furniture since childhood, far more than most. We discussed her passionate views on everything from the value of furniture in people's lifestyles to environmental issues.&nbsp;<a href="https://myphilosophy.global/en/interview/otsuka_k/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/kuma_kengo/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_56_main_en.jpg" alt="vol.56" ></a></dt>
						<dd>In an interview with Kengo Kuma, he shares a remarkable journey that seems almost destined. Inspired to pursue architecture after witnessing the first Tokyo Olympics, Kuma found himself directly involved in the architecture of the second Tokyo Olympics as an architect. Describing this as a "mysterious coincidence" and "fate," we delved into his commitment to architecture.&nbsp;<a href="https://myphilosophy.global/en/interview/kuma_kengo/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/tohdo_k/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_58_main_en.jpg" alt="vol.58" ></a></dt>
						<dd>Ms. Kazuko Todo, who has developed the membership club "Royal Box" into a nationally recognized establishment. In the 58th edition, we are pleased to feature Ms. Todo, who, in addition to managing the club, is actively involved in writing, giving lectures, and a wide range of other activities.&nbsp;<a href="https://myphilosophy.global/en/interview/tohdo_k/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
			  
		</div>
		  
		  
		  <div class="cntIntWrp">
			<h2>Editor's Picks</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/miura_y/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_36_main_en.jpg" alt="vol.36" ></a></dt>
						<dd>Mr. Yuichiro Miura, who achieved the summit of Everest, the highest peak in the world, at the age of 80 years and 224 days, becoming the oldest person in the world to do so. We inquired about the future challenge goals and other objectives he aims for, even as he remains aggressive at the age of 82.&nbsp;<a href="https://myphilosophy.global/en/interview/miura_y/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/amari_n/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_48_main_en.jpg" alt="vol.48" ></a></dt>
						<dd>Naoyoshi Amari, the chief priest of the Jodo Sect temple Senshuji and the principal of Senshu Kindergarten, where the children of the editor-in-chief of "My Philosophy" attended, shared his thoughts on human life.&nbsp;<a href="https://myphilosophy.global/en/interview/amari_n/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/aoki_i/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_74_main_en.jpg" alt="vol.74" ></a></dt>
						<dd>Isao Aoki is a legend in the world of Japanese golf. Having played more than 1,250 rounds, we spoke with him about how he used his experience to achieve his goals and make his dreams come true.&nbsp;<a href="https://myphilosophy.global/en/interview/aoki_i/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
		</div>
		  
		  <div class="cntIntWrp">
			<h2>Timeless Philosophies</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/idei_n/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_19_main_en.jpg" alt="vol.19" ></a></dt>
						<dd>Mr. Nobuyuki Idei has been instrumental in leading Sony Group to global prominence and continues to be a central figure in Japan's economic arena. We had the opportunity to discuss episodes from his time at Sony, his management philosophy, and the future of Japan and Asia.&nbsp;<a href="https://myphilosophy.global/en/interview/idei_n/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/suzuki_e/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_13_main_en.jpg" alt="vol.13" ></a></dt>
						<dd>Edward Suzuki, an architect who has been independent for 35 years, continues to energetically create new works to this day. With deep knowledge in atomism, philosophy, and science, he also vigorously participates in triathlons and other sports. At the age of 65, his seemingly limitless energy and his mission as an architect were the focus of our discussion.&nbsp;<a href="https://myphilosophy.global/en/interview/suzuki_e/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/kato_h/"><img src="<?php echo get_template_directory_uri(); ?>/img/top/img_12_main_en.jpg" alt="vol.12" ></a></dt>
						<dd>Mr. Hiroshi Kato has played a central role, as an economist, in the theory and practice of Japan's economic policies. We had the opportunity to speak with him about what is currently needed in Japan and what actions we should take as leaders in administrative reform.&nbsp;<a href="https://myphilosophy.global/en/interview/kato_h/">READ</a></dd>
					</dl>
				</li>
			</ul> <br style="clear: both;">
		</div>
	  
	  <br style="clear: both;">
	  </div>
  
    <div class="cntIntWrp2">
			<h2>List of Participants (2007~)</h2> 
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/george_a/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/george_a/img_85_06.jpg" alt="vol.85" ></a></dt>
						<dd>Vol.85 Former Governor of Hawaii George Ariyoshi&nbsp;<a href="https://myphilosophy.global/en/interview/george_a/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/ookura_t/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/ookura_t/5.jpg" alt="vol.53" ></a></dt>
						<dd>Vol.53 President and CEO of Torikizoku Co., Ltd. Tadashi Okura&nbsp;<a href="https://myphilosophy.global/en/interview/ookura_t/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/konishi_d/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/konishi_d/5.jpg" alt="vol.50" ></a></dt>
						<dd>Vol.50 Fashion Designer Don Konishi&nbsp;<a href="https://myphilosophy.global/en/interview/konishi_d/">READ</a></dd>
					</dl>
				</li>
			</ul>
		
			<ul>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/yoshida_j/"><img src="/wp-content/uploads/2024/08/img_42_sub.jpg" alt="vol.42" ></a></dt>
						<dd>Vol.42 Yoshida Sauce &amp; Founder Junki Yoshida&nbsp;<a href="https://myphilosophy.global/en/interview/yoshida_j/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/kikuma_y/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/kikuma_y/_DSC2851.jpg" alt="vol.33" ></a></dt>
						<dd>Vol.33 lawyer Yukino Kikuma&nbsp;<a href="https://myphilosophy.global/en/interview/kikuma_y/">READ</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://myphilosophy.global/en/interview/tateishi_f/"><img src="https://myphilosophy.global/wp-content/themes/MyPhilosophy/img/philosophy/new_philosophy/tateishi_f/_DSC6559.jpg" alt="vol.20" ></a></dt>
						<dd>Vol.20 Chairman of the Board of Directors, OMRON Corporation Fumio Tateishi&nbsp;<a href="https://myphilosophy.global/en/interview/tateishi_f/">READ</a></dd>
					</dl>
				</li>
			</ul>
		
		<br style="clear: both;">
		<div class="btnArcWrp"><a href="<?php echo home_url(); ?>/archives">View All</a></div>
		
		<p class="atnTxt">#Titles are accurate as of the time of the interview.</p>
		</div>
    
    
  </div>
</div>

<footer id="footer">
      <div class="container inner">
        <a class="logo" href="<?php echo $home_url; ?>">
          <img
            src="<?php echo get_template_directory_uri(); ?>/img/philosophy/new_philosophy/img_footer_logo.svg"
            alt="私の哲学Presents"
            height="300"
            width="300"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="footer-content">
          <div class="footer-menu">
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/en/about/"
            >About "My Philosophy</a>
            <a
              class="footer-menu-item"
              href="https://ili.inc/"
              target="_blank"
            >Website is managed by ILI</a>
            <a
              class="footer-menu-item"
              href="<?php echo $home_url; ?>/en/contact/"
            >Inquiry</a>
          </div>
          <span class="copyright" translate="no">©︎ <?php echo date('Y'); ?> My Philosophy</span>
        </div>
      </div>
    </footer>
