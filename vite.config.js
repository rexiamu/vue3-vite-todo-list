import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://cn.vitejs.dev/config/
export default defineConfig({
  // 部署在 github 非用户名项目的 pages 时，使文件路径指向当前项目。
  base: "./",
  server: {
    host: "0.0.0.0",
    port: "9787",
    open: true,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
