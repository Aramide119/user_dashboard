export default function(e){const a=SEMICOLON.Core;a.loadJS({file:"js/plugins.flexslider.js",id:"canvas-flexslider-js"}),a.isFuncTrue(()=>jQuery().flexslider).then(t=>!!t&&(a.initFunction({class:"has-plugin-flexslider",event:"pluginFlexSliderReady"}),(e=a.getSelector(e)).length<1||void e.each(function(){let t=jQuery(this),e=(t.find(".lazy"),t.attr("data-animation")||"slide"),a=t.attr("data-easing")||"swing",i=t.attr("data-direction")||"horizontal",r=t.attr("data-reverse"),s=t.attr("data-slideshow"),n=t.attr("data-pause")||5e3,l=t.attr("data-speed")||600,o=t.attr("data-video"),d=t.attr("data-pagi"),u=t.attr("data-arrows"),f=t.attr("data-arrow-left")||"uil uil-angle-left-b",h=t.attr("data-arrow-right")||"uil uil-angle-right-b",c=t.attr("data-thumbs"),g=t.attr("data-hover"),p=t.attr("data-smooth-height"),m=t.attr("data-touch"),v=!1;"swing"==a&&(a="swing",v=!0),r="true"==r,s="false"!=s,o=o||!1,p="false"!=p,"vertical"==i&&(p=!1),d="false"!=d,d="true"==c?"thumbnails":d,u="false"!=u,g="false"!=g,m="false"!=m,t.find(".flexslider").flexslider({selector:".slider-wrap > .slide",animation:e,easing:a,direction:i,reverse:r,slideshow:s,slideshowSpeed:Number(n),animationSpeed:Number(l),pauseOnHover:g,video:o,controlNav:d,directionNav:u,smoothHeight:p,useCSS:v,touch:m,start:function(t){SEMICOLON.Modules.animations(),SEMICOLON.Modules.lightbox(),jQuery(".flex-prev").html('<i class="'+f+'"></i>'),jQuery(".flex-next").html('<i class="'+h+'"></i>'),setTimeout(function(){0<t.parents(".grid-container.has-init-isotope").length&&t.parents(".grid-container.has-init-isotope").isotope("layout")},1200),"undefined"!=typeof skrollrInstance&&skrollrInstance.refresh()},after:function(t){0<t.parents(".grid-container.has-init-isotope").length&&t.parents(".grid-container.has-init-isotope").isotope("layout"),jQuery(".menu-item:visible").find(".flexslider .slide").resize()}})})))}