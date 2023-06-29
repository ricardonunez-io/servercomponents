import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/, api/opengraph-image',
		},
		sitemap: 'https://servercomponents.dev/sitemap.xml',
	}
}
