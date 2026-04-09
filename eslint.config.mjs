import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,

  // TypeScript strict rules — alineadas con GGA AGENTS.md
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      // ❌ Prohibido: tipo `any`
      '@typescript-eslint/no-explicit-any': 'error',

      // ❌ Prohibido: variables declaradas pero no usadas
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // ❌ Prohibido: catch blocks vacíos (errores silenciados)
      'no-empty': ['error', { allowEmptyCatch: false }],

      // ❌ Prohibido: console.log en producción
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // ❌ Prohibido: import * (usar named imports)
      'no-restricted-syntax': [
        'error',
        {
          selector: "ImportDeclaration[specifiers.0.type='ImportNamespaceSpecifier']",
          message: 'Usá named imports en vez de import *. Ej: import { useState } from "react"',
        },
      ],

      // ❌ Prohibido: default exports (preferir named exports)
      'import/no-default-export': 'off', // Next.js pages requieren default export

      // ✅ Requerido: tipos de retorno explícitos en funciones exportadas
      '@typescript-eslint/explicit-module-boundary-types': 'off', // muy ruidoso para React

      // ❌ Prohibido: non-null assertion sin justificación
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // ❌ Prohibido: empty interfaces
      '@typescript-eslint/no-empty-interface': 'error',

      // ❌ Prohibido: usar `var`
      'no-var': 'error',

      // ✅ Requerido: const cuando la variable no se reasigna
      'prefer-const': 'error',
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '*.config.*',
    'node_modules/**',
  ]),
]);

export default eslintConfig;
