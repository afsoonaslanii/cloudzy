// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/image',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
  ],
  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'swap',
  },
  image: {
    dir: 'assets/images',
    domains: ['https://cloudzy.vercel.app'],
  },
})
