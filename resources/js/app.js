$(function(s){
	header_fix();
	// $(window).scroll(function(){
	// 	header_fix();
	// 	console.log('скролим');
	// });
	$(document).scroll(function(){
		header_fix();
	});
	// Инициализация owlCarousel
	// $("#owl-banner").owlCarousel({
	// 	slideSpeed: 300,
	// 	paginationSpeed: 400,
	// 	singleItem:true,
	// 	autoPlay: 5000,
	// 	stopOnHover: false,
	// 	autoHeight: false,
	// 	transitionStyle: "fade"
	// });
	// $("#owl-techn").owlCarousel({
	// 	items: 6,
	// 	itemsDesktop: [1000,5], //5 items between 1000px and 901px
	// 	itemsDesktopSmall: [900,3], // betweem 900px and 601px
	// 	itemsTablet: [600,2], //2 items between 600 and 0
	// 	itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
	// 	singleItem: false,
	// 	pagination: false,
	// 	autoPlay: 5000
	// });
	// $('.sandwich').on('click', function(){
	// 	// $('.header_navigation_js').stop(true, true).slideToggle();
	// 	$(this).toggleClass('active').next().toggleClass('active');
	// });
	// $('.header_navigation_js li').on('click', function(){
	// 	$(this).closest('nav').toggleClass('active');
	// });


	$('body').on('click', '.sandwich, .header_navigation_js li', function(){
		$('.header_navigation_js, .sandwich').toggleClass('active'); // скрыть/расскрыть моб меню
	});

	$('body').on('click', '.content, .logoSite', function(){
		if($('.sandwich').hasClass('active')){ // закрытие моб меню по клику на контент
			$('.header_navigation_js, .sandwich').toggleClass('active');
		}
	});
	$('body').on('click', '.logoSite, .header_navigation_js a.active', function(){
		$('html, body').animate({ scrollTop: '0' }, 500); // прокрутка вверх по клику на текущий пункт меню
	});

	$(document).ready(function(){
	    $('body').on('click', '.go_to', function(){ // ловим клик по ссылке с классом go_to
			var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length !== 0) { // проверим существоваие элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	        }
		    return false; // выключаем стандартное действие
	    });
	});

	/*jQuery('body').find('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	jQuery('body').find('svg use').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('xlink:href');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});*/
	// Добавление карты google в iframe на главную страницу
	// $('.location_wrap_js').append('<iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.868227405213!2d36.33375571592626!3d49.995079927951814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412709f454712171%3A0x3b2d17930e9f0fe6!2z0L_RgNC-0YHQv9C10LrRgiDQrtCy0ZbQu9C10LnQvdC40LksIDU00JAsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1470824666205" width=" ' + ($(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe>');
	// Активация zoom на карте google на главной странице
	// $('.location_wrap_js .overlay_js').click(function(event){
	// 	$(this).removeClass('overlay');
	// });
	// Деактивация zoom на карте google на главной странице
	$('body').on('mouseout', 'iframe', function(event){
		$('.overlay_js').addClass('overlay');
	});

	var n;
	s("body").on("click", ".tabs li:not(.active)", function() {
		n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
	}), s.fn.dmtabs = function(n) {
		s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
			s(this).addClass("open_tab")
		}).siblings(".box").hide(1, function() {
			s(this).removeClass("open_tab")
		})
	}

	// $('ul.akkordeon li > div').click(function(){
	// 	if(!$(this).hasClass('active')){
	// 		$('ul.akkordeon li > div').removeClass('active').next('ul').stop(true, true).slideUp();
	// 		$(this).addClass('active');
	// 		$(this).next('ul').stop(true, true).slideDown(400);
	// 	}else{
	// 		$(this).removeClass('active').next('ul').stop(true, true).slideUp();
	// 	}
	// });

	$('body').on('click', "ul.akkordeon li > div", function(){
		if(!$(this).hasClass('active')){
			$('ul.akkordeon li > div').removeClass('active').next('ul').stop(true, true).slideUp();
			$(this).addClass('active');
			$(this).next('ul').stop(true, true).slideDown(400);
		}else{
			$(this).removeClass('active').next('ul').stop(true, true).slideUp();
		}
	});

	// $('.tag_js').click(function(event){
	// 	var classList = $(this).attr('class').split(/\s+/),
	// 		parent = $(this).closest('.content');
	// 	projects_filter(classList[0], parent);
	// });

	$('body').on('click', ".tag_js:not(.active)", function(){
		var classList = $(this).attr('class').split(/\s+/),
			parent = $(this).closest('.content');
		projects_filter(classList[0], parent);
		$(this).closest('.tags_block').find('.active').removeClass('active');
		$(this).addClass('active');
	});
});

function header_fix(){
	if(!$('body').hasClass('scrolled') && $(this).scrollTop() > 150){
		$('body').addClass('scrolled');
	}else if($('body').hasClass('scrolled') && $(this).scrollTop() < 150){
		$('body').removeClass('scrolled');
	}
}

// Функция для фильтрации проектов на странице "Портфолио"
function projects_filter(project_type, parent){
	if(project_type == 'all'){
		parent.find('.items_wrap > div').removeClass('hidden');
	}else{
		parent.find('.items_wrap > div:not(.' + project_type + ')').addClass('hidden');
		parent.find('.items_wrap > div.' + project_type).removeClass('hidden');
	}
}


