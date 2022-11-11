const pluginWebc = require('@11ty/eleventy-plugin-webc');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/**/*.webc"
	});
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("content");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy("favicon.ico");
};