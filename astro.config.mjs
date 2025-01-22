// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://clubleonardomurialdo.com.ar/',
  build: {
    // Ejemplo: Genera `page.html` en lugar de `page/index.html` durante la compilación.
    format: 'file'
  },
  integrations: [tailwind(), react()],
  experimental: {
    svg: true,
  },
  env: {
    schema: {
      INSTAGRAM: envField.string({ context: "client", access: "public", optional: true }),
      FACEBOOK: envField.string({ context: "client", access: "public", optional: true }),
      WHATSAPP: envField.string({ context: "client", access: "public", optional: true }),
      WHATSAPP_FORMAT: envField.string({ context: "client", access: "public", optional: true }),
      PHONE: envField.string({ context: "client", access: "public", optional: true }),
      PHONE_FORMAT: envField.string({ context: "client", access: "public", optional: true }),
      MAP_URL: envField.string({ context: "client", access: "public", optional: true }),
      MAP_IFRAME: envField.string({ context: "client", access: "public", optional: true }),
      EMAIL: envField.string({ context: "client", access: "public", optional: true }),
      ADDRESS: envField.string({ context: "client", access: "public", optional: true }),
      SCHEDULES_1: envField.string({ context: "client", access: "public", optional: true }),
      SCHEDULES_2: envField.string({ context: "client", access: "public", optional: true }),
      SCHEDULES_3: envField.string({ context: "client", access: "public", optional: true }),
      MAP_CAMPING_IFRAME: envField.string({ context: "client", access: "public", optional: true }),
    }
  }
});