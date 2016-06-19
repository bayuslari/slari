var slariScript = {

    init: function() {
        slariScript.waypointsInit();
        slariScript.skillBar();
        slariScript.skillBarMobile();
        slariScript.masonryInit();
        slariScript.fixHeader();
        slariScript.magnificPopup();
        slariScript.navMobile();
    },
    navMobile: function() {
        jQuery('#open-nav').click(function(e) {
            jQuery(this).toggleClass('open');
            jQuery('body').toggleClass('nav-mobile');
            e.preventDefault();
        });
    },
    magnificPopup: function() {
        jQuery('.work-wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    },
    fixHeader: function() {
        // Fixed Header
        jQuery('header').each(function() {
            var that = this;
            var screenW = jQuery(window).width();
            if (screenW >= 767) {
                //     var $things = jQuery('header');
                jQuery(that).waypoint(function(direction) {
                    if (direction === 'down') {
                        jQuery(that).addClass('fixed-header');
                        jQuery(that).addClass('resize-header');
                    }
                });
                jQuery(that).waypoint(function(direction) {
                    if (direction === 'up') {
                        jQuery(that).removeClass('fixed-header');
                        setTimeout(function() {
                            jQuery(that).removeClass('resize-header');
                        }, 50);
                    }
                });
            }
        });
    },
    waypointsInit: function() {
        jQuery('.section-content').each(function() {
            var that = this;
            var waypoints = $(this).waypoint({
                handler: function(direction) {
                    jQuery(that).addClass('animated fadeInUp');
                    jQuery(that).css('opacity', '1');
                },
                offset: '50%'
            });
        });
    },
    skillBar: function() {
        jQuery('#section-about').each(function() {
            var that = this;
            var waypoints = $(this).waypoint({
                handler: function(direction) {
                    jQuery('.skill-percent-wrap').each(function() {
                        jQuery(this).find('.skill-percent').delay(10000).css({
                            width: jQuery(this).attr('data-percent')
                        });
                    });
                },
                offset: '50%'
            });
        });

        // jQuery('.skill-percent-wrap').each(function() {
        //     jQuery(this).find('.skill-percent').delay(10000).css({
        //         width: jQuery(this).attr('data-percent')
        //     });
        // });
    },
    skillBarMobile: function() {
        var screenW = jQuery(window).width();
        if (screenW < 1024) {
            jQuery(window).scroll(function() {
                var top = jQuery(document).scrollTop();
                var homeHeight = jQuery('#section-home').height();
                if (top > homeHeight) {
                    jQuery('.skill-percent-wrap').each(function() {
                        jQuery(this).find('.skill-percent').delay(500).css({
                            width: jQuery(this).attr('data-percent')
                        });
                    });
                }
            });
        }
    },
    masonryInit: function() {
        jQuery('.work-wrapper').masonry({
            itemSelector: 'a',
            columnWidth: function(containerWidth) {
                return containerWidth / 3;
            },
            gutterWidth: 0
        });
    },
};
jQuery(document).ready(function($) {
    slariScript.init();
    smoothScroll.init();
});
