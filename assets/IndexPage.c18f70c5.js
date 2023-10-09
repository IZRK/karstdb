import{c as F,h as P}from"./render.88a4087a.js";import{i as y,C as s,D as T,U as M,c as g,h as Q,g as j,_ as B,k as v,W as h,X as r,n as G,r as u,$ as o,f as e,a2 as I}from"./index.0a0a418e.js";import{T as V}from"./MVT.91303135.js";var W=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(l,{slots:i}){const{proxy:{$q:a}}=j(),t=y(T,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(y(M,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const c=g(()=>{const n=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof l.styleFn=="function"){const f=t.isContainer.value===!0?t.containerHeight.value:a.screen.height;return l.styleFn(n,f)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-n+"px":a.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":a.screen.height-n+"px"}}),d=g(()=>`q-page${l.padding===!0?" q-layout-padding":""}`);return()=>Q("main",{class:d.value,style:c.value},P(i.default))}});const q={name:"PageFullScreen",methods:{tweak(){return{height:this.$q.screen.height-50+"px"}}}};function A(l,i,a,t,p,c){return v(),h(W,{"style-fn":c.tweak,class:"scroll-y fhpadd"},{default:r(()=>[G(l.$slots,"default")]),_:3},8,["style-fn"])}var H=B(q,[["render",A]]);const D={__name:"IndexPage",setup(l){const i=u([1655116,5806870]),a=u("EPSG:3857"),t=u(9),p=u(0),c=new V;return(d,n)=>{const f=o("ol-view"),_=o("ol-source-xyz"),m=o("ol-tile-layer"),x=o("ol-style-fill"),S=o("ol-style-stroke"),w=o("ol-style"),z=o("ol-source-vector-tile"),$=o("ol-vector-tile-layer"),k=o("ol-webgl-tile-layer"),C=o("ol-layer-group"),b=o("ol-map");return v(),h(H,null,{default:r(()=>[e(b,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,class:"full-height full-width"},{default:r(()=>[e(f,{ref:"view",center:i.value,rotation:p.value,zoom:t.value,projection:a.value},null,8,["center","rotation","zoom","projection"]),e(m,null,{default:r(()=>[e(_,{url:"https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles?type=style&token="})]),_:1}),e(m,null,{default:r(()=>[e(_,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})]),_:1}),e(C,null,{default:r(()=>[e($,null,{default:r(()=>[e(z,{url:"https://vectortileservices5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Slovenian_carbonate_rocks_(Gostin\u010Dar_2016)/VectorTileServer/tile/{z}/{y}/{x}.pbf",format:I(c)},{default:r(()=>[e(w,null,{default:r(()=>[e(x,{color:"rgba(0,0,0,0.2)"}),e(S,{color:"black",width:1})]),_:1})]),_:1},8,["format"])]),_:1}),e(k,null,{default:r(()=>[e(_,{ref:"cavesSource",url:"https://services7.arcgis.com/V2VriwTjJDabpGg6/ArcGIS/rest/services/2022_marec_export_ekataster_tile_layer/MapServer/WMTS/tile/1.0.0/2022_marec_export_ekataster_tile_layer/default/default028mm/{z}/{y}/{x}.png"},null,512)]),_:1}),e(m,null,{default:r(()=>[e(_,{url:"https://services5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Active_faults_in_Slovenia_-_Raster_tile_layer/MapServer/tile/{z}/{y}/{x}"})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{D as default};
