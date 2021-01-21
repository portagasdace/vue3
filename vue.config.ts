/*
 * @Description: 项目配置文件
 * @Author: 徐长剑
 * @Date: 2019-09-04 17:53:01
 * @LastEditTime: 2019-10-28 10:42:37
 * @LastEditors: 刘玉生
 */
import path from "path";
//
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  },
  outputDir: "dist",
  // webpack-merge 合并到最终的配置中
  configureWebpack: {
    resolve: {
      extensions: [".js", ".ts", ".vue", ".tsx", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@css": path.resolve(__dirname, "./src/css"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@router": path.resolve(__dirname, "./src/router"),
        "@utils": path.resolve(__dirname, "./src/utils")
      }
    },
    css: {
      loaderOptions: {
        // pass options to sass-loader
        sass: {
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.scss`
          data: `
                 @import "@/css/variable.scss"; 
                 @import "@/css/theme.scss";
                 @import "@/css/mixin.scss";
                `
        }
      }
    },
    plugins: []
  }
};
