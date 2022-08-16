/**
 * Note that we're not initialising or calling the functions, we'll call them in `App.tsx` 
 * when we're sure the elements they depend on has been rendered to the screen.
 * before this script executes, jQuery should be available
 */

/*!
 * ICOCrypto v1.6.1 by Softnio.
 **/
// Returns app info object when called
var App_Info = (function (a, l, e) {
  "use strict";
  var i = {
      AppInfo: {
        name: "ICOCrypto",
        package: "1.6.0",
        version: "1.0.2",
        author: "Softnio",
      },
    },
    s = { docReady: [], docReadyDefer: [], winLoad: [], winLoadDefer: [] };
  function t(l) {
    (l = void 0 === l ? a : l),
      s.docReady.concat(s.docReadyDefer).forEach(function (a) {
        a(l);
      });
  }
  function o(l) {
    (l = "object" == typeof l ? a : l),
      s.winLoad.concat(s.winLoadDefer).forEach(function (a) {
        a(l);
      });
  }
  return (
    a(e).ready(t),
    a(l).on("load", o),
    (i.components = s),
    (i.docReady = t),
    (i.winLoad = o),
    i
  );
});

// Script_Init when called will consume App Info object given as argument and also return App Info object 
// to be consumed by function in charts.js.
var Script_Init = (function (a, l, e, i) {
  "use strict";
  var s = l(e),
    t = l(i),
    o = l("body"),
    d = l(".header-main"),
    n = e.location.href,
    c = d.innerHeight() - 2,
    m = n.split("#");
  return (
    (l.fn.exists = function () {
      return this.length > 0;
    }),
    (a.Win = {}),
    (a.Win.height = l(e).height()),
    (a.Win.width = l(e).width()),
    (a.getStatus = {}),
    (a.getStatus.isRTL = !(!o.hasClass("has-rtl") && "rtl" !== o.attr("dir"))),
    (a.getStatus.isTouch = "ontouchstart" in i.documentElement),
    (a.getStatus.isMobile = !!navigator.userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i
    )),
    (a.getStatus.asMobile = a.Win.width < 768),
    s.on("resize", function () {
      (a.Win.height = l(e).height()),
        (a.Win.width = l(e).width()),
        (a.getStatus.asMobile = a.Win.width < 768);
    }),
    (a.Util = {}),
    (a.Util.classInit = function () {
      var i = function () {
        !0 === a.getStatus.asMobile
          ? o.addClass("as-mobile")
          : o.removeClass("as-mobile");
      };
      !0 === a.getStatus.isTouch
        ? o.addClass("has-touch")
        : o.addClass("no-touch"),
        i(),
        "rtl" === o.attr("dir") &&
          (o.addClass("has-rtl"), (a.getStatus.isRTL = !0)),
        l(e).on("resize", i);
    }),
    a.components.docReady.push(a.Util.classInit),
    (a.Util.preLoader = function () {
      var a = l(".preloader"),
        e = l(".spinner");
      a.exists() &&
        (o.addClass("page-loaded"), e.fadeOut(300), a.delay(600).fadeOut(300));
    }),
    a.components.winLoad.push(a.Util.preLoader),
    (a.Util.backTop = function () {
      var a = l(".backtop");
      if (a.exists()) {
        s.scrollTop() > 800 ? a.fadeIn("slow") : a.fadeOut("slow"),
          a.on("click", function (a) {
            l("body,html")
              .stop()
              .animate({ scrollTop: 0 }, 1500, "easeInOutExpo"),
              a.preventDefault();
          });
      }
    }),
    a.components.docReady.push(a.Util.backTop),
    (a.Util.browser = function () {
      var a = -1 !== navigator.userAgent.indexOf("Chrome") ? 1 : 0,
        l = -1 !== navigator.userAgent.indexOf("Firefox") ? 1 : 0,
        s = -1 !== navigator.userAgent.indexOf("Safari"),
        t =
          -1 !== navigator.userAgent.indexOf("MSIE") || i.documentMode ? 1 : 0,
        d = !t && !!e.StyleMedia,
        n =
          navigator.userAgent.indexOf("Opera") ||
          navigator.userAgent.indexOf("OPR")
            ? 1
            : 0;
      a
        ? o.addClass("chrome")
        : l
        ? o.addClass("firefox")
        : t
        ? o.addClass("ie")
        : d
        ? o.addClass("edge")
        : n
        ? o.addClass("opera")
        : s && o.addClass("safari");
    }),
    a.components.winLoad.push(a.Util.browser),
    (a.Util.headerSticky = function () {
      var a = l(".is-sticky"),
        e = {
          hasFixed: function () {
            if (a.exists()) {
              var l = a.offset();
              s.on("scroll", function () {
                s.scrollTop() > l.top
                  ? a.hasClass("has-fixed") || a.addClass("has-fixed")
                  : a.hasClass("has-fixed") && a.removeClass("has-fixed");
              });
            }
          },
          hasShrink: function () {
            a.hasClass("is-shrink") && (c = d.height() + 16 - 2);
          },
        };
      e.hasFixed(),
        e.hasShrink(),
        s.on("resize", function () {
          c = a.hasClass("is-shrink")
            ? d.height() + 16 - 2
            : d.outerHeight() - 2;
        });
    }),
    a.components.docReady.push(a.Util.headerSticky),
    (a.Util.imageBG = function () {
      var a = l(".bg-image");
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.parent(),
            i = a.data("overlay"),
            s = a.data("opacity"),
            t = a.children("img").attr("src"),
            o = !(void 0 === i || !i) && i,
            d = !(void 0 === s || !s) && s;
          void 0 !== t &&
            "" !== t &&
            (e.hasClass("has-bg-image") || e.addClass("has-bg-image"),
            o
              ? a.hasClass("overlay-" + o) ||
                (a.addClass("overlay"), a.addClass("overlay-" + o))
              : a.hasClass("overlay-fall") || a.addClass("overlay-fall"),
            d && a.addClass("overlay-opacity-" + d),
            a
              .css("background-image", 'url("' + t + '")')
              .addClass("bg-image-loaded"));
        });
    }),
    a.components.docReady.push(a.Util.imageBG),
    (a.Util.Ovm = function () {
      var a = l(".nk-ovm"),
        e = l(".nk-ovm[class*=mask]");
      a.exists() &&
        a.each(function () {
          l(this).parent().hasClass("has-ovm") ||
            l(this).parent().addClass("has-ovm");
        }),
        e.exists() &&
          e.each(function () {
            l(this).parent().hasClass("has-mask") ||
              l(this).parent().addClass("has-mask");
          });
    }),
    a.components.docReady.push(a.Util.Ovm),
    (a.Util.progressBar = function () {
      var e = l("[data-percent]"),
        i = l("[data-point]");
      e.exists() &&
        e.each(function () {
          l(this).css("width", l(this).data("percent") + "%");
        }),
        i.exists() &&
          i.each(function () {
            l(this).css("left", l(this).data("point") + "%");
          }),
        i.exists() &&
          !0 === a.getStatus.isRTL &&
          i.each(function () {
            l(this).css("right", l(this).data("point") + "%"),
              l(this).css("left", "auto");
          });
    }),
    a.components.docReady.push(a.Util.progressBar),
    (a.Util.inputAnimate = function () {
      var a = l(".input-line");
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.val(),
            i = "input-focused";
          e && a.parent().addClass(i),
            a.on("focus", function () {
              l(this).parent().addClass(i);
            }),
            a.on("blur", function () {
              l(this).parent().removeClass(i),
                l(this).val() && l(this).parent().addClass(i);
            });
        });
    }),
    a.components.docReady.push(a.Util.inputAnimate),
    (a.Util.toggler = function () {
      var a = ".toggle-tigger";
      l(a).exists() &&
        t.on("click", a, function (e) {
          var i = l(this);
          l(a).not(i).removeClass("active"),
            l(".toggle-class").not(i.parent().children()).removeClass("active"),
            i
              .toggleClass("active")
              .parent()
              .find(".toggle-class")
              .toggleClass("active"),
            e.preventDefault();
        }),
        t.on("click", "body", function (e) {
          var i = l(a),
            s = l(".toggle-class");
          s.is(e.target) ||
            0 !== s.has(e.target).length ||
            i.is(e.target) ||
            0 !== i.has(e.target).length ||
            (s.removeClass("active"), i.removeClass("active"));
        });
    }),
    a.components.docReady.push(a.Util.toggler),
    (a.Util.accordionActive = function () {
      var a = l(".accordion-item"),
        e = l(".accordion-title");
      a.exists() &&
        a.each(function () {
          var a = l(this);
          a.find(".accordion-title").hasClass("collapsed")
            ? a.removeClass("current")
            : a.addClass("current");
        }),
        e.exists() &&
          e.on("click", function () {
            var a = l(this);
            a.parent().siblings().removeClass("current"),
              a.parent().addClass("current");
          });
    }),
    a.components.docReady.push(a.Util.accordionActive),
    (a.Util.scrollAnimation = function () {
      var a = l(".animated");
      l().waypoint &&
        a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.data("animate"),
            i = a.data("duration"),
            s = a.data("delay");
          a.waypoint(
            function () {
              a.addClass("animated " + e).css("visibility", "visible"),
                i && a.css("animation-duration", i + "s"),
                s && a.css("animation-delay", s + "s");
            },
            { offset: "95%" }
          );
        });
    }),
    a.components.winLoad.push(a.Util.scrollAnimation),
    (a.MainMenu = function () {
      var a = l(".navbar-toggle"),
        e = l(".header-navbar"),
        i = l(".header-navbar-classic"),
        o = l(".menu-toggle"),
        c = l(".menu-link"),
        r = {
          Overlay: function () {
            e.exists() && e.append('<div class="header-navbar-overlay"></div>');
          },
          navToggle: function () {
            /**
             * Below function is commented out because handling toggle with jquery
             * here won't reflect on the dom as we're using react so we handle that in Header
             * component
             */
            //   a.exists() &&
            //   a.on("click", function (a) {
            //     var e = l(this),
            //     s = e.data("menu-toggle");
            //     e.toggleClass("navbar-active"),
            //       i.exists()
            //         ? (l("#" + s)
            //             .slideToggle()
            //             .toggleClass("menu-shown"))
            //         : l("#" + s)
            //             .parent()
            //             .toggleClass("menu-shown"),
            //       a.preventDefault();
            //   });
          },
          navClose: function () {
            l(".header-navbar-overlay").on("click", function () {
              a.removeClass("navbar-active"), e.removeClass("menu-shown");
            }),
              c.on("click", function (i) {
                l(this).hasClass("menu-toggle") ||
                  (a.removeClass("navbar-active"), e.removeClass("menu-shown"));
              }),
              t.on("click", "body", function (l) {
                !o.is(l.target) &&
                  0 === o.has(l.target).length &&
                  !d.is(l.target) &&
                  0 === d.has(l.target).length &&
                  s.width() < 992 &&
                  (a.removeClass("navbar-active"),
                  i.find(".header-menu").slideUp(),
                  e.removeClass("menu-shown"));
              });
          },
          menuToggle: function () {
            o.exists() &&
              o.on("click", function (a) {
                var e = l(this).parent();
                s.width() < 992 &&
                  (e.children(".menu-drop").slideToggle(400),
                  e.siblings().children(".menu-drop").slideUp(400),
                  e.toggleClass("open-nav"),
                  e.siblings().removeClass("open-nav")),
                  a.preventDefault();
              });
          },
          mobileNav: function () {
            s.width() < 992
              ? e.delay(500).addClass("menu-mobile")
              : (e.delay(500).removeClass("menu-mobile"),
                e.removeClass("menu-shown"));
          },
          currentPage: function () {
            c.exists() &&
              c.each(function () {
                n === this.href &&
                  "" !== m[1] &&
                  l(this)
                    .closest("li")
                    .addClass("active")
                    .parent()
                    .closest("li")
                    .addClass("active");
              });
          },
        };
      r.Overlay(),
        r.navToggle(),
        r.navClose(),
        r.menuToggle(),
        r.mobileNav(),
        r.currentPage(),
        s.on("resize", function () {
          r.mobileNav();
        });
    }),
    a.components.docReady.push(a.MainMenu),
    (a.OnePageScroll = function () {
      l('a.menu-link[href*="#"]:not([href="#"])').on("click", function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var a = this.hash,
            e = !!this.hash.slice(1) && l("[name=" + this.hash.slice(1) + "]"),
            i = a.length ? l(a) : e;
          if (i.length)
            return (
              l(".navbar-toggle").removeClass("active"),
              l(".header-navbar").removeClass("menu-shown"),
              l("html, body")
                .delay(150)
                .animate(
                  { scrollTop: i.offset().top - c },
                  1e3,
                  "easeInOutExpo"
                ),
              !1
            );
        }
      });
    }),
    a.components.docReady.push(a.OnePageScroll),
    (a.scrollAct = function () {
      o.scrollspy({ target: "#header-menu", offset: c + 2 });
    }),
    a.components.docReady.push(a.scrollAct),
    (a.Plugins = {}),
    (a.Plugins.countdown = function () {
      var a = l(".countdown");
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.attr("data-date"),
            i = a.data("day-text") ? a.data("day-text") : "Days",
            s = a.data("hour-text") ? a.data("hour-text") : "Hours",
            t = a.data("min-text") ? a.data("min-text") : "Min",
            o = a.data("sec-text") ? a.data("sec-text") : "Sec";
          a.countdown(e).on("update.countdown", function (a) {
            l(this).html(
              a.strftime(
                '<div class="countdown-item"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">' +
                  i +
                  '</span></div><div class="countdown-item"><span class="countdown-time">%H</span><span class="countdown-text">' +
                  s +
                  '</span></div><div class="countdown-item"><span class="countdown-time">%M</span><span class="countdown-text">' +
                  t +
                  '</span></div><div class="countdown-item"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">' +
                  o +
                  "</span></div>"
              )
            );
          });
        });
    }),
    a.components.docReady.push(a.Plugins.countdown),
    (a.Plugins.carousel = function () {
      var e = l(".has-carousel");
      function i(a) {
        var e = l(a);
        !e.hasClass("blank-added") && s.width() > 575
          ? (e.trigger("add.owl.carousel", ['<div class="item-blank"></div>']),
            e.addClass("blank-added").removeClass("blank-removed"),
            e.trigger("refresh.owl.carousel"))
          : !e.hasClass("blank-removed") &&
            s.width() < 576 &&
            e.hasClass("blank-added") &&
            (e.trigger("remove.owl.carousel", -1),
            e.addClass("blank-removed").removeClass("blank-added"),
            e.trigger("refresh.owl.carousel"));
      }
      e.exists() &&
        e.each(function () {
          var e = l(this),
            t = e.data("items") ? e.data("items") : 4,
            o = e.data("items-desk") ? e.data("items-desk") : t,
            d = e.data("items-tab-l")
              ? e.data("items-tab-l")
              : t > 3
              ? t - 1
              : t,
            n = e.data("items-tab-p")
              ? e.data("items-tab-p")
              : d > 2
              ? d - 1
              : d,
            c = e.data("items-mobile")
              ? e.data("items-mobile")
              : n > 1
              ? n - 1
              : n,
            m = e.data("items-mobile-s") ? e.data("items-mobile-s") : c,
            r = e.data("timeout") ? e.data("timeout") : 6e3,
            h = !!e.data("auto") && e.data("auto"),
            g = !!e.data("loop") && e.data("loop"),
            v = !!e.data("dots") && e.data("dots"),
            p = !!e.data("custom-dots") && "." + e.data("custom-dots"),
            u = !!e.data("navs") && e.data("navs"),
            f = !!e.data("center") && e.data("center"),
            b = e.data("margin") ? e.data("margin") : 30,
            x = !!e.data("animate-out") && e.data("animate-out"),
            k = !!e.data("animate-in") && e.data("animate-in");
          t <= 1 && (t = o = d = n = c = 1),
            e.addClass("owl-carousel").owlCarousel({
              navText: ["", ""],
              items: t,
              loop: g,
              nav: u,
              dots: v,
              dotsContainer: p,
              margin: b,
              center: f,
              autoplay: h,
              autoplayTimeout: r,
              autoplaySpeed: 600,
              animateOut: x,
              animateIn: k,
              rtl: a.getStatus.isRTL,
              responsive: {
                0: { items: m },
                576: { items: c },
                768: { items: n },
                992: { items: d },
                1200: { items: t },
                1600: { items: o },
              },
              onInitialized: function () {
                l().waypoint && Waypoint.refreshAll();
              },
            }),
            !0 === e.data("blank") &&
              (i(e),
              s.on("resize", function () {
                i(e);
              }));
        });
    }),
    a.components.docReady.push(a.Plugins.carousel),
    (a.Plugins.select2 = function () {
      var a = l(".select");
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.data("select2-theme") ? a.data("select2-theme") : "bordered",
            i = a.data("select2-placehold")
              ? a.data("select2-placehold")
              : "Select an option";
          a.select2({ placeholder: i, theme: "default select-" + e });
        });
    }),
    a.components.docReady.push(a.Plugins.select2),
    (a.Plugins.validform = function () {
      var a = l(".form-validate");
      if (!l().validate)
        return console.log("jQuery Form Validate not Defined."), !0;
      a.exists() &&
        a.each(function () {
          var a = l(this);
          a.validate(),
            a.find(".select").on("change", function () {
              l(this).valid();
            });
        });
    }),
    a.components.docReady.push(a.Plugins.validform),
    (a.Plugins.submitform = function () {
      var a = l(".nk-form-submit");
      if (!l().validate && !l().ajaxSubmit)
        return console.log("jQuery Form and Form Validate not Defined."), !0;
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.find(".form-results");
          a.validate({
            ignore: [],
            invalidHandler: function () {
              e.slideUp(400);
            },
            submitHandler: function (a) {
              e.slideUp(400),
                l(a).ajaxSubmit({
                  target: e,
                  dataType: "json",
                  success: function (i) {
                    var s =
                      "error" === i.result ? "alert-danger" : "alert-success";
                    e
                      .removeClass("alert-danger alert-success")
                      .addClass("alert " + s)
                      .html(i.message)
                      .slideDown(400),
                      "error" !== i.result &&
                        l(a)
                          .clearForm()
                          .find("input")
                          .removeClass("input-focused");
                  },
                });
            },
          }),
            a.find(".select").on("change", function () {
              l(this).valid();
            });
        });
    }),
    a.components.docReady.push(a.Plugins.submitform),
    (a.demoPanel = function () {
      var e = a.getStatus.isRTL ? "./../images" : "./images",
        i = a.getStatus.isRTL ? "../landing/rtl/" : "./landing/",
        s = a.getStatus.isRTL ? "../../ico-user/" : "../ico-user/",
        t = a.getStatus.isRTL ? "../" : "./rtl/",
        d = a.getStatus.isRTL ? "LTR" : "RTL";
      o.append(
        '<div class="demo-panel"><div class="demo-list"> <a class="demo-themes" title="See All Demo" href="javascript:void(0)"> <img src="' +
          e +
          '/demo/demo-icon.png"> </a> <a class="demo-mode" href="' +
          t +
          '">' +
          d +
          ' Mode</a> <a class="demo-cart" target="_blank" href="http://bit.ly/2uPFhHX"> <i class="fa fa-shopping-cart"> </i> </a> <a class="demo-wp" target="_blank" href="http://bit.ly/2JnGx8h"> <i class="fab fa-wordpress"> </i> <span>WP</span> </a></div><div class="demo-content"><div class="demo-content-bg"></div> <a class="demo-close" href="javascript:void(0)">×</a><div class="demo-content-wrap"><ul class="nav tab-nav tab-nav-btn tab-nav-btn-s2"><li><a class="active" data-toggle="tab" href="#demo-showcase">Demo Showcase</a></li><li><a data-toggle="tab" href="#demo-page-list">All Pages</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="demo-showcase"><div class="container-fluid"><div class="row demo-item-list"><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-azalea.html"> <img src="' +
          e +
          '/demo/demo-azalea.jpg" alt=""> <span class="demo-badge demo-badge-hot">v1.6</span> </a></div><div class="demo-item-text"> <a href="./index-azalea.html"><h5 class="title title-sm">Azalea Dark <small>Landing V17</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-azalea-multi.html"> <img src="' +
          e +
          '/demo/demo-azalea-multi.jpg" alt=""> <span class="demo-badge demo-badge-hot">v1.6</span> </a></div><div class="demo-item-text"> <a href="./index-azalea-multi.html"><h5 class="title title-sm">Azalea Multi <small>Landing V16</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-gentian-pro.html"> <img src="' +
          e +
          '/demo/demo-gentian-pro.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="./index-gentian-pro.html"><h5 class="title title-sm">Gentian Pro <small>Landing V15</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          s +
          '"> <img src="' +
          e +
          '/demo/demo-user.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="' +
          s +
          '"><h5 class="title title-sm">User Center <small>Free Dashboard</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-gentian.html"> <img src="' +
          e +
          '/demo/demo-gentian.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="./index-gentian.html"><h5 class="title title-sm">Gentian Dark<small>Landing V14</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-gentian-multi.html"> <img src="' +
          e +
          '/demo/demo-gentian-multi.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="./index-gentian-multi.html"><h5 class="title title-sm">Gentian Multi<small>Landing V13</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-zinnia-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-zinnia.jpg" alt=""> <span class="demo-badge">v1.4.1</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-zinnia-particle-animate.html"><h5 class="title title-sm">Zinnia Pro<small>Landing V12</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-salvia-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-salvia.jpg" alt=""> <span class="demo-badge">v1.4</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-salvia-particle-animate.html"><h5 class="title title-sm">Salvia Pro<small>Landing V11</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-lungwort-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-lungwort.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-lungwort-particle-animate.html"><h5 class="title title-sm">Lungwort Dark<small>Landing V10</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-jasmine-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-jasmine.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-jasmine-particle-animate.html"><h5 class="title title-sm">Jasmine Light<small>Landing V9</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-lobelia-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-lobelia.jpg" alt=""> <span class="demo-badge">v1.2.3</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-lobelia-particle-animate.html"><h5 class="title title-sm">Lobelia Dark<small>Landing V8</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-muscari-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-muscari.jpg" alt=""> <span class="demo-badge">v1.2.1</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-muscari-particle-animate.html"><h5 class="title title-sm">Muscari Pro<small>Landing V7</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-lavender-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-lavender.jpg" alt=""> <span class="demo-badge">v1.2</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-lavender-particle-animate.html"><h5 class="title title-sm">Lavender Pro<small>Landing V6</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-azure-light-pro-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-azure-pro.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-azure-light-pro-particle-animate.html"><h5 class="title title-sm">Azure Pro<small>Landing V5</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-azure-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-azure.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-azure-particle-animate.html"><h5 class="title title-sm">Azure Dark<small>Landing V4</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-dark-pro-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-dark-pro.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-dark-pro-particle-animate.html"><h5 class="title title-sm">Dark Pro<small>Landing V3</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-light-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-pro.jpg" alt=""> <span class="demo-badge">v1.0</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-light-particle-animate.html"><h5 class="title title-sm">Light<small>Landing V2</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' +
          i +
          'index-dark-particle-animate.html"> <img src="' +
          e +
          '/demo/demo-dark.jpg" alt=""> <span class="demo-badge">v1.0</span> </a></div><div class="demo-item-text"> <a href="' +
          i +
          'index-dark-particle-animate.html"><h5 class="title title-sm">Dark <small>Landing V1</small></h5></a></div></div></div></div></div></div><div class="tab-pane fade" id="demo-page-list"><div class="container-fluid"><div class="demo-page-list-wrap"><h3 class="title title-md tc-alternet">Landing Pages</h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-azalea.html">Azalea Dark <span class="badge badge-xs badge-success">v1.6</span></a></li><li><a href="./index-azalea-multi.html">Azalea Multi <span class="badge badge-xs badge-success">v1.6</span></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-gentian.html">Gentian Dark <span class="badge badge-xs badge-dark">v1.5</span></a></li><li><a href="./index-gentian-pro.html">Gentian Pro <span class="badge badge-xs badge-dark">v1.5</span></a></li><li><a href="./index-gentian-multi.html">Gentian Multi <span class="badge badge-xs badge-danger">HOT</span></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-zinnia-particle-animate.html">Zinnia Pro <small>v.1.4.1</small></a></li><li><a href="' +
          i +
          'index-salvia-particle-animate.html">Salvia Pro <small>v.1.4</small></a></li><li><a href="' +
          i +
          'index-jasmine-particle-animate.html">Jasmine Light <small>v1.3</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-lungwort-particle-animate.html">Lungwort Dark <small>v1.3</small></a></li><li><a href="' +
          i +
          'index-lobelia-particle-animate.html">Lobelia Dark <small>v1.2.3</small></a></li><li><a href="' +
          i +
          'index-muscari-particle-animate.html">Muscari Pro <small>v1.2.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-lavender-particle-animate.html">Lavender Pro <small>v1.2</small></a></li><li><a href="' +
          i +
          'index-azure-light-pro-particle-animate.html">Azure Pro <small>v.1.1</small></a></li><li><a href="' +
          i +
          'index-azure-particle-animate.html">Azure Dark <small>v.1.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-dark-pro-particle-animate.html">Dark Pro <small>v.1.1</small></a></li><li><a href="' +
          i +
          'index-dark-particle-animate.html">Dark <small>v.1.0</small></a></li><li><a href="' +
          i +
          'index-light-particle-animate.html">Light <small>v.1.0</small></a></li></ul></div></div><div class="gap-4x"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Landing Pages<div class="badge badge-xs badge-info ml-3">Non Animate Version</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-azalea-woa.html">Azalea Dark <small>v.1.6</small></a></li><li><a href="./index-azalea-multi-woa.html">Azalea Multi <small>v.1.6</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-gentian-woa.html">Gentian Dark <small>v.1.5</small></a></li><li><a href="./index-gentian-pro-woa.html">Gentian Pro <small>v.1.5</small></a></li><li><a href="./index-gentian-multi-woa.html">Gentian Multi <small>v.1.5</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-zinnia-particle.html">Zinnia Pro <small>v.1.4.1</small></a></li><li><a href="' +
          i +
          'index-salvia-particle.html">Salvia Pro <small>v.1.4</small></a></li><li><a href="' +
          i +
          'index-jasmine-particle.html">Jasmine Light <small>v.1.3</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-lungwort-particle.html">Lungwort Dark <small>v.1.3</small></a></li><li><a href="' +
          i +
          'index-lobelia-particle.html">Lobelia Dark <small>v.1.2.3</small></a></li><li><a href="' +
          i +
          'index-muscari-particle.html">Muscari Pro <small>v1.2.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-lavender-particle.html">Lavender Pro <small>v1.2</small></a></li><li><a href="' +
          i +
          'index-azure-light-pro-particle.html">Azure Pro <small>v.1.1</small></a></li><li><a href="' +
          i +
          'index-azure-particle.html">Azure Dark <small>v.1.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'index-dark-pro-particle.html">Dark Pro <small>v.1.1</small></a></li><li><a href="' +
          i +
          'index-dark-particle.html">Dark <small>v.1.0</small></a></li><li><a href="' +
          i +
          'index-light-particle.html">Light <small>v.1.0</small></a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Other Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./page-about.html">About Us</a></li><li><a href="./page-team.html">Our Teams</a></li><li><a href="./page-wallets.html">Wallets</a></li><li><a href="./page-features.html">Features</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./page-token-sale.html">Token Sale</a></li><li><a href="./page-roadmap.html">Roadmap</a></li><li><a href="./page-faq.html">FAQs</a></li><li><a href="./page-contact.html">Contact</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./page-login.html">Login - V1</a></li><li><a href="./page-login-v2.html">Login - V2</a></li><li><a href="./page-register.html">Register - V1</a></li><li><a href="./page-register-v2.html">Register - V2</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./page-reset.html">Reset - V1</a></li><li><a href="./page-reset-v2.html">Reset - V2</a></li><li><a href="./_blank.html">Blank Page</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./blog-3clmn.html">Blog 3 Column</a></li><li><a href="./blog-sidebar-right.html">Blog Sidebar - Left</a></li><li><a href="./blog-sidebar-left.html">Blog Sidebar - Right</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./blog-details.html">Blog Single - Sidebar</a></li><li><a href="./blog-details-full.html">Blog Single - Full</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Elements Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-alert.html">Alerts</a></li><li><a href="./element-button.html">Buttons</a></li><li><a href="./element-content.html">Contents</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-table.html">Tables</a></li><li><a href="./element-video.html">Videos</a></li><li><a href="./element-typography.html">Typogrphy</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-progress-bar.html">Progress Bar</a></li><li><a href="./element-form.html">Form Elements</a></li><li><a href="./element-grid.html">Grids</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-color.html">Colors</a></li><li><a href="./element-modal.html">Modals</a></li><li><a href="./element-notification.html">Notification</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-chart.html">Charts</a></li><li><a href="./element-countdown.html">Countdown</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./element-tab.html">Tabs</a></li><li><a href="./element-accordion.html">Accordions</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Blocks Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-navbar.html">Navbar</a></li><li><a href="./block-footer.html">Footer</a></li><li><a href="./block-team.html">Team</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-page-header.html">Page Header</a></li><li><a href="./block-banner.html">Banner<div class="badge badge-xs badge-danger">HOT</div></a></li><li><a href="./block-faq.html">FAQs</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-subscribe.html">Subscribe</a></li><li><a href="./block-partner.html">Partners</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-roadmap.html">Roadmaps</a></li><li><a href="./block-token-info.html">Token Info</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-feature-card.html">Features Card</a></li><li><a href="./block-feature-panel.html">Features Panel</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./block-ath.html">Login / Register</a></li><li><a href="./block-contact.html">Contact</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Other Pages<div class="badge badge-xs badge-danger ml-3">Before 1.4</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'blog-archive-light.html">Blog List - Light</a></li><li><a href="' +
          i +
          'blog-archive-dark.html">Blog List - Dark</a></li><li><a href="' +
          i +
          'blog-archive-dark-pro.html">Blog List - Dark Pro</a></li><li><a href="' +
          i +
          'blog-archive-azure.html">Blog List - Azure</a></li><li><a href="' +
          i +
          'blog-archive-azure-light-pro.html">Blog List - Azure Pro</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'blog-single-light.html">Post/News - Light</a></li><li><a href="' +
          i +
          'blog-single-dark.html">Post/News - Dark</a></li><li><a href="' +
          i +
          'blog-single-dark-pro.html">Post/News - Dark Pro</a></li><li><a href="' +
          i +
          'blog-single-azure.html">Post/News - Azure</a></li><li><a href="' +
          i +
          'blog-single-azure-light-pro.html">Post/News - Azure Pro</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'login-light.html">Login - Light</a></li><li><a href="' +
          i +
          'login-dark.html">Login - Dark</a></li><li><a href="' +
          i +
          'signup-light.html">Signup - Light</a></li><li><a href="' +
          i +
          'signup-dark.html">Signup - Dark</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          'signup-azure.html">Login - Azure</a></li><li><a href="' +
          i +
          'signup-lavender.html">Login - Lavender</a></li><li><a href="' +
          i +
          'signup-lobelia.html">Login - Lobelia</a></li><li><a href="' +
          i +
          'signup-muscari.html">Login - Muscari</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' +
          i +
          '404-azure.html">404 - Azure</a></li><li><a href="' +
          i +
          '404-light.html">404 - Light</a></li><li><a href="' +
          i +
          '404-dark.html">404 - Dark</a></li></ul></div></div></div></div></div></div></div></div>'
      );
      var n = l(".demo-themes,.demo-close"),
        c = l(".demo-content"),
        m = l(".demo-color-toggle"),
        r = l(".demo-color"),
        h = l(".color-trigger");
      c.length > 0 &&
        n.on("click", function () {
          c.toggleClass("demo-active").css("display", "block"),
            o.toggleClass("shown-preview");
        }),
        m.length > 0 &&
          m.on("click", function () {
            r.slideToggle("slow");
          }),
        h.length > 0 &&
          h.on("click", function () {
            var a = l(this).attr("title");
            return l("#theming").attr("href", "assets/css/" + a + ".css"), !1;
          });
    }),
    a.components.docReady.push(a.demoPanel),
    (a.promoPanel = function () {
      var e = a.getStatus.isRTL ? "../images" : "./images";
      o.append(
        '<div class="promo-content"><a href="#" class="promo-close"><em class="ti ti-close"></em></a><a target="_blank" href="http://bit.ly/2UzfJv2" class="promo-content-wrap"><div class="promo-content-img"><img src="' +
          e +
          '/demo/promo-large.jpg" alt="TokenLite"></div><div class="promo-content-text"><h5>Are you looking for <br><span>Functional System</span> <br> for your ICO token sale?</h5><p>Check out TokenLite <br> on CodeCanyon!</p></div> </a></div> <a target="_blank" href="http://bit.ly/2UzfJv2" class="promo-trigger"><div class="promo-trigger-img"><img src="' +
          e +
          '/demo/promo-small.png" alt="TokenLite"></div><div class="promo-trigger-text">Looking for Functional<br>ICO/STO Dashboard?</div></a>'
      );
      var i = l(".promo-trigger"),
        s = l(".promo-content"),
        t = l(".promo-close");
      t.length > 0 &&
        t.on("click", function () {
          var a = Cookies.get("twz-offer");
          return (
            s.removeClass("active"),
            i.addClass("active"),
            null === a &&
              Cookies.set("twz-offer", "true", { expires: 1, path: "" }),
            !1
          );
        }),
        null === Cookies.get("twz-offer")
          ? s.addClass("active")
          : i.addClass("active");
    }),
    a.components.winLoad.push(a.promoPanel),
    (a.Plugins.parallax = function () {
      var a = l("[data-parallax]");
      a.exists() &&
        a.each(function () {
          var a = l(this);
          !0 === a.data("parallax") &&
            (a.addClass("plx-bg"), a.parent().addClass("has-plx"));
        });
    }),
    a.components.docReady.push(a.Plugins.parallax),
    (a.Plugins.popup = function () {
      var a = l(".content-popup"),
        e = l(".video-popup"),
        i = l(".image-popup"),
        s = {
          content_popup: function () {
            a.exists() &&
              a.each(function () {
                l(this).magnificPopup({
                  type: "inline",
                  preloader: !0,
                  removalDelay: 400,
                  mainClass: "mfp-fade content-popup",
                });
              });
          },
          video_popup: function () {
            e.exists() &&
              e.each(function () {
                l(this).magnificPopup({
                  type: "iframe",
                  removalDelay: 160,
                  preloader: !0,
                  fixedContentPos: !1,
                  callbacks: {
                    beforeOpen: function () {
                      (this.st.image.markup = this.st.image.markup.replace(
                        "mfp-figure",
                        "mfp-figure mfp-with-anim"
                      )),
                        (this.st.mainClass = this.st.el.attr("data-effect"));
                    },
                  },
                });
              });
          },
          image_popup: function () {
            i.exists() &&
              i.each(function () {
                l(this).magnificPopup({
                  type: "image",
                  mainClass: "mfp-fade image-popup",
                });
              });
          },
        };
      s.content_popup(), s.video_popup(), s.image_popup();
    }),
    a.components.docReady.push(a.Plugins.popup),
    (a.Plugins.particles = function () {
      var a = l(".particles-bg");
      a.exists() &&
        a.each(function () {
          var a = l(this),
            e = a.attr("id"),
            i = a.data("default-color") ? a.data("default-color") : "#fff",
            s = a.data("shape-stroke-color")
              ? a.data("shape-stroke-color")
              : "#fff",
            t = a.data("line-linked-color")
              ? a.data("line-linked-color")
              : "#fff";
          particlesJS(e, {
            particles: {
              number: { value: 40, density: { enable: !0, value_area: 800 } },
              color: { value: i },
              shape: {
                type: "circle",
                opacity: 0.1,
                stroke: { width: 0, color: s },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.1,
                random: !1,
                anim: { enable: !1, speed: 1, opacity_min: 0.12, sync: !1 },
              },
              size: {
                value: 6,
                random: !0,
                anim: { enable: !1, speed: 40, size_min: 0.08, sync: !1 },
              },
              line_linked: {
                enable: !0,
                distance: 150,
                color: t,
                opacity: 0.2,
                width: 1.3,
              },
              move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !1, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: !0, mode: "repulse" },
                onclick: { enable: !0, mode: "push" },
                resize: !0,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: !0,
          });
        });
    }),
    a.components.docReady.push(a.Plugins.particles),
    a
  );
})
/*! END @iO */
