// Config for shared and backend
// If this config was put in backend, ts files imported from shared in backend would not be processed by babel-loader
module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-typescript"],
	babelrcRoots: [".", "../shared"],
};
