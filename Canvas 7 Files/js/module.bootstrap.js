export default function(o){const t=SEMICOLON.Core;t.loadJS({file:"js/plugins.bootstrap.js",id:"canvas-bootstrap-js"}),t.isFuncTrue(()=>"undefined"!=typeof bootstrap).then(o=>!!o&&void SEMICOLON.Core.initFunction({class:"has-plugin-bootstrap",event:"pluginBootstrapReady"}))}