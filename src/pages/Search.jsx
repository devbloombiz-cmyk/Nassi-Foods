import React, { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import servicesData from '../data/servicesData';
import projects from '../pages/Rarevoc/courceOrbit/data.jsx';
import testimonialsData from '../pages/Rarevoc/Testimonials.jsx';

// Fallbacks in case import shapes differ
const buildIndex = () => {
  const services = (servicesData && Array.isArray(servicesData))
    ? servicesData.flatMap(s => s.services ? s.services.map(x => ({ type: 'service', title: x.category || s.title, text: (x.items || []).join(' ')})) : [])
    : [];

  const projectsFlat = Array.isArray(projects) ? projects.map(p => ({ type: 'project', title: p.title || p.name, text: (p.description || '') })) : [];

  let testimonials = [];
  if (testimonialsData && Array.isArray(testimonialsData.testimonials)) {
    testimonials = testimonialsData.testimonials.map(t => ({ type: 'testimonial', title: t.author || t.name, text: t.quote || '' }));
  }

  return [...services, ...projectsFlat, ...testimonials];
};

export default function Search() {
  const [query, setQuery] = useState('');
  const index = useMemo(buildIndex, []);

  const fuse = useMemo(() => new Fuse(index, { keys: ['title', 'text'], threshold: 0.35 }), [index]);
  const results = query ? fuse.search(query).map(r => r.item) : [];

  return (
    <div className="min-h-screen section-container py-16">
      <h1 className="text-4xl font-bold mb-6">Search the site</h1>
      <input aria-label="Search" className="w-full p-4 rounded-md bg-dark-800 border border-dark-700 mb-6" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services, projects, testimonials..." />

      <div className="grid gap-4">
        {(query ? results : index).slice(0, 50).map((r, i) => (
          <div key={i} className="p-4 rounded-md bg-dark-800 border border-dark-700">
            <div className="text-sm text-accent-gray">{r.type}</div>
            <div className="font-semibold text-lg">{r.title}</div>
            <div className="text-accent-gray mt-2">{r.text && r.text.substring(0, 300)}</div>
          </div>
        ))}

        {query && results.length === 0 && (
          <div className="text-accent-gray">No results found</div>
        )}
      </div>
    </div>
  );
}
