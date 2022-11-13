module.exports = {
  root: true,
  ignorePatterns: ["**/coverage/*", "**/build/*", "**/node_modules/*"],
  overrides: [
    {
      files: "**/*.{js,cjs,mjs,ts,jsx,tsx}",
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      env: { node: true },
    },
  ],
};
