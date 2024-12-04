import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  { files: ["src/**/*.ts"] },
  { languageOptions: { globals: globals.node } },
];
