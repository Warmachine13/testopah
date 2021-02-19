module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'transform-flow-strip-types'],
    },
  },
};
