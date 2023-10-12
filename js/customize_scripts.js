(function($, window, undefined) {
    $('html').removeClass('no-js');
    var $allDropdowns = $();
    $.fn.dropdownHover = function(options) {
        if ('ontouchstart' in document) return this;
        $allDropdowns = $allDropdowns.add(this.parent());
        return this.each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = { delay: 0, hoverDelay: 0, instantlyCloseOthers: true },
                data = { delay: $(this).data('delay'), hoverDelay: $(this).data('hover-delay'), instantlyCloseOthers: $(this).data('close-others') },
                showEvent = 'show.bs.dropdown',
                hideEvent = 'hide.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                timeout, timeoutHover;
            $parent.hover(function(event) {
                if (!$parent.hasClass('open') && !$this.is(event.target)) { return true; }
                openDropdown(event);
            }, function() {
                window.clearTimeout(timeoutHover)
                timeout = window.setTimeout(function() {
                    $this.attr('aria-expanded', 'false');
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                }, settings.delay);
            });
            $this.hover(function(event) {
                if (!$parent.hasClass('open') && !$parent.is(event.target)) { $('.dropdown-menu').addClass('animated fadeIn'); return true; }
                openDropdown(event);
            });
            $parent.find('.dropdown-submenu').each(function() {
                var $this = $(this);
                var subTimeout;
                $this.hover(function() {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    $this.siblings().children('.dropdown-menu').hide();
                }, function() {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function() { $submenu.hide(); }, settings.delay);
                });
            });

            function openDropdown(event) {
                window.clearTimeout(timeout);
                window.clearTimeout(timeoutHover);
                timeoutHover = window.setTimeout(function() {
                    $allDropdowns.find(':focus').blur();
                    if (settings.instantlyCloseOthers === true) $allDropdowns.removeClass('open');
                    window.clearTimeout(timeoutHover);
                    $this.attr('aria-expanded', 'true');
                    $parent.addClass('open');
                    $this.trigger(showEvent);
                }, settings.hoverDelay);
            }
        });
    };
    $(document).ready(function() { $('[data-hover="dropdown"]').dropdownHover(); });
})(jQuery, window);
$(function() {
    $('.js-activated').dropdownHover().dropdown();
    $('ul.nav').children('li.dropdown').keyup(function() {
        $(this).children().show();
        $(this).siblings().focus(function() { $(this).hide() });
    });
    $('ul.nav').children('li.dropdown').keyup(function() { $(this).siblings().children('ul').hide(); });
    $('ul.nav li.dropdown li:last>a').focusout(function() { $('ul.nav li.dropdown ul').hide(); })
});
$(document).ready(function() {
    $('.Multiple-items').slick({ dots: true, dotsClass: 'slick-number', infinite: true, autoplay: true, autoplaySpeed: 3000, slidesToShow: 3, slidesToScroll: 3 });
    $('.variable-width').slick({ dots: true, infinite: true, speed: 500, slidesToShow: 1, centerMode: true, variableWidth: true });
    $('.one-time').slick({ dots: true, infinite: true, speed: 500, slidesToShow: 1, adaptiveHeight: true });
    $('.uneven').slick({ dots: true, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 4 });
    $('.Responsive_slider').slick({ dots: true, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 4, autoplay: true, autoplaySpeed: 1500, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    $('.Vertical_slider').slick({ dots: false, infinite: true, vertical: true, verticalSwiping: true, speed: 500, slidesToShow: 3, slidesToScroll: 3, autoplay: true, autoplaySpeed: 1500, speed: 1000, focusOnSelect: true, });
    $('.vertical-syncing').slick({ dots: false, infinite: true, vertical: true, verticalSwiping: true, speed: 500, slidesToShow: 4, slidesToScroll: 4, autoplay: true, autoplaySpeed: 1500, speed: 1000, centerMode: true, focusOnSelect: true, responsive: [{ breakpoint: 990, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, vertical: false, verticalSwiping: false } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, vertical: false, verticalSwiping: false } }] });
    $('.mp_stuffSlider').slick({ dots: false, infinite: true, speed: 500, arrows: true, slidesToShow: 5, slidesToScroll: 5, autoplay: true, autoplaySpeed: 1500, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: false } }, { breakpoint: 600, settings: { arrows: false, slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 480, settings: { arrows: false, slidesToShow: 2, slidesToScroll: 2 } }] });
    $('.Responsive_slider').slick({ dots: false, adaptiveHeight: true, infinite: true, speed: 1500, arrows: false, fade: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, pauseOnHover: false, autoplaySpeed: 2500, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    $('.website_slider').slick({ dots: false, infinite: true, speed: 1000, arrows: true, slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: false } }, { breakpoint: 991, settings: { dots: false, arrows: false, slidesToShow: 3, slidesToScroll: 1, } }, { breakpoint: 600, settings: { dots: false, arrows: false, slidesToShow: 2, slidesToScroll: 1, } }, { breakpoint: 480, settings: { dots: false, arrows: false, slidesToShow: 1, slidesToScroll: 1, } }] });
    $('.Slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, speed: 500, arrows: false, fade: true, autoplay: true, autoplaySpeed: 2000, asNavFor: '.Slider-nav' });
    $('.Slider-nav').slick({ slidesToShow: 3, slidesToScroll: 1, speed: 500, asNavFor: '.Slider-for', dots: true, centerMode: true, focusOnSelect: true, slide: 'div' });
    $('.Slider-nav .slick-slide').removeClass('slick-active');
    $('.Slider-nav .slick-slide').eq(0).addClass('slick-active');
    $('.Slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.Slider-nav .slick-slide').removeClass('slick-active');
        $('.Slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
    $('.lazy').slick({ lazyLoad: 'ondemand', slidesToShow: 3, slidesToScroll: 1, speed: 500 });
    $('.single-item-rtl').slick({ dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, rtl: true });
    $('.multiple-items-rtl').slick({ dots: true, infinite: true, slidesToShow: 3, speed: 500, slidesToScroll: 3, rtl: true });
    $('.importantdata_content').slick({ dots: false, infinite: true, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, } }, { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 700, settings: { slidesToShow: 1, slidesToScroll: 1, } }] });
    $('.recommend_content').slick({ dots: false, infinite: true, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, } }, { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1, } }, { breakpoint: 700, settings: { slidesToShow: 1, slidesToScroll: 1, } }] });
    $('.activity').slick({ dots: true, infinite: true, speed: 300, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, } }, { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1, } }, { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
});
$(document).ready(function() {
    $(".FatFooterBtn").click(function() {
        $('#FatFooter>nav>ul>li>ul').slideToggle(function() { if ($(this).is(':visible')) { document.getElementById("FatFooterBtn").value = "收合"; } else { document.getElementById("FatFooterBtn").value = "展開"; } });
        $(this).toggleClass('close');
    });
});
$(document).ready(function(e) {
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});
$(function() { $(".scrollToTop").click(function() { $("html,body").animate({ scrollTop: 0 }, 1000, "easeOutQuint"); return false; }); });
$(function() {
    $('.scrollToTop').keydown(function(e) {
        $('body').find('a.goCenter').focus();
        e.preventDefault();
    });
})
$(function() {
    $(window).load(function() {
        $(window).bind('scroll resize', function() {
            var $this = $(this);
            var $this_Top = $this.scrollTop();
            if ($this_Top < 130) { $(".scrollToTop").fadeOut(); }
            if ($this_Top > 130) { $(".scrollToTop").fadeIn(); }
        }).scroll();
    });
});
$(window).scroll(function() { if ($(this).scrollTop() > 130) { $('.back_page').stop(true, false).fadeIn(); } else { $('.back_page').stop(true, false).fadeOut(); } });
$(document).ready(function() {
    window.prettyPrint && prettyPrint()
    $(document).on('click', '.megamenu .dropdown-menu', function(e) { e.stopPropagation() })
})
jQuery(document).ready(function() {
    var _window = $(window),
        ww = _window.width(),
        wh = _window.height(),
        _header = $('.header'),
        hh = _header.outerHeight(true),
        wwNormal = 1000,
        wwMedium = 800,
        wwSmall = 766,
        wwxs = 420;
    $('html').removeClass('no-js');
    tabSet();
    var resizeTimer1;
    $(window).resize(function() {
        clearTimeout(resizeTimer1);
        resizeTimer1 = setTimeout(function() {
            ww = $(window).width();
            tabSet();
        }, 100);
    });

    function tabSet() {
        $('.tabs').each(function() {
            var _tab = $(this),
                _tabItem = _tab.find('.tabItem'),
                _tabItemA = _tabItem.children('a'),
                _tabContent = _tab.find('.tabContent'),
                tabwidth = _tab.width(),
                tabItemHeight = _tabItem.outerHeight(),
                tabContentHeight = _tab.find('.active').next().innerHeight();
            tabItemLength = _tabItem.length, tabItemWidth = tabwidth / tabItemLength;
            _tab.find('.active').next('.tabContent').show();
            if (ww > wwSmall) {
                _tabContent.css('top', tabItemHeight);
                _tab.height(tabContentHeight + tabItemHeight);
                _tabItem.width(tabItemWidth);
                _tabItem.last().css({ position: "absolute", top: "0", right: "0" }).width(tabItemWidth + 1);
            } else {
                _tab.css('height', 'auto');
                _tabItem.width(tabwidth);
                _tabItem.last().css('position', 'relative');
            }
            _tabItemA.focus(tabs);
            _tabItemA.click(tabs);

            function tabs(e) {
                var _tabItemNow = $(this).parent(),
                    tvp = _tab.offset().top,
                    tabIndex = _tabItemNow.index() / 2,
                    scollDistance = tvp + tabItemHeight * tabIndex - hh;
                _tabItem.removeClass('active');
                _tabItemNow.addClass('active');
                if (ww <= wwSmall) {
                    if (!$(this).parents('.tabs').hasClass('albumType4')) {
                        _tabItem.not('.active').next().slideUp();
                        _tabItemNow.next().slideDown();
                        $("html,body").stop(true, false).animate({ scrollTop: scollDistance });
                    }
                } else {
                    _tabItem.not('.active').next().hide();
                    _tabItemNow.next().show();
                    tabContentHeight = _tabItemNow.next().innerHeight();
                    _tab.height(tabContentHeight + tabItemHeight);
                }
                e.preventDefault();
            }
        });
    }
});
$(function() { $('.Single_slider').slick({ dots: true, dotsClass: 'slick-dots', infinite: true, autoplay: true, autoplaySpeed: 5000, slidesToShow: 1, fade: true, slidesToScroll: 1 }); })
$(function() { $('.servicebanner').slick({ dots: false, dotsClass: 'slick-dots', infinite: true, autoplay: true, autoplaySpeed: 5000, slidesToShow: 1, fade: true, slidesToScroll: 1 }); })
$(document).ready(function() {
    $('#incfont').click(function() { curSize = parseInt($('#ContentPage').css('font-size')) + 2; if (curSize <= 20) $('#ContentPage').css('font-size', curSize); });
    $('#decfont').click(function() { curSize = parseInt($('#ContentPage').css('font-size')) - 2; if (curSize >= 12) $('#ContentPage').css('font-size', curSize); });
});
$(function() {
    $('.community_rights ul ul').hide();
    $('.community_rights ul li:has(ul)').addClass('hasChild');
    $('.community_rights ul>li>a').on('mousedown focusin', function() {
        $(this).parent().siblings().children('ul').hide();
        $(this).next('ul').stop(true, true).slideDown(200);
        return false;
    });
    $(document).click(function(e) { var target = e.target; if (!$(target).is('.community_rights ul>li>a')) { $('.community_rights ul ul').hide(); } });
    $('.community_rights ul li ul li:last-child a').focusout(function() { $('.community_rights ul ul').slideUp(200); })
})
$(function() {
    $("#fast").click(function() {
        $(".fastlink").css({ right: 0 });
        $(".fastlink_btn").css('display', 'none');
        $(".fastlink_btn2").css('display', 'block');
    })
    $("#fast2").click(function() {
        $(".fastlink").css({ right: -65 });
        $(".fastlink_btn").css('display', 'block');
        $(".fastlink_btn2").css('display', 'none');
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.fastlink').css({ top: 0 });
            console.log('ok');
        } else {
            $('.fastlink').css({ top: 170 });
            console.log('back');
        }
    });
})
$(function() {
    $('.group01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.news').offset().top }, 1200, 'easeOutExpo');
        $('.news').find('.firstlink').focus();
    });
    $('.group02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.importantdata_block').offset().top }, 1200, 'easeOutExpo');
        $('.importantdata_block').find('.slick-prev').focus();
    });
    $('.group03').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.recommend_block').offset().top }, 1200, 'easeOutExpo');
        $('.recommend_block').find('.slick-prev').focus();
    });
    $('.group04').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.communityblock').offset().top }, 1200, 'easeOutExpo');
        $('.communityblock').find('.firstlink').focus();
    });
    $('.group05').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.education_block').offset().top }, 1200, 'easeOutExpo');
        $('.education_block').find('.firstlink').focus();
    });
    $('.group06').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.industry').offset().top }, 1200, 'easeOutExpo');
        $('.industry').find('.firstlink').focus();
    });
    $('.group07').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.propagandamovie').offset().top }, 1200, 'easeOutExpo');
        $('.propagandamovie').find('.firstlink').focus();
    });
    $('.group08').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.activityphoto').offset().top }, 1200, 'easeOutExpo');
        $('.activityphoto').find('.slick-prev').focus();
    });
    $('.group09').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.common_links').offset().top }, 1200, 'easeOutExpo');
        $('.common_links').find('.firstlink').focus();
    });
})
//宣導影音
$(function() {
    $('.videoblock .more').click(function() {
        $('.videoblock .video_list').toggleClass('openul');
        $(this).parent().siblings().find('.video_list').removeClass('openul');
    })
})
// 燈箱
$(function() {
    // //
    $(".lightBoxBtn").click(function(e) {
        e.preventDefault();
        var box = $($(this).data("rel"));
        box.fadeIn();
        $('body').addClass('fix');
        box.find('.boxclose a').focus();

        box.find(".boxclose, .overlay").one("click", function() {
            box.fadeOut();
            $('body').removeClass('fix');
        });

    });
     $('.material_lightbox .boxcontent').append('<button class="skip" type="button">回到控制開關</button>');
     $('.material_lightbox .skip').focus(function(){
        $('.material_lightbox .boxclose a').focus();
     })
})
$(function() {
    if ($(".part").height() < 160) {
        $(".show_btn").hide()
        $(".part").css("padding-bottom", "20px");
    };
    $(".show_btn").click(function() {
        $(".part").css("max-height", "100%");
        $(".part").css("padding-bottom", "20px");
        $(this).hide();
        $(".hide_btn").show();
    })
    $(".hide_btn").click(function() {
        $(".part").css("max-height", "160px");
        $(this).hide();
        $(".show_btn").show();
    })
})
$(document).on('change', '.check_file', function() {
    var names = [];
    var length = $(this).get(0).files.length;
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
        names.push($(this).get(0).files[i].name);
    }
    // $('input[name=file]').val(names);
    if (length > 2) {
        var fileName = names.join(', ');
        $(this).closest('.upload_grp').find('.upload_file').attr("value", length + " files selected");
    } else {
        $(this).closest('.upload_grp').find('.upload_file').attr("value", names);
    }
});
$(function() {
    $('.manage_explain_title>a').click(function() {
        $(this).parent('.manage_explain_title').siblings('.manage_explain_content').slideToggle();
        $(this).stop().toggleClass('addopen');
    })
})