const esbuild = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

esbuild
	.build({
		entryPoints: ["./src/index.tsx"],
		bundle: true,
		outfile: "./public/bundle.js",
		plugins: [sassPlugin()],
		watch: {
			onRebuild(error) {
				if (error) {
						console.error('watch build failed:', error);
					} else {
						console.log('watch build succeeded');
					}
				},
			},
	})
	.then(() => {
		console.log('watching...')
	})
	.catch((e) => console.error(e.message));
