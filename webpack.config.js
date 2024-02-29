const path = require('path');

module.exports = {
  entry: {
    bundle: './src/ts/app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/common/js'),
    filename: 'bundle.js',
  },
  // mode: 'development',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.json'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // .tsをコンパイルする
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
