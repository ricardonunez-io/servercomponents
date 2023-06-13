
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: false,
	},
};


const rehypePrettyCode = require('rehype-pretty-code');

const options = {
	theme: {
		dark: "github-dark",
		light: "github-dark"
	},
	keepBackground: true,
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

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypePrettyCode, options]],
	},
});
	
	
module.exports = withMDX(nextConfig)