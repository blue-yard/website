function clearRequestInterval(e){e.clear()}function clearRequestTimeout(e){e.clear()}!function(){for(var e=0,n=["ms","moz","webkit","o"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var a=(new Date).getTime(),i=Math.max(0,16-(a-e)),o=window.setTimeout(function(){n(a+i)},i);return e=a+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),window.rTimeout=function(e,n){var t,a=Date.now,i=window.requestAnimationFrame,o=a(),r=function(){a()-o<n?t||i(r):e()};return i(r),{clear:function(){t=1}}},window.rInterval=function(e,n){var t,a=Date.now,i=window.requestAnimationFrame,o=a(),r=function(){a()-o<n||(o+=n,e()),t||i(r)};return i(r),{clear:function(){t=1}}};var documentready=function(){justloadedEnd=window.rTimeout(function(){document.querySelector(".is-just-loaded").classList.remove("is-just-loaded")},1e3)};if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?documentready():document.addEventListener("DOMContentLoaded",documentready),document.getElementById("page-header")){var swiper={touchStartX:0,touchEndX:0,minSwipePixels:30,detectionZone:void 0,swiperCallback:function(){},init:function(e,n){swiper.swiperCallback=n,e.addEventListener("touchstart",function(e){swiper.touchStartX=e.changedTouches[0].screenX},!1),e.addEventListener("touchend",function(e){swiper.touchEndX=e.changedTouches[0].screenX,swiper.handleSwipeGesture()},!1)},handleSwipeGesture:function(){var e,n;swiper.touchEndX<=swiper.touchStartX&&(n=swiper.touchStartX-swiper.touchEndX,e="left"),swiper.touchEndX>=swiper.touchStartX&&(n=swiper.touchEndX-swiper.touchStartX,e="right"),n>swiper.minSwipePixels&&"undefined"!==e&&swiper.swipe(e,n)},swipe:function(e,n){var t={};t.direction=e,t.movedPixels=n,swiper.swiperCallback(t)}},gestureZone=document.getElementById("page-header");swiper.init(gestureZone,function(e){"left"==e.direction?quandamove(1,"swipe:left"):"right"==e.direction&&quandamove(-1,"swipe:right")})}const qandaSlideDuration=1e4;function playvideo(e){e&&(e.duration>0&&(e.playbackRate=e.duration/((qandaSlideDuration+1e3)/1e3),e.currentTime=0),e.play())}function pausevideo(e){e&&e.pause()}var matches=function(e,n){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,n)};function quandamove(e,n=""){let t=document.querySelector(".movie .current");window.rTimeout(function(){pausevideo(t)},1e3);var a=document.getElementsByClassName("qanda-parent");for(parent of a)for(i=0;i<Math.abs(e);i++){var o=parent.querySelector(".current");o.classList.remove("current"),e>0?o.nextElementSibling?o.nextElementSibling.classList.add("current"):parent.firstChild.classList.add("current"):o.previousElementSibling?o.previousElementSibling.classList.add("current"):parent.lastChild.classList.add("current")}quandaautonextinit("move: "+e+" "+n)}function watchfocus(){window.addEventListener("blur",function(e){quandaautonextclear("blur"),pausevideo(document.querySelector(".movie .current"))},!1),window.addEventListener("focus",function(e){quandaautonextinit("focus")},!1),document.onvisibilitychange=function(){document.hidden?(quandaautonextclear("hidden"),pausevideo(document.querySelector(".movie .current"))):quandaautonextinit("visible")}}watchfocus();var quandaautonext=window.rTimeout(function(){},0);function quandaautonextclear(e=""){quandaautonext.clear()}function quandaautonextinit(e=""){quandaautonextclear("init"),playvideo(document.querySelector(".movie .current")),quandaautonext=window.rTimeout(function(){quandamove(1,"automove")},qandaSlideDuration)}function logKey(e){switch(e.keyCode){case 37:e.preventDefault(),quandamove(-1,"leftkey");break;case 39:e.preventDefault(),quandamove(1,"rightkey");break;default:return}}window.onload=function(){quandaautonextinit("onload")},document.addEventListener("keydown",logKey);for(var navclickelements=document.getElementsByClassName("qanda__nav-dot-item"),i=0;i<navclickelements.length;i++)!function(e){navclickelements[e].onclick=function(n){let t=Array.from(navclickelements).indexOf(document.querySelector("#qanda__nav .current")),a=e-t;0!=a&&quandamove(a,"navclick")}}(i);