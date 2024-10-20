import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
    {
        ignores: ['node_modules/**', 'dist/**'],
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.node,
                jest: true,
            }
        },
        plugins: {
            react: pluginReact,
        },
        settings: {
            react: {
                version:"detect",
            },
            eslintPluginReact:{
                version: "^7.37.1"
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            // Add more rules as needed
        },
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
