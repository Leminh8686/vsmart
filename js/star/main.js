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

var touchMove = false;

// Create Slider
var swiperFull = null,
	infinitySlider = null,
	infinity50kSlider = null,
	infinity55kSlider = null,
	swiperAlbum = null,
	luxuriousSlider = null,
	cameraSlider = null;

var pauseClick = false,
	pauseClickCamera;

function fsSlider() {

	if ($('.is-camera-2 .fs-slider-camera').length) {
		cameraSlider = new Swiper('.fs-slider-camera', {
			effect: 'fade',
			loop: true,
			speed: 800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.is-camera-2 .swiper-pagination',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			navigation: {
				nextEl: '.is-camera-2 .swiper-button-next',
				prevEl: '.is-camera-2 .swiper-button-prev',
			},
			on: {
				init: function () {
				}, transitionStart: function () {
					if (pauseClickCamera) {
						$('.fs-play-toggle-camera').removeClass('is-pause');
						pauseClickCamera = false;
						cameraSlider.autoplay.start();
					}

				}, transitionEnd: function () {
				}
			}
		});

		//Stop slide
		$('.fs-play-toggle-camera').click(function () {
			pauseClickCamera = true;
			if (cameraSlider) {
				if ($(this).hasClass('is-pause')) {
					$('.fs-play-toggle-camera').removeClass('is-pause');
					cameraSlider.autoplay.start();

				} else {
					$('.fs-play-toggle-camera').addClass('is-pause');
					cameraSlider.autoplay.stop();
				}
			}
		});


	}

	if ($('.is-album').length) {
		swiperAlbum = new Swiper('.fs-slider-album', {
			effect: 'slide',
			loop: false,
			speed: 800,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.is-album .swiper-pagination',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			on: {
				init: function () {
				}, transitionStart: function () {
					if (pauseClick) {
						$('.fs-play-toggle').removeClass('is-pause');
						pauseClick = false;
						swiperAlbum.autoplay.start();
					}

				}, transitionEnd: function () {
				}
			}
		});
	}


	if ($('.is-design .fs-slider').length) {
		swiperFull = new Swiper('.fs-slider', {
			effect: 'fade',
			loop: true,
			speed: 800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.is-design .swiper-pagination',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			on: {
				init: function () {
				}, transitionStart: function () {
				}, transitionEnd: function () {
				}
			}
		});
	}

	if ($('.fs-luxurious-slider').length) {

		luxuriousSlider = new Swiper('.fs-luxurious-slider', {
			effect: 'fade',
			loop: true,
			speed: 800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			on: {
				init: function () {
				}, transitionStart: function () {
					if (pauseClick) {
						$('.fs-play-toggle').removeClass('is-pause');
						pauseClick = false;
						luxuriousSlider.autoplay.start();
					}
				}, transitionEnd: function () {

				}
			},
			pagination: {
				el: '.is-luxurious .swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.is-luxurious .swiper-button-next',
				prevEl: '.is-luxurious .swiper-button-prev',
			},
			a11y: {
				enabled: false
			}
		});

	}


	if ($('.is-infinity').length && !$('.is50k').length) {

		infinitySlider = new Swiper('.fs-infinity-slider', {
			effect: 'slide',
			loop: true,
			speed: 800,
			a11y: {
				enabled: false
			},
			pagination: {
				el: '.is-infinity .swiper-pagination',
				clickable: true,
			},
			on: {
				init: function () {
					$('.fs-infinity-nav li:nth-child(1)').addClass('active');
				}, transitionStart: function () {
					$('.fs-infinity-nav li').removeClass('active');
					var index = $('.is-infinity .swiper-pagination-bullet.swiper-pagination-bullet-active').index() + 1;
					$('.fs-infinity-nav li:nth-child(' + index + ')').addClass('active');
				}, transitionEnd: function () {
				}
			}
		});

		$('.fs-infinity-nav li').click(function () {
			if (!$(this).hasClass('active')) {
				var index = $('.fs-infinity-nav li').index(this) + 1;
				$('.is-infinity .swiper-pagination-bullet:nth-child(' + index + ')').trigger('click');
			}
		});

	}

	if ($('.is50k').length) {
		infinity50kSlider = new Swiper('.fs-infinity-slider.is50k', {
			effect: 'slide',
			loop: true,
			speed: 800,
			pagination: {
				el: '.swiper-pagination.is50k',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			on: {
				init: function () {
					$('.fs-infinity-nav.is50k li:nth-child(1)').addClass('active');
				}, transitionStart: function () {
					$('.fs-infinity-nav.is50k li').removeClass('active');
					var index = $('.is-infinity .swiper-pagination.is50k .swiper-pagination-bullet.swiper-pagination-bullet-active').index() + 1;
					$('.fs-infinity-nav.is50k li:nth-child(' + index + ')').addClass('active');
				}, transitionEnd: function () {
				}
			}
		});

		$('.fs-infinity-nav.is50k li').click(function () {
			if (!$(this).hasClass('active')) {
				var index = $('.fs-infinity-nav.is50k li').index(this) + 1;
				$('.is-infinity .swiper-pagination.is50k .swiper-pagination-bullet:nth-child(' + index + ')').trigger('click');
			}
		});

	}

	if ($('.is55k').length) {
		infinity55kSlider = new Swiper('.fs-infinity-slider.is55k', {
			effect: 'slide',
			loop: true,
			speed: 800,
			pagination: {
				el: '.swiper-pagination.is55k',
				clickable: true,
			},
			a11y: {
				enabled: false
			},
			on: {
				init: function () {
					$('.fs-infinity-nav.is55k li:nth-child(1)').addClass('active');
				}, transitionStart: function () {
					$('.fs-infinity-nav.is55k li').removeClass('active');
					var index = $('.is-infinity .swiper-pagination.is55k .swiper-pagination-bullet.swiper-pagination-bullet-active').index() + 1;
					$('.fs-infinity-nav.is55k li:nth-child(' + index + ')').addClass('active');
				}, transitionEnd: function () {
				}
			}
		});

		$('.fs-infinity-nav.is55k li').click(function () {
			if (!$(this).hasClass('active')) {
				var index = $('.fs-infinity-nav.is55k li').index(this) + 1;
				$('.is-infinity .swiper-pagination.is55k .swiper-pagination-bullet:nth-child(' + index + ')').trigger('click');
			}
		});
	}


}

// Events Common
function fsEvent() {
	//Event Here
	//Nav Toogle

	//Stop slide
	$('.fs-play-toggle').click(function () {
		pauseClick = true;
		if (luxuriousSlider) {
			if ($(this).hasClass('is-pause')) {
				$('.fs-play-toggle').removeClass('is-pause');
				luxuriousSlider.autoplay.start();

			} else {
				$('.fs-play-toggle').addClass('is-pause');
				luxuriousSlider.autoplay.stop();
			}
		}
		if (swiperAlbum) {
			if ($(this).hasClass('is-pause')) {
				$('.fs-play-toggle').removeClass('is-pause');
				swiperAlbum.autoplay.start();

			} else {
				$('.fs-play-toggle').addClass('is-pause');
				swiperAlbum.autoplay.stop();
			}
		}
	});


	var videoPop = null;
	//Open Video Pop
	$('.fs-play-but').click(function () {

		$('body').addClass('fs-no-scroll');
		$('.fs-overlay').fadeIn(300, function () {
			$(this).addClass('fs-show-overlay');
			videoPop = document.getElementById('videoId');
			videoPop.play();
		});

	});

	$('.fs-close-overlay').click(function () {
		$('body').removeClass('fs-no-scroll');
		$('.fs-overlay').fadeOut(150, function () {
			if (videoPop) {
				videoPop.pause();
			}
			$(this).removeClass('fs-show-overlay');
		});

	});

	$('.fs-nav-sort-by-tv li').click(function () {
		$('.fs-nav-sort-by-tv li').removeClass('active');
		$(this).addClass('active');
		var target = $(this).attr('data-target');
		$('.fs-sort-by-tv').removeClass('active');
		$('.fs-sort-by-tv[data-tv-type=' + target + ']').addClass('active');
	});

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


//  Function change color
function fsChangeColor() {
	if ($('.is-design').length) {
		$('.colors .color').on('click', function () {
			var $color = $(this).data('color');
			var $url = $(this).data('url')
			$('.colors .color').removeClass('color-selected');
			$(this).addClass('color-selected');
			switch ($color) {
				case 'green':
					$('#productColor').attr({ 'src': $url, 'data-src': $url });
					break;
				case 'pink':
					$('#productColor').attr({ 'src': $url, 'data-src': $url });
					break;
				case 'black':
					$('#productColor').attr({ 'src': $url, 'data-src': $url });
					break;
				default:
					$('#productColor').attr({ 'src': $url, 'data-src': $url });
					break;
			}
		})
	}
}

function changeCinemactor() {
	if ($("#volume").length) {
		$("#volume").slider({
			min: 0,
			max: 100,
			value: 0,
			range: "min",
			slide: function (event, ui) {
				var $val = ui.value / 100;
				setOpacity($val);
				setOpacityTxt('#player .after', $val);
				setOpacityTxt('#player .before', 1 - $val);
			}
		});
	}
}

function setOpacity($opa) {
	$('.cmPic-after').css('opacity', $opa);
}
function setOpacityTxt($elm, $opa) {
	if ($opa < 0.3) {
		$opa = 0.3;
	}
	$($elm).css('opacity', $opa);
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
		if (elm.getBoundingClientRect().top <= window.innerHeight + threshold * 5) {
			elm.setAttribute('src', elm.getAttribute('data-src'));
			elm.classList.remove('fs-lazy');
		}
	});

	// Lazy background
	[].slice.call(lazyBgs).forEach(function (elm) {
		if (elm.getBoundingClientRect().top <= window.innerHeight + threshold * 5) {
			elm.style.backgroundImage = 'url(' + elm.getAttribute('data-src') + ')';
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

			[].slice.call(document.querySelectorAll('.fs-section, .fs-word-box, .fs-conection-left, .fs-conection-right, .is-conection .fs-area-pic, .img-camera-01, .img-camera-02')).forEach(function (elm) {

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					elm.classList.add('fs-ani');
				} else {
					elm.classList.remove('fs-ani');
				}
			});

			[].slice.call(document.querySelectorAll('.fs-title, .is-luxurious .fs-box,  .is-4k .fs-area-pic, .fs-save-box, .is-vsmart .fs-area-txt, .is-vsmart .fs-vsmart-icons, .is-vsmart .fs-vsmart-light')).forEach(function (elm) {

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					elm.classList.add('fs-ani');
				} else {
					elm.classList.remove('fs-ani');
				}
			});

			[].slice.call(document.querySelectorAll('.is-dolby .fs-area-txt, .is-dolby .fs-title-dolby, .is-voice .fs-area-txt, .is-4k .fs-area-txt, .is-processor .fs-area-txt, .is-design-thing .fs-title, .is-design-thing .fs-area-pic, .is-pin-sim .fs-box')).forEach(function (elm) {

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					elm.classList.add('fs-ani');
				} else {
					elm.classList.remove('fs-ani');
				}
			});

			[].slice.call(document.querySelectorAll('.delicate-49ke .fs-area-pic img, .is-processor-49ke .fs-area-pic, .is-screen .fs-area-pic, .delicate-kd43 .fs-area-pic img')).forEach(function (elm) {

				if (elm.getBoundingClientRect().top <= $(window).height()) {
					elm.classList.add('fs-ani');
				} else {
					elm.classList.remove('fs-ani');
				}
			});


			[].slice.call(document.querySelectorAll('.is-delicate .fs-area-pic, .fs-delicate-box, .is-screen .fs-box, .is-sound .fs-box')).forEach(function (elm) {

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() / 2) {
					elm.classList.add('fs-ani');
				} else {
					elm.classList.remove('fs-ani');
				}
			});

		}

		ImgLazyLoad();

	}, 0);  // Process for Input Delay

}

// Func Resize
function Resize() {

	// Need detect not mobile when resize because in mobile scrolling call resize
	if (!isMobile) {
		ImgLazyLoad();
	}
}

function Rotate() {
	ImgLazyLoad();
}

// Set Scroll for Page
$(window).on('scroll', onScroll);

// Page Rezize
$(window).on('resize', Resize);

// Page Rotate
$(window).on('orientationchange', Rotate);

var loading = true;

function starPage() {
	$('html,body').scrollTop(0);
	if (loading) {
		$('html,body').scrollTop(0);
		loading = false;
		$('.fs-loading').fadeOut(300, function () {
			$('.fs-loading').remove();

			// Call slider here
			ImgLazyLoad();
			fsSlider();

			$('html,body').scrollTop(0);

			// Fade Page [ this can edit for each projects]
			$('.fs-page').css({ 'opacity': 1 });
			isCroll = true;
			onScroll(); // must be call here fisrt
			changeCinemactor();
			fsChangeColor();
			fsEvent();
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
	ImgLazyLoad(); // must be call here fisrt

	setTimeout(function () {
		if (loading) {
			starPage();
		}
	}, 3000);
})();
