export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Yannick Lescure',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Yannick Lescure, France'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@yannicklescure' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://yannicklescure.com'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Yannick Lescure'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Yannick Lescure, France'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/profile_avatar.jpg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Yannick Lescure' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://yannicklescure.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Yannick Lescure, France'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Yannick Lescure, France'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/profile_avatar.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/profile_avatar.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Yannick Lescure'
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // canonical
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://yannicklescure.com`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/fontawesome-module
    ['@nuxtjs/fontawesome', {
        icons: {
          brands: ['faTwitter', 'faInstagram', 'faYoutube'],
          solid: ['faEnvelope'],
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://pwa.nuxtjs.org/manifest
  pwa: {
    manifest: {
      name: 'Yannick Lescure',
      lang: 'fr',
      useWebmanifestExtension: false
    }
  },

  googleAnalytics: {
    id: 'UA-100564203-2'
  }
}
