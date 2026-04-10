import React from 'react';
import { services } from '../data/servicesData';

export default function Seo({
  title = 'Rarevoc - Creative Digital Agency',
  description = "Rarevoc creates memorable brands, web experiences and growth strategies — Branding, Product, Growth and Future Innovation.",
  url = 'https://rarevoc.work',
  image = 'https://rarevoc.work/og-image.png',
  keywords = 'branding, digital agency, design, development, marketing, AI, product, seo, performance marketing',
}) {
  const org = {
    "@type": "Organization",
    "name": "Rarevoc",
    "url": url,
    "logo": "https://rarevoc.work/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/rarevoc",
      "https://twitter.com/rarevoc",
      "https://www.instagram.com/rarevoc"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+919645588095",
      "contactType": "customer service",
      "areaServed": "IN"
    }]
  };

  // Build Service schema for each service category/subcategory
  const serviceSchemas = [];
  try {
    if (Array.isArray(services)) {
      services.forEach((svc) => {
        if (Array.isArray(svc.services)) {
          svc.services.forEach((sub) => {
            serviceSchemas.push({
              "@type": "Service",
              "name": sub.category || svc.title,
              "description": (sub.items || []).join('. '),
              "provider": { "@type": "Organization", "name": "Rarevoc", "url": url }
            });
          });
        }
      });
    }
  } catch (e) {
    // safe fallback - do nothing
  }

  const graph = [
    { "@context": "https://schema.org", "@graph": [org, ...serviceSchemas] }
  ];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Graph (Organization + Services) */}
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </>
  );
}
