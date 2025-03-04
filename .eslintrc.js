// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'warn',
  }
};