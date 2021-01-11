const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(_dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './public',
    writeToDisc: true,
    historyApiFallback: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new CleanWebpackPlugin()],
};
