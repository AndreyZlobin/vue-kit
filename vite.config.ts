import vue from '@vitejs/plugin-vue';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

import { alias } from './config';

export default defineConfig({
  plugins: [vue(),
    visualizer({
      filename: './tmp/bundle-visualizer.html',
    }),
    VitePluginHtmlEnv(),
  ],
  resolve: {
    alias: alias.map(({ find, replacement }) => ({
      find,
      replacement: path.resolve(__dirname, replacement),
    })),
  },
});
