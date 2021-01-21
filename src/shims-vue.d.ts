/* eslint-disable */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg";
declare module "js-cookie";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
