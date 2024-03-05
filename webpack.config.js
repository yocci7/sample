const path = require('path');

module.exports = {
  // エントリーポイント: プロジェクトのメインのTypeScriptファイル
  entry: {
    bundle: './src/ts/app.ts',
  },
  // 出力設定: コンパイル結果を出力するディレクトリとファイル名
  output: {
    path: path.resolve(__dirname, 'dist/common/js'), // 出力先ディレクトリ
    filename: 'bundle.js', // 出力ファイル名
  },
  // ビルドモード: 開発モードでビルドするか、本番モードでビルドするかを指定
  mode: 'development', // 開発モード
  // mode: 'production', // 本番モード

  // ファイル解決設定: 拡張子が省略されたときに探索する対象拡張子を指定
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.json'], // TypeScriptやJavaScriptの拡張子を指定
  },

  // 開発サーバー設定
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 開発サーバーの静的ファイルのルートディレクトリ
    },
    open: true, // ブラウザを自動的に開く
    hot: true, // ホットリロードを有効化
  },

  // モジュール設定: モジュールごとのルールを指定
  module: {
    rules: [
      {
        test: /\.ts$/, // .tsファイルを対象にする
        use: 'ts-loader', // ts-loaderを使用してコンパイル
        exclude: /node_modules/, // node_modulesディレクトリは除外
      },
    ],
  },
};
