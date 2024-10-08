// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  runtimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    public: {
      lastFMApiKey: process.env.LAST_FM_API_KEY,
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/ui",
    "nuxt-vuefire",
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    auth: {
      enabled: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    typedPages: true,
  },
  colorMode: {
    preference: "system",
  },
});
