/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
	extends: ['airbnb', "plugin:node/recommended", 'plugin:svelte/recommended', 'prettier'],
  plugins: ["prettier"],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: latest,
		extraFileExtensions: ['.svelte']
	},
  rules: {
    "no-plusplus": "off",
    "no-console": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "no-fallthrough": "off",
    "no-use-before-define": "off",
    "prefer-destructuring": "off",
    "no-shadow": "off"
  }
};