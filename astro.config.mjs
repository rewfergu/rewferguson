import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
// import compress from 'astro-compress';

import robertferguson from './src/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  server: {
    host: true,
    allowedHosts: ['macmini.local', 'localhost', '127.0.0.1']
  },

  integrations: [
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    // compress({
    //   CSS: true,
    //   HTML: {
    //     'html-minifier-terser': {
    //       removeAttributeQuotes: false,
    //     },
    //   },
    //   Image: false,
    //   JavaScript: true,
    //   SVG: false,
    //   Logger: 1,
    // }),

    robertferguson(),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
