const config = {
	plugins: ["react", "react-hooks"],
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"no-console": "off",
		"no-empty": ["warn", { allowEmptyCatch: true }],
		"react/prop-types": "error",
		"prettier/prettier": "off",
		eqeqeq: "error",
		"no-unused-vars": "warn",
		"global-require": "warn",
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"prettier/react",
		"prettier/standard",
		"prettier",
	],
};

module.exports = config;
