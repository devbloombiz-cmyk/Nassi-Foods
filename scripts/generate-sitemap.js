import fs from 'fs';
import path from 'path';

// Configure your site root and the routes to include
const siteRoot = 'https://rarevoc.work';

// Simple static routes - expand if you add dynamic routes
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/contact',
  '/testimonials',
  '/search'
];

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const urls = staticRoutes.map((route) => `  <url>\n    <loc>${siteRoot}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap written to public/sitemap.xml');
