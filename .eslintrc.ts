/*
 * @Description: eslint 配置文件
 * @Author: 徐长剑
 * @Date: 2019-09-04 18:23:52
 * @LastEditTime: 2019-10-17 13:38:23
 * @LastEditors: 徐长剑
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    _: true,
    G_CONFIG: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "no-console": "off",
    "no-useless-escape": "off",
    "no-debugger": "off",
    camelcase: "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
