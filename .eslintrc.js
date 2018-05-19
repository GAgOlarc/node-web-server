module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "warn",
        ],
        "no-console": [
            "off",
        ],
        "no-empty": [
            "warn"
        ],
        "no-debugger": [
            "off"
        ]
    }
};