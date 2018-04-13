import webpack from 'webpack';
import path from 'path';

export default {
	context: path.resolve('src'),
	entry: {
		index: path.resolve('src/index.js')
	},
	output: {
		path: path.resolve('../../../target/rest/resources/js/'),
		filename: '[name].bundle.js'
	},
	devServer: {
		open: true,
		contentBase: path.resolve('src')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel-loader',
				type:'javascript/auto'
			}
		]
	},
	resolve: { extensions: [".jsx", ".js", ".json"] }
};