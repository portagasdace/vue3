module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    _: true,
    G_CONFIG: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  rules: {
    "camelcase": 0,
    "@typescript-eslint/camelcase": "off",
    "no-console": "off",
    "no-useless-escape": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
  },
};
