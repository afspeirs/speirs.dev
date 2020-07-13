const path = require('path');
const { paths } = require('./config');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: isDev ? {
		main: `./${paths.input}/scripts/main.js`,
		dev: `./${paths.input}/scripts/dev.js`,
	} : `./${paths.input}/scripts/main.js`,
	output: {
		path: path.resolve(__dirname, `${paths.output}/scripts`),
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
