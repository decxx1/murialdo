import type { APIRoute } from 'astro';

// Generate a robots.txt that points to the sitemap index.
// The `site` parameter is provided by Astro and contains the full base URL.
// Example response:
// User-agent: *
// Allow: /
// Sitemap: https://example.com/sitemap-index.xml

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *\nAllow: /\nSitemap: ${sitemapURL.href}`;

export const GET: APIRoute = ({ site }) => {
  // Ensure site is defined; fallback to empty string if not.
  const base = site?.toString() ?? '';
  const sitemapURL = new URL('sitemap-index.xml', base);
  const body = getRobotsTxt(sitemapURL);
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
