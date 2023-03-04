import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { version as pkgVersion } from './package.json'

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/store': ['useStore'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@router': resolve(__dirname, './src/router'),
      '@views': resolve(__dirname, './src/views'),
      '@utils': resolve(__dirname, './src/utils'),
      '@store': resolve(__dirname, './src/store'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@components': resolve(__dirname, './src/components'),
      '@common': resolve(__dirname, './src/common'),
      '@assets': resolve(__dirname, './src/assets'),
      '@styles': resolve(__dirname, './src/styles'),
      '@containers': resolve(__dirname, './src/containers'),
      '@apis': resolve(__dirname, './src/apis'),
      '@interface': resolve(__dirname, './src/interface'),
    },
  },
})
