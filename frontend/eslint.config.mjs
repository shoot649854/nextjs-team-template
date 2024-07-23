import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
// import { fixupConfigRules } from '@eslint/compat';
import importPlugin from 'eslint-plugin-import';
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import nextConfig from 'eslint-config-next/core-web-vitals';
// import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReactConfig,
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImportsPlugin,
      import: importPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs['recommended-type-checked'].rules,
      ...tseslint.configs.stylistic.rules,
      ...pluginReactConfig.rules,
      ...nextConfig.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: 'react**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@/app/**,@/features/**,@/libs/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{@/components/**,@/pages/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './**.module.css',
              group: 'index',
              position: 'after',
            },
          ],
        },
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'src', prefix: '@' },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  },
];
