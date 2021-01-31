const path = require('path');

module.exports = {
  entry: 'a',
  output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	resolve: {
		// 引用模块的方式：
		// 1.相对路径 + 文件名
		// 2.文件名: module not found
		modules: [path.resolve(__dirname)]
	},
	optimization: {
		minimize: false
	}
}

