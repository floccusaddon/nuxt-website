(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{443:function(e,o,t){"use strict";t.r(o);t(14),t(13),t(16),t(6),t(21),t(15),t(22);var r=t(2);t(58);function n(object,e){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(o){Object(r.a)(e,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(source,o))}))}return e}var l={name:"DownloadPage",data:function(){return{faqs:[{question:"Which browsers are supported by floccus?",answer:"Currently floccus supports Chromium, Google Chrome, Mozilla Firefox, Opera, Brave, Vivaldi and Microsoft Edge."},{question:"How can I access my bookmarks on my Android phone?",answer:"A Floccus Android app is available in an open beta [from the Downloads page](/download)\n\nThe only mobile browser to support extensions that interact with bookmarks is currently the free Kiwi browser."},{question:"Does floccus support bookmarks tags in Firefox?",answer:"Unfortunately not, Mozilla has not yet added an API for interacting with native tags. However, floccus will not touch your tags."},{question:"Does floccus support separators in Firefox?",answer:"Yes. Separators are synced even to Browsers that don't support them natively using bookmarks as substitutes. When using Nextcloud Bookmarks you currently can only have one separator per folder."},{question:"How are browser-internal URLs treated?",answer:"Browser-internal URLs like `chrome://` URLs are only synced with WebDAV or Google Drive and only with chrome-based browsers."},{question:"How are non-HTTP URLs treated?",answer:"Since Nextcloud Bookmarks currently only supports HTTP links, URLs with any other schemes are ignored and left alone, when syncing via Nextcloud Bookmarks.\n\nWhen syncing via WebDAV or Google Drive, `http(s):`, `ftp:`, `data:`, `chrome:` and `javascript:` bookmarks are supported."},{question:"Does floccus track usage data at all?",answer:"No. Floccus does not track you in any way. The only network traffic initiated by floccus is syncing your bookmarks to the server of your choosing. That's it."},{question:"How does floccus treat my cloud credentials?",answer:"As Floccus uses OAuth to connect to your Google Drive, it doesn't know and doesn't record your Google password. Instead, floccus stores an authentication token which can only be used to create new files and change the files created with the same token in your Google Drive. Not even floccus can access any other data stored in your Google services.\n\nFor Nextcloud you have the option to use your normal account password, or create a dedicated app token that you can revoke at any time.\n\nFor WebDAV, only a normal password can be used.\n\nFloccus only stores the data you provide in your browser and doesn't send them anywhere. The aforementioned access credentials are thus as secure as your browser, by default. If even that is not enough for you, you can encrypt your credentials entered into floccus with a passphrase that you will have to enter on every browser start."},{question:"I am currently using a different tool to sync my browser data. Can I use this with floccus?",answer:"No, any other sync tool affecting your browser bookmarks will lead to duplication and possibly corrupt data. Please disable any active browser syncing tool before using floccus."},{question:"Some of my topmost folders are missing in one of my browsers. How can I avoid this?",answer:"Browsers usually do not allow you to create items in the toplevel root folder (/), that space is reserved for special folders like Mobile bookmarks, Bookmarks bar, Other bookmarks. Any attempts by floccus to create items inside the root folder (whether in Kiwi or on any other Browser) will fail. The intention is that the built-in Sync mechanism of the browser vendor or some other native browser process will create and manage these folders, so it's by design that extensions are not able to write to it.\n\nIf you are missing some toplevel folders on a browser, try setting a different local folder to sync to in the floccus settings. E.g. instead of syncing to the absolute root folder, sync to a folder one level deeper, like Bookmarks Bar on Desktop or Mobile Bookmarks on mobile."},{question:"Floccus suddenly won't stop syncing one of my accounts. What can I do?",answer:"Floccus employs a locking mechanism to avoid manipulating data on the server from two browsers at the same time. Sometimes, when closing a browser while floccus is syncing,\nthis lock is not removed. On the next browser start floccus will then wait for the lock to be released and appear to be syncing for a long time without doing anything.\n\nAfter half an hour of trying floccus will override the lock and start its own sync run. So, after half an hour, things should be fine without you having to intervene."}].map((function(e){return c(c({},e),{},{show:!1})}))}},head:{title:"FAQ"}},d=l,h=t(86),w=t(116),y=t.n(w),f=t(414),v=t(175),m=t(149),k=t(439),O=t(409),_=t(174),x=t(411),D=t(440),j=t(413),component=Object(h.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"10",sm:"8"}},[t("h1",{staticClass:"headline"},[e._v("Frequently Asked Questions")]),e._v(" "),e._l(e.faqs,(function(o){return t("div",{key:o.question,staticClass:"mt-5"},[t("v-card",{staticClass:"mb-5 mr-5",attrs:{rounded:""}},[t("v-card-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){o.show=!o.show}}},[e._v(e._s(o.question)+"\n            "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v(e._s(o.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e._v(" "),t("v-expand-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:o.show,expression:"faq.show"}]},[t("v-divider"),e._v(" "),t("v-card-text",{domProps:{innerHTML:e._s(e.$md.render(o.answer))}})],1)])],1)],1)}))],2)],1),e._v(" "),t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"10",sm:"8"}},[t("p",[e._v("\n        How does Floccus deal with your personal data?\n        "),t("NuxtLink",{attrs:{to:"/privacy"}},[e._v("Privacy Policy")])],1),e._v(" "),t("p",[e._v("\n        What are your rights when using floccus?\n        "),t("NuxtLink",{attrs:{to:"/license"}},[e._v("License")])],1)])],1)],1)}),[],!1,null,null,null);o.default=component.exports;y()(component,{VBtn:f.a,VCard:v.a,VCardText:m.a,VCardTitle:m.b,VCol:k.a,VDivider:O.a,VExpandTransition:_.a,VIcon:x.a,VRow:D.a,VSpacer:j.a})}}]);