// apps/public-site/eslint.config.js

import globals from 'globals'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vueAccessibilityPlugin from 'eslint-plugin-vuejs-accessibility'
import vueParser from 'vue-eslint-parser'

// Use flat config recommended by eslint-plugin-vue for Vue 3
const vueConfig = pluginVue.configs['flat/recommended']

// Import recommended configurations from other plugins
const recommendedConfigs = [
  typescriptEslintPlugin.configs.recommended,
  vueAccessibilityPlugin.configs.recommended,
  tailwindcssPlugin.configs.recommended,
  pluginPrettier.configs.recommended,
]

export default [
  {
    // Ignore built files, node_modules, and configuration files
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
      'nuxt.config.ts',
      'eslint.config.js',
      'tailwind.config.js',
    ],
  },
  {
    // Base configuration for linting Vue, JS, and TypeScript files
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      vue: pluginVue,
      'vuejs-accessibility': vueAccessibilityPlugin,
      tailwindcss: tailwindcssPlugin,
      prettier: pluginPrettier,
    },
    rules: {
      // Merge recommended rules from all plugins
      ...vueConfig.rules,
      ...recommendedConfigs.reduce((acc, config) => {
        return { ...acc, ...config.rules }
      }, {}),
      // Custom rules
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // Keep the migration rule enabled
      'tailwindcss/migration-from-tailwind-2': 'warn',
    },
  },
]
