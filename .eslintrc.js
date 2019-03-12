module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:jest/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state",
          "acc",
          "e",
          "ctx",
          "req",
          "request",
          "res",
          "response",
          "$scope"
        ]
      }
    ],
    'no-shadow': [
      "error",
        { 
         "allow": ["state"] 
        }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "prefer-arrow-callback": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
  }
};
