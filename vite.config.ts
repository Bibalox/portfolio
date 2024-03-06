import path from 'node:path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, './src/components/views'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
})
