/* eslint-env node */

module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "prettier", "@typescript-eslint", "react"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": "error",
    "no-extra-parens": ["off"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],

    "react/prop-types": ["off"],
    "react/no-multi-comp": ["error"],
    "react/self-closing-comp": ["error"],

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/unbound-method": "off",
    "storybook/prefer-pascal-case": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "variable",
        types: ["function"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],

    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
}
