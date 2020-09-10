// Close Product Nav
$('.menu_products_close').click(function () {
    $('.fs-menu-products').removeClass('is-open');
});

//Open Product Nav
//$('.product-toggle').click(function () {
//    $('.fs-menu-products').addClass('is-open');
//});



//Open Mobile Product Nav
$('.product-toggle').click(function () {
    $('#mobileMenu').addClass('is-open');
    $('#tiviMenu').removeClass('is-open');
});

//Open Tivi Product Nav

$('.product-toggle-tivi').click(function () {
    $('#tiviMenu').addClass('is-open');
    $('#mobileMenu').removeClass('is-open');
});

var pathBase = '/';
var setLanguage = document.getElementById('setLanguage');
let currentLanguage = $('#_currentLanguage').val();
//setLanguage.value = currentLanguage;

setLanguage.onchange = function () {
    let currentUrl = window.location.href;
    let host = window.location.host;
    let selectedLanguage = this.value;
    let redirectUrl = currentUrl.replace(host + '/' + currentLanguage, host + '/' + selectedLanguage);
    if (redirectUrl === currentUrl) {
        redirectUrl = currentUrl + selectedLanguage;
    }
    window.location.href = redirectUrl;
}


$('.menu_toggler').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.menu_primary').removeClass('is-open');
    } else {
        $(this).addClass('active');
        $('.menu_primary').addClass('is-open');
        let lightExist = $('.menu_primary').hasClass('light');
        if (lightExist === true) {
            $('.menu_primary').removeClass('light');
        }
        $('.menu_primary').addClass('dark');
        let chooseLanguage = $('#setLanguage').hasClass('selectLangDark');
        if (chooseLanguage === true) {
            $('#setLanguage').removeClass('selectLangDark');
        }
        $('#setLanguage').addClass('selectedLangLight');
    }
});