// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/general.css"],
  ssr: true,
  runtimeConfig: {
    dev: 0,
    public: {
      serverURL: "http://localhost:3001", // URL of your local server
    },
  },
  app: {
    // Checking environment variable to decide whether the link
    baseURL: "", // Name of your GitHub Repository

    head: {
      title: "A. C.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" }, //import from google font
        { rel: "preconnect", href: "https://fonts.gstatic.com" }, //import from google font
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap", //import from google font
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
