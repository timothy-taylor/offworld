module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            rules: {
                "react/react-in-jsx-scope": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
                "@typescript-eslint/ban-ts-comment": "off",
                "prefer-const": "off",
            },
            parserOptions: {
                project: ["./tsconfig.json", "./tsconfig.node.json"],
            },
        },
    ],
};
