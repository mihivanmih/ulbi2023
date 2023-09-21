module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react-hooks/recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "i18next",
    ],
    rules: {
        indent: [2, 4, { MemberExpression: 1 }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'i18next/no-literal-string': 'warn',
        'react/display-name': 'off',
        "@typescript-eslint/no-floating-promises": ["warn"],
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports'
            }
        ],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'react/self-closing-comp': [
            'error', {
                component: true,
                html: true
            }
        ]
    },
}
