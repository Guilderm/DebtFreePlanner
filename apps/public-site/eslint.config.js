// eslint.config.js
import globals from 'globals'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vueAccessibilityPlugin from 'eslint-plugin-vuejs-accessibility'
import vitestPlugin from 'eslint-plugin-vitest'

export default [
  {
    // Ignore built files and node_modules
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  {
    // Base configuration
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      vue: pluginVue,
      'vuejs-accessibility': vueAccessibilityPlugin,
      tailwindcss: tailwindcssPlugin,
      vitest: vitestPlugin,
      prettier: pluginPrettier,
    },
    rules: {
      // Include recommended rules from plugins directly
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...pluginVue.configs['vue3-essential'].rules,
      ...vueAccessibilityPlugin.configs.recommended.rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      ...vitestPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
]
