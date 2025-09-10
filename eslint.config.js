// ESLint configuration migrated from .eslintrc.json for ESLint v9+

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        process: "readonly",
      },
    },
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
