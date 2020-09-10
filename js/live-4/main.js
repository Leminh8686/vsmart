// Detect Mobile
var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	ua
);

function inputHolder() {
	$('.fs-group input[type="text"], .fs-group input[type="password"]').focus(function (e) {
		$(this).parent().parent().removeClass('fs-show-error');
	});
}


var gamePlay = false,
	comparePlay = false;

// Comparisions
function fsCompare() {
	comparePlay = true;
	if ($('.enType').length) {
		$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
			default_offset_pct: 0.4,
			before_label: 'Normal Camera', // Set a custom before label
			after_label: 'Live 4 Camera', // Set a custom after label
		});
	} else {
		$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
			default_offset_pct: 0.4,
			before_label: 'Camera thường', // Set a custom before label
			after_label: 'Camera Live 4', // Set a custom after label
		});
	}

}

// Create Slider
var first = true;
function fsSlider() {

	if ($('.fs-xoa-phong-info').length) {
		cameraSlider = new Swiper('.xoa-phong-slider', {
			effect: 'slide',
			loop: false,
			speed: 800,
			pagination: {
				el: '.fs-xoa-phong-info .swiper-pagination',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			navigation: {
				nextEl: '.fs-xoa-phong-info .swiper-button-next',
				prevEl: '.fs-xoa-phong-info .swiper-button-prev',
			},
			on: {
				init: function () {
				}, transitionStart: function () {

					var go = $('.swiper-slide-active').attr('data-go');
					$('.fs-xoa-phong .xoa-phone-item, .fs-xoa-phong-sp p').removeClass('active');
					$('.fs-xoa-phong .xoa-phone-item[data-target=' + go + '], .fs-xoa-phong-sp p[data-target=' + go + ']').addClass('active');

					if (go == 'xoa-phong') {
						$('#imgUnder').attr('src', '/images/live-4/xoa-phong-02.png');
						$('#imgOver').attr('src', '/images/live-4/xoa-phong-01.png');
					} else if (go == 'macro') {
						$('#imgUnder').attr('src', '/images/live-4/macro-02.png');
						$('#imgOver').attr('src', '/images/live-4/macro-01.png');
					} else if (go == 'chup-dem') {
						$('#imgUnder').attr('src', '/images/live-4/chup-dem-02.png');
						$('#imgOver').attr('src', '/images/live-4/chup-dem-01.png');
					}

				}, transitionEnd: function () {
				}
			}
		});

	}



}

// Events Common
function fsEvent() {

	$('.fs-show-popup').click(function () {
		var target = $(this).attr('data-target');
		var box = null;
		if (target == 'overview') {
			box = $('.fs-section:nth-child(2)');
		} else {
			box = $('.is-parameter');
		}

		if (box.length) {
			var top = box.offset().top - 115;
			$("html, body").stop().animate({ scrollTop: top }, 1000);
		}

	});

	inputHolder();

}


// Variables for Scroll
var isCroll = false,
	scrollPos = 0,
	threshold = 100;

// LazyLoad
function ImgLazyLoad() {

	lazyImages = window.innerWidth > 1100 ? document.querySelectorAll('.cmPic.fs-lazy, .pcPic.fs-lazy') : document.querySelectorAll('.cmPic.fs-lazy, .spPic.fs-lazy');
	lazyBgs = window.innerWidth > 1100 ? document.querySelectorAll('.cmBg.fs-lazy, .pcBg.fs-lazy') : document.querySelectorAll('.cmBg.fs-lazy, .spBg.fs-lazy');

	// Lazy images
	[].slice.call(lazyImages).forEach(function (elm) {
		if (Math.abs(elm.getBoundingClientRect().top) <= window.innerHeight + threshold) {
			elm.setAttribute('src', elm.getAttribute('data-src'));
			elm.classList.remove('fs-lazy');
		}
	});

}


function lazyAll() {

	lazyAllImages = window.innerWidth > 1100 ? document.querySelectorAll('.cmPic.fs-lazy, .pcPic.fs-lazy') : document.querySelectorAll('.cmPic.fs-lazy, .spPic.fs-lazy');
	lazyAllBgs = window.innerWidth > 1100 ? document.querySelectorAll('.cmBg.fs-lazy, .pcBg.fs-lazy') : document.querySelectorAll('.cmBg.fs-lazy, .spBg.fs-lazy');
	// Lazy images
	[].slice.call(lazyAllImages).forEach(function (elm) {
		elm.setAttribute('src', elm.getAttribute('data-src'));
		elm.classList.remove('fs-lazy');
	});

	// Lazy background
	[].slice.call(lazyAllBgs).forEach(function (elm) {
		elm.style.backgroundImage = 'url(' + elm.getAttribute('data-src') + ')';
		elm.classList.remove('fs-lazy');
	});

}



// Func Scroll
function onScroll() {
	setTimeout(function () {

		scrollPos = $(window).scrollTop();

		if (isCroll) {
			ImgLazyLoad();
		}

		[].slice.call(document.querySelectorAll('.cau-hinh-dinh-txt, .qualtomm-pic, .sac-nhanh-txt')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
				$(elm).addClass('fs-ani');
			} else {
				$(elm).removeClass('fs-ani');
			}

		});

		[].slice.call(document.querySelectorAll('.fly-01, .fly-02, .fly-03')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
				$(elm).addClass('fs-ani');
			} else {
				$(elm).removeClass('fs-ani');
			}
		});

		[].slice.call(document.querySelectorAll('.mau-sac-pics')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= ($(window).height() - 0.5 * $(window).height())) {
				$(elm).addClass('fs-ani');
			} else {
				$(elm).removeClass('fs-ani');
			}
		});

		[].slice.call(document.querySelectorAll('.fs-cam-bien')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= ($(window).height() - 0.5 * $(window).height())) {
				$(elm).addClass('fs-ani');
			} else {
				$(elm).removeClass('fs-ani');
			}
		});


	}, 0);  // Process for Input Delay

}

// Func Resize
function Resize() {

	// Need detect not mobile when resize because in mobile scrolling call resize
	if (!isMobile) {

	}

	if (isCroll) {
		ImgLazyLoad();
	}
}

function Rotate() {

	if (isCroll) {
		ImgLazyLoad();
	}
}

// Set Scroll for Page
$(window).on('scroll', onScroll);

// Page Rezize
$(window).on('resize', Resize);

// Page Rotate
$(window).on('orientationchange', Rotate);

var loading = true;

function starPage() {
	ImgLazyLoad();
	if (loading) {

		loading = false;

		setTimeout(function () {
			ImgLazyLoad();
		}, 100);

		$('.fs-loading').fadeOut(150, function () {

			fsSlider();
			fsCompare();
			fsEvent();
			onScroll();
			isCroll = true;

		});

		
		setTimeout(function () {
			lazyAll();
		}, 700);
		
	}

}

//  Page load
$(window).on('load', function () {

	if (loading) {
		starPage();
	}

});

// Page Ready
(function () {
	ImgLazyLoad();
	setTimeout(function () {
		if (loading) {
			starPage();
		}
	}, 3000);
	//initFull();

})();
