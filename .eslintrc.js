module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
    },
    rules: {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    }
};
