(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{221:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("48517564",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";var o={name:"DefaultLayout",data:function(){return{title:"floccus",icons:[{icon:"mdi-mastodon",href:"https://fosstodon.org/@floccus"},{icon:"mdi-github",href:"https://github.com/floccusAddon"},{icon:"mdi-google-play",href:"https://play.google.com/store/apps/details?id=org.handmadeideas.floccus"}]}}},n=r(86),l=r(116),c=r.n(l),d=r(410),v=r(417),f=r(416),_=r(176),h=r(149),m=r(418),x=r(411),C=r(412),w=r(413),y=r(251),V=r(414),k=r(415),F=r(245),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{fixed:"",app:"",flat:""}},[r("v-toolbar-title",[r("v-btn",{attrs:{text:"",color:"transparent",to:{name:"index"}}},[r("v-img",{attrs:{src:"/logo.svg"}})],1),t._v("\n      floccus")],1),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"d-none d-sm-block"},[r("v-btn",{staticClass:"mr-4",attrs:{text:"",elevation:"0",to:{name:"guides"}}},[t._v("Guides")]),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{text:"",elevation:"0",to:{name:"faq"}}},[t._v("FAQ")])],1),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"primary",outlined:"",text:"",to:{name:"download"}}},[t._v("Download")]),t._v(" "),r("v-btn",{attrs:{outlined:"",text:"",to:{name:"donate"}}},[t._v("Donate")])],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{staticClass:"primary lighten-1 d-flex flex-column mt-10",attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"primary lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.href,target:"_blank"}},[r("v-icon",{attrs:{size:"24px"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1)})),1),t._v(" "),r("v-card-text",{staticClass:"white--text pt-0"}),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"white--text"},[r("p",[t._v(t._s((new Date).getFullYear())+" — "),r("strong",[t._v("floccus")])]),t._v(" "),r("p",[t._v("Created by "),r("a",{staticClass:"white--text",attrs:{href:"https://marcelklehr.de/"}},[t._v("marcel klehr")])])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VBtn:f.a,VCard:_.a,VCardText:h.a,VContainer:m.a,VDivider:x.a,VFooter:C.a,VIcon:w.a,VImg:y.a,VMain:V.a,VSpacer:k.a,VToolbarTitle:F.a})},257:function(t,e,r){r(258),t.exports=r(259)},291:function(t,e,r){"use strict";r(221)},292:function(t,e,r){var o=r(24)(!1);o.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=o},75:function(t,e,r){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(291),r(86)),l=r(116),c=r.n(l),d=r(410),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[257,11,2,12]]]);