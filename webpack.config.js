const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		'path': path.resolve(__dirname, 'public'),
		'filename': 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		compress: true,
		contentBase: path.resolve(__dirname, 'public'),
		inline: true,
		port: 3000
	}
};