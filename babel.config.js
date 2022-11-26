module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						components: "./src/components",
						navigations: "./src/navigations",
						screens: "./src/screens",
						assets: "./src/assets",
						types: "./src/types",
						src: "./src"
					}
				}
			]
		]
	};
};
