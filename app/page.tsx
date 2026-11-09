import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import About from "@/components/sections/About";
import Upgrade from "@/components/sections/Upgrade";
import Highlights from "@/components/sections/Highlights";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Configuration from "@/components/sections/Configuration";
import FloorPlan from "@/components/sections/FloorPlan";
import Specifications from "@/components/sections/Specifications";
import Location from "@/components/sections/Location";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import Preloader from "@/components/Preloader";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Preloader />
      <JsonLd />
      <Hero />
      <Overview />
      <About />
      <Upgrade />
      <Highlights />
      <Amenities />
      <Gallery />
      <Configuration />
      <FloorPlan />
      <Specifications />
      <Location />
      <Faq />
      <Contact />
      <RevealObserver />
    </>
  );
}
