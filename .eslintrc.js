module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off"
  },
  env: {
    jest: true
  },
  globals: {
    fetch: false
  }
};
