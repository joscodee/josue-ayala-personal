import { getHighlighter } from 'shiki';

export default {
  head: {
    title: 'jos.code',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content'],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  googleFonts: {
    preconnect: true,
    preload: true,
    download: true,
    overwriting: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'JetBrains Mono': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  content: {
    markdown: {
      async highlighter() {
        const highlighter = await getHighlighter({
          theme: 'dracula',
        });
        return (code, lang) => highlighter.codeToHtml(code, lang);
      },
    },
  },
};
