const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: {
		app: './src/app.js',
    vendor: ['angular', 'angular-route', 'angular-animate', 'd3']
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								importLoaders: 1
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [precss, autoprefixer];
								}
							}
						},
					]
				})
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
		new HtmlWebpackPlugin({
			template: 'src/assets/index.html',
			inject: 'head'
		}),
		new ExtractTextPlugin({
      filename: "[name].[hash].css",
      allChunks: true
    })
	]
};
