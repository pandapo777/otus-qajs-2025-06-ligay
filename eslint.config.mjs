import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  // DOC: https://www.npmjs.com/package/eslint-plugin-jest
  {
    files: ['test/**'],
    ...jest.configs['flat/recommended']
  }
]
