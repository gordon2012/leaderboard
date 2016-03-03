var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: [
					'react-hot',
					'babel?cacheDirectory,presets[]=react,presets[]=es2015'
				],
				include: path.join(__dirname, 'src')
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
