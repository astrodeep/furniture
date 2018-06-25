jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 120) {
        jQuery('.wrapper__navigation').addClass('fixed');
    }
    else if (jQuery(this).scrollTop() < 120) {
        jQuery('.wrapper__navigation').removeClass('fixed');
    }
});