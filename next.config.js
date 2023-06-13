
/** @type {import('next').NextConfig} */
const nextConfig = {};

const rehypePrettyCode = require('rehype-pretty-code');

const options = {
	theme: {
		dark: "github-dark",
		light: "github-light"
	},
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
	onParse(tree) {
        (async () => {
            const visit = (await import('unist-util-visit')).default;
    
            visit(tree, 'element', node => {
                if (node.tagName === 'pre') {
                    // Find the first 'code' child
                    const codeChild = node.children.find(child => child.tagName === 'code');
                    if (codeChild) {
                        // Copy the 'data-theme' attribute from the 'code' child to the 'pre' node
                        node.properties['data-theme'] = codeChild.dataset.theme;
                    }
                }
            });
        })();
    }
};

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypePrettyCode, options]],
	},
});
	
	
module.exports = withMDX(nextConfig)