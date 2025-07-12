module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // ✅ Enables globals like `test`, `expect`
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-template': 'off',
    'react/no-children-prop': 'off',
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'always-multiline'], // ✅ to satisfy comma error
    'react/react-in-jsx-scope': 'off', // ✅ not needed for React 17+
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // ✅ allow JSX in .js
    'no-undef': 'off', // ✅ if you’re using test files without importing `test`, `expect`
  },
};
