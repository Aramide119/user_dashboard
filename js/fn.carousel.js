SEMICOLON.Core.getVars.fn.carousel=a=>{const e=SEMICOLON.Core;e.loadJS({file:"js/plugins.carousel.js",id:"canvas-carousel-js"}),e.isFuncTrue(()=>jQuery().owlCarousel).then(t=>!!t&&(e.initFunction({class:"has-plugin-carousel",event:"pluginCarouselReady"}),(a=e.getSelector(a)).length<1||void a.each(function(){let t=jQuery(this),a=t.attr("data-items")||4,e=t.attr("data-items-xs")||Number(a),r=t.attr("data-items-sm")||Number(e),s=t.attr("data-items-md")||Number(r),i=t.attr("data-items-lg")||Number(s),d=t.attr("data-items-xl")||Number(i),l=t.attr("data-loop"),o=t.attr("data-autoplay"),u=t.attr("data-speed")||250,n=t.attr("data-animate-in"),m=t.attr("data-animate-out"),g=t.attr("data-auto-width"),c=t.attr("data-nav"),p=t.attr("data-nav-prev")||'<i class="uil uil-angle-left-b"></i>',N=t.attr("data-nav-next")||'<i class="uil uil-angle-right-b"></i>',y=t.attr("data-pagi"),O=t.attr("data-margin")||20,b=t.attr("data-stage-padding")||0,h=t.attr("data-merge"),C=t.attr("data-start")||0,f=t.attr("data-rewind"),M=t.attr("data-slideby")||1,v=t.attr("data-center"),S=t.attr("data-lazyload"),L=t.attr("data-video"),I=t.attr("data-rtl"),w=5e3,z=!0;M="page"==M?"page":Number(M),l="true"==l,o?(w=Number(o),o=!0):(o=!1,z=!1),n=n||!1,m=m||!1,g="true"==g,c="false"!=c,y="false"!=y,f="true"==f,h="true"==h,v="true"==v,S="true"==S,L="true"==L,I=!("true"!=I&&!jQuery("body").hasClass("rtl"));let E=t.owlCarousel({margin:Number(O),loop:l,stagePadding:Number(b),merge:h,startPosition:Number(C),rewind:f,slideBy:M,center:v,lazyLoad:S,autoWidth:g,nav:c,navText:[p,N],autoplay:o,autoplayTimeout:w,autoplayHoverPause:z,dots:y,smartSpeed:Number(u),fluidSpeed:Number(u),video:L,animateIn:n,animateOut:m,rtl:I,responsive:{0:{items:e},576:{items:r},768:{items:s},992:{items:i},1200:{items:d}},onInitialized:function(){SEMICOLON.Base.sliderDimensions(t.parents(".slider-element")[0]),SEMICOLON.Modules.lightbox(),SEMICOLON.Modules.hoverAnimations(),SEMICOLON.Modules.flexSlider(),SEMICOLON.Modules.counter(),SEMICOLON.Modules.progress(),SEMICOLON.Modules.resizeVideos(),0<t.find(".owl-dot").length&&t.addClass("with-carousel-dots")}});jQuery(window).on("lazyLoadLoaded",function(){t.find(".lazy").length==t.find(".lazy.lazy-loaded").length&&(lazyLoadInstance.update(),setTimeout(function(){E.trigger("refresh.owl.carousel")},500))})})))};