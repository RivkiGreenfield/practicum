// eslint.config.mjs
export default [
  {
    // כללי ל־JavaScript ב־Node
    files: ["**/*.js"],

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // גרסת JS עדכנית
        sourceType: "module",  // מאפשר import/export
      },
    },

    env: {
      node: true,
      es2021: true,
    },

    // כללים בסיסיים מומלצים
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // _ignored args
      "no-console": "off", // אפשר console.log בשרת
      "semi": ["error", "always"], // סמי-קולון חובה
      "quotes": ["error", "double"], // ציטוטים כפולים
    },
  },
];