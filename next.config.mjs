
/** @type {import('next').NextConfig} */
const nextConfig = {};

import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const options = {
	theme: 'css-variables',
	onVisitLine(node) {
		if (node.children.length === 0) {
		  node.children = [{type: 'text', value: ' '}];
		}
	  },
	onVisitHighlightedLine(node) {
		node.properties.className.push('highlighted');
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ['word'];
	},
};

const withMDX = (await import('@next/mdx')).default({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypePrettyCode, options], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
	},
});

export default withMDX(nextConfig);
