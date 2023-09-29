module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react-hooks/recommended', 'standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: ['react', 'react-hooks', 'i18next'],
    rules: {
        indent: [2, 4, {
            MemberExpression: 1
        }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to']
        }],
        'react/display-name': 'off',
        '@typescript-eslint/no-floating-promises': ['warn'],
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports'
        }],
        'react-hooks/rules-of-hooks': 'error',
        // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error',
        // Checks effect dependencies
        'react/self-closing-comp': ['error', {
            component: true,
            html: true
        }]
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts, tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}
