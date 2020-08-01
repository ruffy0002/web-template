module.exports = {
	entry: "./src/index.ts",
	target: "node",
	output: {
		path: __dirname + "/build",
		filename: "server.bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { rootMode: "upward" },
			},
		],
	},
	resolve: {
		extensions: ["web.mjs", ".mjs", ".web.js", ".js", ".web.ts", ".ts", ".json"],
	},
	devServer: {
		contentBase: "./dist",
	},
	node: {
		__dirname: true,
	},
};
