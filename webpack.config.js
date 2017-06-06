const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.jsx',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
		]
	},
	plugins: [ // plugins - расширяет функционал webpak'a
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		})
	]
};
