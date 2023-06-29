import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://servercomponents.dev',
			lastModified: new Date(),
		},
		{
			url: 'https://servercomponents.dev/what-are-react-server-components',
			lastModified: new Date(),
		},
		{
			url: 'https://servercomponents.dev/the-problems-rscs-solve',
			lastModified: new Date(),
		},
		{
			url: 'https://servercomponents.dev/credits',
			lastModified: new Date(),
		},
		{
			url: 'https://servercomponents.dev/incremental-adoption',
			lastModified: new Date(),
		},
	]
}
