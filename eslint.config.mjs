import antfu from '@antfu/eslint-config';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default antfu(
  {
    typescript: true,
    stylistic: false
  },
  {
    name: 'rewrite',
    rules: {
      'antfu/top-level-function': 'off',
      'antfu/if-newline': 'off',
      'antfu/curly': 'off',
      'test/prefer-lowercase-title': 'off',
      'no-console': 'warn'
    }
  },
  {
    name: 'imports',
    plugins: {
      'plugin-simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'sort-imports': 'off',
      'import/order': 'off',
      'import/extensions': 'off',
      'plugin-simple-import-sort/exports': 'error',
      'plugin-simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
          ]
        }
      ]
    }
  }
);
