// eslint.config.js
import eslintPlugin from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        process: 'readonly',
        console: 'readonly',
        test: 'readonly',
        expect: 'readonly'
      }
    },
    plugins: {
      eslint: eslintPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
    },
  },
];
