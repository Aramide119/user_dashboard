export default function(a){const e=SEMICOLON.Core;if(!e.getOptions.gmapAPI)return console.warn("No API Key defined for Google Maps! Please set an API Key in js/functions.js File!"),!0;e.loadJS({file:"https://maps.google.com/maps/api/js?key="+e.getOptions.gmapAPI,id:"canvas-gmapapi-js"}),e.loadJS({file:"js/plugins.gmap.js",id:"canvas-gmap-js"}),e.isFuncTrue(()=>"undefined"!=typeof google&&jQuery().gMap).then(t=>!!t&&(e.initFunction({class:"has-plugin-gmap",event:"pluginGmapReady"}),(a=e.getSelector(a)).length<1||void a.each(function(){let t=jQuery(this),a=t.attr("data-latitude"),e=t.attr("data-longitude"),o=t.attr("data-address"),r=t.attr("data-content"),n=t.attr("data-scrollwheel")||!0,s=t.attr("data-maptype")||"ROADMAP",l=t.attr("data-zoom")||12,i=t.attr("data-styles"),d=t.attr("data-markers"),p=t.attr("data-icon"),c=t.attr("data-control-pan")||!1,g=t.attr("data-control-zoom")||!1,u=t.attr("data-control-maptype")||!1,m=t.attr("data-control-scale")||!1,h=t.attr("data-control-streetview")||!1,w=t.attr("data-control-overview")||!1;if(o)a=e=!1;else if(!a&&!e)return console.log("Google Map co-ordinates not entered."),!0;i=i&&JSON.parse(i),"false"==n&&(n=!1),"true"==c&&(c=!0),"true"==g&&(g=!0),"true"==u&&(u=!0),"true"==m&&(m=!0),"true"==h&&(h=!0),"true"==w&&(w=!0),d=d?Function("return "+d)():o?[{address:o,html:r||o}]:[{latitude:a,longitude:e,html:r||!1}],p=p?Function("return "+p)():{image:"https://www.google.com/mapfiles/marker.png",shadow:"https://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[19,34]},t.gMap({controls:{panControl:c,zoomControl:g,mapTypeControl:u,scaleControl:m,streetViewControl:h,overviewMapControl:w},scrollwheel:n,maptype:s,markers:d,icon:p,latitude:a,longitude:e,address:o,zoom:Number(l),styles:i})})))}