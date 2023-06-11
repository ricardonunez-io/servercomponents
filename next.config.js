
/** @type {import('next').NextConfig} */
const nextConfig = {
/* 	experimental: {
		mdxRs: true,
	},
 */};


const rehypePrettyCode = require('rehype-pretty-code');

const options = {
	theme: "github-dark",
};

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypePrettyCode, options]],
	},
});
	
	
module.exports = withMDX(nextConfig)