var slariScript = {
    init: function() {
        // slariScript.fixHeader();
        // slariScript.headerTop();
        slariScript.masonryInit();
        slariScript.fullPage();
        slariScript.navMobile();
        slariScript.wowInit();
        // slariScript.detectAnimationDone();
        slariScript.navResp();
        slariScript.skillBarMobile();
        slariScript.wowInit();
    },
    skillBar: function() {
        jQuery('.skill-percent-wrap').each(function() {
            jQuery(this).find('.skill-percent').css({ width: jQuery(this).attr('data-percent') });
        });
    },
    skillBarMobile: function() {
        var screenW = jQuery(window).width();
        if (screenW < 1024) {
            jQuery(window).scroll(function() {
                var top = jQuery(document).scrollTop();
                var homeHeight = jQuery('#section-home').height();
                if (top > homeHeight) {
                    jQuery('.skill-percent-wrap').each(function() {
                        jQuery(this).find('.skill-percent').delay(500).css({ width: jQuery(this).attr('data-percent') });
                    });
                } 
            })
        }
    },
    fixHeader: function() {
        // Fixed Header
        jQuery(window).scroll(function() {
            var top = jQuery(document).scrollTop();
            var windowHeight = jQuery(window).height() - jQuery('.nav-wrapper').height();
            console.log('scroll');
            if (top > windowHeight) {
                jQuery('.nav-wrapper').addClass('fixed-header');
            } else {
                jQuery('.nav-wrapper').removeClass('fixed-header');
            }
        });
    },
    headerTop: function() {
        // Header Top
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 500) {
                jQuery('#header').addClass('header-on-top');
            } else {
                jQuery('#header').removeClass('header-on-top');
            }
        });
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
    navResp: function() {
        jQuery('#open-nav').click(function() {
            jQuery('body').toggleClass('nav-mobile');
        })
        // jQuery('.close-nav').click(function() {
        //     jQuery('body').removeClass('nav-mobile');
        // })
    },
    fullPage: function() {
        var screenW = jQuery(window).width();
        if (screenW >= 1024) {
            jQuery('#fullpage').fullpage({
                sectionSelector: 'section',
                navigation: true,
                menu: '#myMenu',
                responsiveWidth: 1100,
                scrollBar: true,
                anchors: ['home', 'about', 'about', 'blog', 'work', 'contact'],
                onLeave: function(index, nextIndex, dir) {
                    console.log(nextIndex, "index");
                    // Detect when on top 
                    if (nextIndex === 1) {
                        jQuery('body').removeClass('header-top');
                        jQuery('body').removeClass('animation-done');
                        jQuery('body').addClass('header-bottom');
                    } else if (nextIndex === 2) {
                        slariScript.skillBar();
                        jQuery('body').removeClass('header-bottom');
                        jQuery('body').addClass('header-top');
                        setTimeout(function() {
                            jQuery("body").addClass("animation-done");
                        }, 1000);
                    } else {
                        jQuery('body').removeClass('header-bottom');
                        jQuery('body').addClass('header-top');
                        setTimeout(function() {
                            jQuery("body").addClass("animation-done");
                        }, 1000);
                    }
                }
            });
        }
    },
    navMobile: function() {
        jQuery('#open-nav').click(function() {
            jQuery(this).toggleClass('open');
        });
    },
    detectAnimationDone: function() {
        jQuery("#header").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function(event) {
                jQuery("body").addClass("animation-done");
                setTimeout(function() {
                    jQuery("body").addClass("animation-done-done");
                }, 1000)
            })
    },
    wowInit: function(){
        var screenW = jQuery(window).width();
        if (screenW > 1024) {
            new WOW().init();
        }
        
    },
};
jQuery(document).ready(function($) {
    slariScript.init();
});
