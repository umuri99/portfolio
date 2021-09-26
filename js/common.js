var currentWidth = window.innerWidth;
var spWidth = 500;

// -----------------------------------
// Slidebars
// Version 0.10.3
// http://plugins.adchsm.me/slidebars/
//
// Written by Adam Smith
// http://www.adchsm.me/
//
// Released under MIT License
// http://plugins.adchsm.me/slidebars/license.txt
//
// ---------------------
// Index of Slidebars.js
//
// 001 - Default Settings
// 002 - Feature Detection
// 003 - User Agents
// 004 - Setup
// 005 - Animation
// 006 - Operations
// 007 - API
// 008 - User Input

(function (a) { a.slidebars = function (b) { a(".chapter").click(function () { l(); a("#panel-btn-icon").toggleClass("close") }); var x = a.extend({ siteClose: true, scrollLock: false, disableOver: false, hideControlClasses: false }, b); var v = document.createElement("div").style, t = false, k = false; if (v.MozTransition === "" || v.WebkitTransition === "" || v.OTransition === "" || v.transition === "") { t = true } if (v.MozTransform === "" || v.WebkitTransform === "" || v.OTransform === "" || v.transform === "") { k = true } var s = navigator.userAgent, y = false, c = false; if (/Android/.test(s)) { y = s.substr(s.indexOf("Android") + 8, 3) } else { if (/(iPhone|iPod|iPad)/.test(s)) { c = s.substr(s.indexOf("OS ") + 3, 3).replace("_", ".") } } if (y && y < 3 || c && c < 5) { a("html").addClass("sb-static") } var q = a("#sb-site, .sb-site-container"); if (a(".sb-left").length) { var e = a(".sb-left"), g = false } if (a(".sb-right").length) { var h = a(".sb-right"), j = false } var r = false, z = a(window).width(), w = a(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"), m = a(".sb-slide"); function o() { if (!x.disableOver || (typeof x.disableOver === "number" && x.disableOver >= z)) { r = true; a("html").addClass("sb-init"); if (x.hideControlClasses) { w.removeClass("sb-hide") } f() } else { if (typeof x.disableOver === "number" && x.disableOver < z) { r = false; a("html").removeClass("sb-init"); if (x.hideControlClasses) { w.addClass("sb-hide") } q.css("minHeight", ""); if (g || j) { l() } } } } o(); function f() { q.css("minHeight", ""); var B = parseInt(q.css("height"), 10), A = parseInt(a("html").css("height"), 10); if (B < A) { q.css("minHeight", a("html").css("height")) } if (e && e.hasClass("sb-width-custom")) { e.css("width", e.attr("data-sb-width")) } if (h && h.hasClass("sb-width-custom")) { h.css("width", h.attr("data-sb-width")) } if (e && (e.hasClass("sb-style-push") || e.hasClass("sb-style-overlay"))) { e.css("marginLeft", "-" + e.css("width")) } if (h && (h.hasClass("sb-style-push") || h.hasClass("sb-style-overlay"))) { h.css("marginRight", "-" + h.css("width")) } if (x.scrollLock) { a("html").addClass("sb-scroll-lock") } } a(window).resize(function () { var A = a(window).width(); if (z !== A) { z = A; o(); if (g) { i("left") } if (j) { i("right") } } }); var u; if (t && k) { u = "translate"; if (y && y < 4.4) { u = "side" } } else { u = "jQuery" } function d(B, E, D) { var A; if (B.hasClass("sb-style-push")) { A = q.add(B).add(m) } else { if (B.hasClass("sb-style-overlay")) { A = B } else { A = q.add(m) } } if (u === "translate") { if (E === "0px") { F() } else { A.css("transform", "translate( " + E + " )") } } else { if (u === "side") { if (E === "0px") { F() } else { if (E[0] === "-") { E = E.substr(1) } A.css(D, "0px"); setTimeout(function () { A.css(D, E) }, 1) } } else { if (u === "jQuery") { if (E[0] === "-") { E = E.substr(1) } var C = {}; C[D] = E; A.stop().animate(C, 400) } } } function F() { A.removeAttr("style"); f() } } function i(A) { if (A === "left" && e && j || A === "right" && h && g) { l(); setTimeout(B, 400) } else { B() } function B() { if (r && A === "left" && e) { a("html").addClass("sb-active sb-active-left"); e.addClass("sb-active"); d(e, e.css("width"), "left"); setTimeout(function () { g = true }, 400) } else { if (r && A === "right" && h) { a("html").addClass("sb-active sb-active-right"); h.addClass("sb-active"); d(h, "-" + h.css("width"), "right"); setTimeout(function () { j = true }, 400) } } } } function l(A, B) { if (g || j) { if (g) { d(e, "0px", "left"); g = false } if (j) { d(h, "0px", "right"); j = false } setTimeout(function () { a("html").removeClass("sb-active sb-active-left sb-active-right"); if (e) { e.removeClass("sb-active") } if (h) { h.removeClass("sb-active") } if (typeof A !== "undefined") { if (typeof B === undefined) { B = "_self" } window.open(A, B) } }, 400) } } function n(A) { if (A === "left" && e) { if (!g) { i("left") } else { l() } } if (A === "right" && h) { if (!j) { i("right") } else { l() } } } this.slidebars = { open: i, close: l, toggle: n, init: function () { return r }, active: function (A) { if (A === "left" && e) { return g } if (A === "right" && h) { return j } }, destroy: function (A) { if (A === "left" && e) { if (g) { l() } setTimeout(function () { e.remove(); e = false }, 400) } if (A === "right" && h) { if (j) { l() } setTimeout(function () { h.remove(); h = false }, 400) } } }; function p(B, A) { B.stopPropagation(); B.preventDefault(); if (B.type === "touchend") { A.off("click") } } a(".sb-toggle-left").on("touchend click", function (A) { p(A, a(this)); n("left") }); a(".sb-toggle-right").on("touchend click", function (A) { p(A, a(this)); n("right"); a("#panel").slideToggle(200); a("#panel-btn-icon").toggleClass("close") }); a(".sb-open-left").on("touchend click", function (A) { p(A, a(this)); i("left") }); a(".sb-open-right").on("touchend click", function (A) { p(A, a(this)); i("right") }); a(".sb-close").on("touchend click", function (C) { if (a(this).is("a") || a(this).children().is("a")) { if (C.type === "click") { C.stopPropagation(); C.preventDefault(); var B = (a(this).is("a") ? a(this) : a(this).find("a")), A = B.attr("href"), D = (B.attr("target") ? B.attr("target") : "_self"); l(A, D) } } else { p(C, a(this)); l() } }); q.on("touchend click", function (A) { if (x.siteClose && (g || j)) { p(A, a(this)); l(); a("#panel").slideToggle(200); a("#panel-btn-icon").toggleClass("close") } }) } })(jQuery);


/*--------------------------------------------------------------------------*
 *  footerFixed.js
 *  MIT-style license.
 *  2007 Kazuma Nishihata [to-R]
 *  http://blog.webcreativepark.net
 *--------------------------------------------------------------------------*/
new function () { var d = "footer"; function a() { var g = document.getElementsByTagName("body")[0].clientHeight; document.getElementById(d).style.top = "0px"; var h = document.getElementById(d).offsetTop; var e = document.getElementById(d).offsetHeight; if (window.innerHeight) { var f = window.innerHeight } else { if (document.documentElement && document.documentElement.clientHeight != 0) { var f = document.documentElement.clientHeight } } if (h + e < f) { document.getElementById(d).style.position = "relative"; document.getElementById(d).style.top = (f - e - h - 1) + "px" } } function b(h) { var i = document.createElement("div"); var g = document.createTextNode("S"); i.appendChild(g); i.style.visibility = "hidden"; i.style.position = "absolute"; i.style.top = "0"; document.body.appendChild(i); var f = i.offsetHeight; function j() { if (f != i.offsetHeight) { h(); f = i.offsetHeight } } setInterval(j, 1000) } function c(i, g, f) { try { i.addEventListener(g, f, false) } catch (h) { i.attachEvent("on" + g, f) } } c(window, "load", a); c(window, "load", function () { b(a) }); c(window, "resize", a) };

/*
* 	exScrollEvent 1.0.0 - jQuery plugin
*	written by Cyokodog
*
*	Copyright (c) 2009 Cyokodog (http://d.hatena.ne.jp/cyokodog/)
*	Dual licensed under the MIT (MIT-LICENSE.txt)
*	and GPL (GPL-LICENSE.txt) licenses.
*
*	Built for jQuery library
*	http://jquery.com
*
*/
(function (a) { a.ex = a.ex || {}; a.ex.scrollEvent = function (d, b) { var e = this; if (typeof b == "function") { b = { callback: b } } var f = e.config = a.extend({}, a.ex.scrollEvent.defaults, b, { target: d }); f.status = 0; f.scroll = e.getPos(); f.target.scroll(function (c) { if (e.isMove()) { f.status = (f.status == 0 ? 1 : (f.status == 1 ? 2 : f.status)); f.callback(c, f) } if (f.tm) { clearTimeout(f.tm) } f.tm = setTimeout(function () { e.isMove(); f.status = 0; f.callback(c, f) }, f.delay) }) }; a.extend(a.ex.scrollEvent.prototype, { isMove: function () { var e = this, g = e.config; var f = e.getPos(); var b = (f.top != g.scroll.top); var d = (f.left != g.scroll.left); if (b || d) { g.scrollY = b; g.scrollX = d; g.prevScroll = g.scroll; g.scroll = f; return true } return false }, getPos: function () { var b = this, d = b.config; return { top: d.target.scrollTop(), left: d.target.scrollLeft() } } }); a.ex.scrollEvent.defaults = { delay: 100 }; a.fn.exScrollEvent = function (b) { new a.ex.scrollEvent(this, b); return this } })(jQuery);

/*--------------------------------------------------------------------------*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*--------------------------------------------------------------------------*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) {
  var e = -1, o = -1, n = function (t) { return parseFloat(t) || 0 }, a = function (e) { var o = 1, a = t(e), i = null, r = []; return a.each(function () { var e = t(this), a = e.offset().top - n(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a }), r }, i = function (e) {
    var o = {
      byRow: !0, property: "height", target: null, remove: !1
    }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
  }, r = t.fn.matchHeight = function (e) { var o = i(e); if (o.remove) { var n = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(n) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
    r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
      var s = i(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t("html").outerHeight(!0), u = h.parents().filter(":hidden"); return u.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
        var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
          display: o, "padding-top": "0",
          "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
        })
      }), l = a(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(l, function (e, o) {
        var a = t(o), i = 0; if (s.target) i = s.target.outerHeight(!1); else {
          if (s.byRow && a.length <= 1) return void a.css(s.property, ""); a.each(function () {
            var e = t(this), o = e.attr("style"), n = e.css("display"); "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"); var a = {
              display: n
            }; a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
          })
        } a.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px")) })
      }), u.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
        this
    }, r._applyDataApi = function () { var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), n = o.attr("data-mh") || o.attr("data-match-height"); n in e ? e[n] = e[n].add(o) : e[n] = o }), t.each(e, function () { this.matchHeight(!0) }) }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (n, a) {
      if (a && "resize" === a.type) {
        var i = t(window).width(); if (i === e) return; e = i;
      } n ? o === -1 && (o = setTimeout(function () { s(a), o = -1 }, r._throttle)) : s(a)
    }, t(r._applyDataApi); var h = t.fn.on ? "on" : "bind"; t(window)[h]("load", function (t) { r._update(!1, t) }), t(window)[h]("resize orientationchange", function (t) { r._update(!0, t) })
});


/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () { "use strict"; function t(t, e) { return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E" } function e(t) { if (t.srcset && !p && window.picturefill) { var e = window.picturefill._; t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } } function i(t) { for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));)r[e[1]] = e[2]; return r } function r(e, i, r) { var n = t(i || 1, r || 0); b.call(e, "src") !== n && h.call(e, "src", n) } function n(t, e) { t.naturalWidth ? e(t) : setTimeout(n, 100, t, e) } function c(t) { var c = i(t), o = t[l]; if (c["object-fit"] = c["object-fit"] || "fill", !o.img) { if ("fill" === c["object-fit"]) return; if (!o.skipTest && f && !c["object-position"]) return } if (!o.img) { o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try { s(t) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } } e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () { o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) { r(t, e.naturalWidth, e.naturalHeight) }) } function s(t) { var e = { get: function (e) { return t[l].img[e ? e : "src"] }, set: function (e, i) { return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e } }; Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", { get: function () { return e.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function () { return e.get("srcset") }, set: function (t) { return e.set(t, "srcset") } }) } function o() { function t(t, e) { return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t } d || (HTMLImageElement.prototype.getAttribute = function (e) { return b.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function (e, i) { return h.call(t(this, e), e, String(i)) }) } function a(t, e) { var i = !y && !t; if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var r = 0; r < t.length; r++)t[r][l] = t[r][l] || { skipTest: e.skipTest }, c(t[r]); i && (document.body.addEventListener("load", function (t) { "IMG" === t.target.tagName && a(t.target, { skipTest: e.skipTest }) }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, { skipTest: e.skipTest })) } var l = "fregante:object-fit-images", u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, g = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image, f = "object-fit" in g.style, d = "object-position" in g.style, m = "background-size" in g.style, p = "string" == typeof g.currentSrc, b = g.getAttribute, h = g.setAttribute, y = !1; return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a }();

window.addEventListener('load', function () {
  objectFitImages();
});

/*--------------------------------------------------------------------------*
* deSVG
* https://github.com/benhowdle89/deSVG
*--------------------------------------------------------------------------*/
(function () { var a = function (b, h) { h = h || false; var f, c, d = {}, g = function (l, n) { var m = new XMLHttpRequest(); m.open("GET", l, true); m.onload = function () { var q, o, s, p; q = m.responseXML; p = n.length; if (!q) { return } o = q.documentElement; s = o.querySelectorAll("path"); if (h) { for (var r = 0; r < s.length; r++) { s[r].removeAttribute("style") } } o.removeAttribute("xmlns:a"); while (p--) { k(n[p], o.cloneNode(true)) } }; m.send() }, k = function (n, m) { var l = n.id, o = n.getAttribute("class"); if (l) { m.id = l } if (o) { m.setAttribute("class", o + " replaced-svg") } n.parentNode.replaceChild(m, n) }; f = document.querySelectorAll(b); c = f.length; while (c--) { var e = f[c], j; if (e.getAttribute("data-src")) { j = e.getAttribute("data-src") } else { j = e.getAttribute("src") } if (d[j]) { d[j].push(e) } else { d[j] = [e] } } for (var i in d) { if (d.hasOwnProperty(i)) { g(i, d[i]) } } }; window.deSVG = a })();

window.addEventListener('load', function () {
  deSVG('.replace-svg', true);
});


//Viewport
var baseW = 1300;
$(function () { updateMetaViewport(); });
function updateMetaViewport() {
  var viewportContent;
  var w = window.outerWidth;
  var cw = document.documentElement.clientWidth;
  if (!w) {
    w = cw;
  }
  if (w > spWidth) {
    viewportContent = "width=" + baseW;
  } else {
    viewportContent = "width=device-width,initial-scale=1.0,minimum-scale=1.0";
  }
  document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}


/*resize*/
window.addEventListener("resize", function () {
  if (currentWidth == window.innerWidth) {
    return;
  }
  currentWidth = window.innerWidth;
  updateMetaViewport();
});
window.addEventListener("orientationchange", function () {
  if (currentWidth == window.innerWidth) {
    return;
  }
  currentWidth = window.innerWidth;
  updateMetaViewport();
});

/***********************************************************************************************************************/
//スムーススクロール
$(function () {
  $('a[href^=#]').click(function () {
    var speed = 400; // ミリ秒
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

//固定リンクの遅延追従
jQuery(function ($) {
  $(window).scroll(function () {
    $(window).exScrollEvent({
      delay: 10,
      callback: function (evt, param) {
        if (param.status == 0) {
          $('.fixed-link').queue([]).animate({
            top: 235 + param.scroll.top
          }, 500)
        }
      }
    });
  });
});

//pagetop アニメーション
$(document).ready(function () {
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});


//Animate.css用
$(window).on('load scroll', function () {
  var elem = $('.animated');
  elem.each(function () {
    var isAnimate = $(this).data('animate');
    var elemOffset = $(this).offset().top;
    var elemHeight = $(this).height();
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    var aniAnchor = wh / 6;
    var dataAnchor = $(this).attr('data-animate-anchor');
    if (dataAnchor == 0) {
      var aniAnchor = 0;
    } else if (dataAnchor && $.isNumeric(dataAnchor)) {
      var aniAnchor = wh / dataAnchor;
    }

    if (dataAnchor == 'bottom') {
      if (elemOffset + elemHeight < wh + scrollPos) {
        if (isAnimate) { $(this).addClass(isAnimate); }
        $(this).addClass('move');
      }
    } else {
      if (scrollPos > elemOffset - wh + aniAnchor) {
        if (isAnimate) { $(this).addClass(isAnimate); }
        $(this).addClass('move');
      }
    }
  });
});



//slidebars
(function ($) {
  $(document).ready(function () {
    $.slidebars({
      siteClose: true // true or false
    });
  });
})(jQuery);

//layzr
// window.addEventListener("DOMContentLoaded", function () {
//   var layzr = new Layzr({
//     selector: '[data-layzr]',
//     attr: 'data-layzr',
//     threshold: 50,
//   });

// });

//スライダー起動
$(document).ready(function () {
  $('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    speed: 1000,
    touchMove: false
  });

  //タイピング風アニメーション
  ityped.init(document.querySelector(".main_box h2"), {
    strings: ['Suzuki kyosuke'],
    startDelay: 200,
    loop: false,
    showCursor: true,
    typeSpeed: 200
  })

});
