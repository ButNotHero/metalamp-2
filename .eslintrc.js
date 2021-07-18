module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.*?.json',
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-undef': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/semi': ['error'],
    'max-len': [
      'error',
      {
        code: 140,
      },
    ],
    'prettier/prettier': 'error',
  },
};
