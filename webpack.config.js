const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: isDev ? {
		main: './src/scripts/main.js',
		dev: './src/scripts/dev.js',
	} : './src/scripts/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/scripts'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	devtool: isDev ? 'eval' : 'source-map',
	stats: 'errors-warnings',
};
