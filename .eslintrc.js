module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard",
  ],
  // add your custom rules here
  rules: {
    'no-underscore-dangle': 1,
    'prefer-destructuring': 1,
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'prefer-const': 0,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true,
      },
    ],
    'no-empty': [
      2,
      {
        allowEmptyCatch: true,
      },
    ],
    'default-case': 0,
    'no-case-declarations': 0,
    'class-methods-use-this': 0,
    'no-script-url': 0,
    indent: ['error', 2],
    semi: ['error', 'never'],
    'eol-last': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-unneeded-ternary': 1,
    'no-nested-ternary': 0,
    'max-len': [2, 150],
    'no-return-assign': 0,
    'dot-notation': 1,
    'no-param-reassign': 1,
    'func-names': 1,
    "no-dupe-keys": 2, //禁止对象出现重复key
    "space-infix-ops": 2, // 操作符空格
    'no-useless-constructor': 0,
    "no-mixed-spaces-and-tabs": 1,
    "comma-dangle": ["error", "never"],
    'no-plusplus': 0,
    'no-param-reassign': 0, // Disallow Reassignment of Function Parameters
    'no-multi-assign': 0, // Disallow Use of Chained Assignment Expressions
    'consistent-return': 0, // require return statements to either always or never specify values
    'no-unused-vars': 1,
    camelcase: 'off',
    'comma-spacing': [2, { before: false, after: true }]
  },
};
