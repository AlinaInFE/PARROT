module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/button-has-type": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-shadow": 0,
    semi: "error",
    quotes: "double",
  },
};
