import js from "@eslint/js";
import globals from "globals";

export default [

  js.configs.recommended,
  {
    parserOptions: {
      sourceType: "module",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
];