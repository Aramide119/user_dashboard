export default function(l){const s=SEMICOLON.Core;s.loadJS({file:"js/plugins.bootstrap.js",id:"canvas-bootstrap-js"}),s.isFuncTrue(()=>"undefined"!=typeof bootstrap).then(e=>{if(!e)return!1;if(s.initFunction({class:"has-plugin-bscomponents",event:"pluginBsComponentsReady"}),(l=s.getSelector(l,!1)).length<1)return!0;let t=[].slice.call(s.getVars.baseEl.querySelectorAll('[data-bs-toggle="tooltip"]'));t.map(e=>new bootstrap.Tooltip(e,{container:"body"}));let o=[].slice.call(s.getVars.baseEl.querySelectorAll('[data-bs-toggle="popover"]'));o.map(e=>new bootstrap.Popover(e,{container:"body"}));let a=document.querySelectorAll('[data-bs-toggle="tab"],[data-bs-toggle="pill"]');const r=e=>{const t=new bootstrap.Tab(e);t.show()};document.querySelectorAll(".canvas-tabs").forEach(e=>{var t=e.getAttribute("data-active");t&&(t=Number(t)-1,r(e.querySelectorAll("[data-bs-target]")[t]))}),document.querySelectorAll(".tab-hover").forEach(e=>{e.querySelectorAll("[data-bs-target]").forEach(e=>{e.addEventListener("mouseover",()=>{r(e)})})}),s.getVars.hash&&document.querySelector('[data-bs-target="'+s.getVars.hash+'"]')&&r(document.querySelector('[data-bs-target="'+s.getVars.hash+'"]')),a.forEach(o=>{o.addEventListener("shown.bs.tab",e=>{var t;o.classList.contains("container-modules-loaded")||(t=o.getAttribute("data-bs-target")?o.getAttribute("data-bs-target"):o.getAttribute("href"),s.runContainerModules(document.querySelector(t)),document.querySelector(t).querySelectorAll(".flexslider").forEach(e=>{setTimeout(()=>{jQuery(e).find(".slide").resize()},500)}),o.classList.add("container-modules-loaded"))})}),document.querySelectorAll(".style-msg .btn-close").forEach(t=>{t.onclick=e=>{s.slideUp(t.closest(".style-msg")),e.preventDefault()}})})}