/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const path = require('path');

module.exports = {
  extends: [
    'plugin:@wso2/typescript',
    'plugin:@wso2/react',
    'plugin:@wso2/strict',
    'plugin:@wso2/internal',
    'plugin:@wso2/prettier',
    'plugin:@wso2/jest',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    project: [path.resolve(__dirname, 'tsconfig.lib.json'), path.resolve(__dirname, 'tsconfig.eslint.json')],
  },
  plugins: ['@wso2'],
  rules: {
    // In `SignIn.tsx` we are using non dot notation to access the object properties.
    // TODO: Refactor the code to use dot notation.
    '@typescript-eslint/dot-notation': 'off',
    // We are throwing custom exceptions in the codebase.
    // Hence, turning this off to avoid linting errors. (https://eslint.org/docs/latest/rules/no-throw-literal#known-limitations)
    '@typescript-eslint/no-throw-literal': 'off',
    // TODO: Fix this and enable.
    // Occurred while linting /packages/react/src/utils/crypto-utils.ts:33
    // Rule: "@typescript-eslint/no-useless-constructor"
    '@typescript-eslint/no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
  },
};
