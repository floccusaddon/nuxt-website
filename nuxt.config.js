export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Floccus bookmarks sync',
    title: 'Floccus bookmarks sync',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Floccus offers seamless cross-browser bookmarks syncing, making it easy to manage your bookmarks across multiple devices with your privacy in mind. Discover how to enhance your browsing experience.'
      },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:title', property: 'og:title', content: 'Cross-browser bookmarks syncing - Floccus bookmarks sync' },
      { hid: 'og:url', property: 'og:url', content: 'https://floccus.org/' },
      { hid: 'og:description', property: 'og:description', content: 'Floccus offers seamless cross-browser bookmarks syncing, making it easy to manage your bookmarks across multiple devices with your privacy in mind. Discover how to enhance your browsing experience.'},
      { hid: 'og:image', property: 'og:image', content: 'https://floccus.org/floccus_schema.png' },

      // twitter card
      { hid: "twitter:title", name: "twitter:title", content: 'Cross-browser bookmarks syncing - Floccus bookmarks sync' },
      { hid: "twitter:url", name: "twitter:url", content: 'https:floccus.org/' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Floccus offers seamless cross-browser bookmarks syncing, making it easy to manage your bookmarks across multiple devices with your privacy in mind. Discover how to enhance your browsing experience.'},
      { hid: "twitter:image", name: "twitter:image", content: 'https://floccus.org/floccus_schema.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_32.png' },
      { rel: 'me', href: 'https://fosstodon.org/@floccus' }
    ],
    script: [
      { src: 'https://plausible.io/js/script.outbound-links.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/markdownit'],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
