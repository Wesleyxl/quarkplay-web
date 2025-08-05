import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import hooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react/configs/recommended.js'
import globals from 'globals'
import ts from 'typescript-eslint'

export default [
  // Configurações base
  js.configs.recommended,
  ...ts.configs.recommended,
  react,
  {
    // Define ambientes globais (browser, ES2025, etc.)
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // Plugins adicionais
    plugins: {
      'react-hooks': hooks,
      'react-refresh': refresh,
    },
    // Regras personalizadas (modernas e estritas)
    rules: {
      // React 19+
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/self-closing-comp': 'error',
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        { additionalHooks: '(useMemoizedFn|useLatestRef)' },
      ],

      // React Refresh (Fast Refresh)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, allowExportNames: ['metadata'] },
      ],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',

      // Boas práticas JavaScript/TypeScript moderno
      'no-constructor-return': 'error',
      'no-promise-executor-return': 'error',
      'no-unreachable-loop': 'error',
      'require-atomic-updates': 'error',
      'default-param-last': 'error',
      'no-constant-binary-expression': 'error',
    },
  },
  // Prettier (SEMPRE por último)
  prettier,
]
