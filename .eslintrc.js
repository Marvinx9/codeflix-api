module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Para TypeScript, se aplicável
    'prettier', // Faz o ESLint seguir as regras do Prettier
  ],
  parser: '@typescript-eslint/parser', // Se você estiver usando TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'], // Se TypeScript for necessário
  rules: {
    'prettier/prettier': 'error', // Para que o ESLint use Prettier
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
