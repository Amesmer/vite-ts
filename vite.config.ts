import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from  'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // 提供的默认值需要在模版中渲染
    reactivityTransform:true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置mixin样式文件
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
