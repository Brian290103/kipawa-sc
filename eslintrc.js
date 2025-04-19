/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals", // ✅ Next.js + React + TypeScript optimized rules
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off", // ✅ React 17+ doesn't need React in scope
    "react/prop-types": "off", // ✅ You're using TypeScript
    "@typescript-eslint/no-unused-vars": "warn", // ⚠️ Warn, don't block build
    "react/no-unescaped-entities": "off", // Optional: ignore apostrophe quotes
  },
  settings: {
    react: {
      version: "detect", // 🔧 Fixes: React version not specified
    },
  },
};
