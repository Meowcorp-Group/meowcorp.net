
import pluginWebc from "@11ty/eleventy-plugin-webc";

/** @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig*/
export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: 'src/_includes/components/**/*.webc',
	})
}

export const config = {
	dir: {
		input: 'src'
	}
}