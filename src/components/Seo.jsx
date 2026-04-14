import React from 'react';

export default function Seo({
  title = 'Nazzifoods - Ready Made Mix Packages',
  description = 'Nazzifoods provides premium ready-made mix packages for homes, retailers, and food businesses with reliable quality and taste.',
  url = 'https://nazzifoods.com',
  image = 'https://nazzifoods.com/og-image.png',
  keywords = 'nazzifoods, ready mix, food mix package, instant mix, retail food products, bulk food supply',
}) {
  const org = {
    "@type": "Organization",
    "name": "Nazzifoods",
    "url": url,
    "logo": "https://nazzifoods.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/nazzifoods"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+919645588095",
      "contactType": "customer service",
      "areaServed": "IN"
    }]
  };

  const serviceSchemas = [
    {
      "@type": "Service",
      "name": "Ready Mix Retail Packs",
      "description": "Shelf-ready food mix packages for modern retail stores.",
      "provider": { "@type": "Organization", "name": "Nazzifoods", "url": url }
    },
    {
      "@type": "Service",
      "name": "Bulk Food Mix Supply",
      "description": "Consistent ready-made mix supply for businesses and distributors.",
      "provider": { "@type": "Organization", "name": "Nazzifoods", "url": url }
    }
  ];

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
