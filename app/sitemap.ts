import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/rooms', '/gallery', '/attractions', '/contact'];

    return routes.map((route) => ({
        url: `${SITE_CONFIG.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
