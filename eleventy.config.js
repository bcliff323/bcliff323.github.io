const pluginWebc = require('@11ty/eleventy-plugin-webc');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/**/*.webc"
	});
};

const Image = require("@11ty/eleventy-img");
//dist/images/recipe-as-a-service.png
//dist/images/rei-siv.jpg
//dist/images/vacation-vermont.png

(async () => {
	const urls = [
		"https://brianclifford.com/dist/images/recipe-as-a-service.png",
		"https://brianclifford.com/dist/images/rei-siv.jpg",
		"https://brianclifford.com/dist/images/vacation-vermont.png"
	];
	const stats = await Promise.all(urls.map(url => Image(url, {
		width: [300],
		outputDir: "./_site/img/",
		cacheOptions: {
			directory: "./_site/.cache"
		}
	})));
})();