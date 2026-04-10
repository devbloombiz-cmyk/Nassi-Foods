import { useEffect } from 'react';
import Navigation from '../../components/layout/Navigation';
import CursorTrail from '../../components/effects/CursorTrail';
import PageLoader from '../../components/common/PageLoader';
import ScrollProgress from '../../components/common/ScrollProgress';
import Hero from './Hero';
import ServiceShowcase from '../../components/sections/ServiceShowcase';
import About from './About';
import TeamCTA from '../../components/ui/TeamCTA';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../../components/layout/FooterNew';
import StickyCallAction from '../../components/common/StickyCallAction';

export default function RarevocHome() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <div className="min-h-screen bg-dark-900">
        <CursorTrail />
        <Navigation />
        <Hero />
        <About />
                <ServiceShowcase />
                <TeamCTA />

        <Services />

        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <StickyCallAction />
      </div>
    </>
  );
}
