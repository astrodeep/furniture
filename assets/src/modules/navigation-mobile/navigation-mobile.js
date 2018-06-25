jQuery('.top__mobile-click').on('click', function () {
    jQuery('.top__mobile-click').toggleClass('active');
    if (jQuery('.top__mobile-click').hasClass('active')) {
        jQuery('.navigation-mobile-box').stop().animate({left: '0'}, {

        })
    } else {
        jQuery('.navigation-mobile-box').stop().animate({left: '-330px'}, {

        });
    }

});
jQuery('.navigation-mobile-box__close').on('click', function () {
    jQuery('.top__mobile-click').removeClass('active');
    jQuery('.navigation-mobile-box').stop().animate({left: '-330px'}, { });
});


/*
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
        jQuery('.top__mobile-click').addClass('fixed');
    }
    else if (jQuery(this).scrollTop() < 50) {
        jQuery('.top__mobile-click').removeClass('fixed');
    }
});*/
