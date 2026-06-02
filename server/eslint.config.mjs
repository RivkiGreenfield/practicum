export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },

    rules: {
      // 🔴 איכות קוד (חשובים)
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-console": "off",

      // 🟡 שגיאות לוגיות (כן חשוב להשאיר)
      "no-eval": "error",
      "no-throw-literal": "error",

      // 🟢 סטייל (מרוכך כדי שלא יציק)
      "quotes": "off",
      "semi": "off",
      "comma-dangle": "off",
      "indent": "off",
    },
  },
];