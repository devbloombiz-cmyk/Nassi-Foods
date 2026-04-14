import { useEffect, useState } from "react";
import Navigation from "../../components/layout/Navigation";
import StickyCallAction from "../../components/common/StickyCallAction";
import SiteLoader from "../../components/common/SiteLoader";
import Footer from "../../components/layout/FooterNew";
import ServiceShowcase from "../../components/sections/ServiceShowcase";
import Hero from "./Hero";
import VideoGrid from "./VideoGrid";
import OrderCTA from "./OrderCTA";
import ProcessVideo from "./ProcessVideo";
import Services from "./Services";
import Contact from "./Contact";

export default function NazzifoodsHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      {isLoading && <SiteLoader />}
      <Navigation />
      <Hero />
      <VideoGrid />
      <OrderCTA />
      <ServiceShowcase />
      <Services />
      <ProcessVideo />
      <Contact />
      <Footer />
      <StickyCallAction />
    </div>
  );
}
