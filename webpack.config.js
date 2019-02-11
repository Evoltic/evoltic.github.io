const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputDirectory = 'dist';

module.exports = {
		entry: [
				'./src/index.js',
				'./src/index.scss',
		],
		output: {
				path: path.join(__dirname, outputDirectory),
				filename: 'bundle.js'
		},
		module: {
				rules: [
						{
								test: /\.js$/,
								exclude: /node_modules/,
								use: {
										loader: 'babel-loader'
								}
						},
					{
						test: /\.scss$/,
						use: [
							"style-loader",
							"css-loader",
							"sass-loader"
						]
					},
						{
								test: /\.(png|jpg|svg|gif|docx)$/,
								use: [
										{
												loader: 'url-loader',
												options: {
														limit: 8192
												}
										}
								]
						},
						{
								test: /\.(html)$/,
								use: {
										loader: 'html-loader',
										options: {
												attrs: [':data-src', 'img:src', ':data-docx'],
												interpolate: true
										}
								}
						},
						{
								test: /\.(eot|woff|woff2|ttf)$/,
								loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
						},
						{
							test: /\.s?css$/,
							use: [
								MiniCssExtractPlugin.loader,
								"css-loader",
								"sass-loader"
							]
						}
				]
		},
		devServer: {
				port: 3000,
				open: true
		},
		plugins: [
				new CleanWebpackPlugin([outputDirectory]),
				new MiniCssExtractPlugin({
					filename: "[name].css",
					chunkFilename: "[id].css"
				}),
				new HtmlWebpackPlugin({
					template: 'src/index.html',
					favicon: './src/favicon.png'
				})
		]
};
