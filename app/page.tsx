import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import FontShowcase from "./components/FontShowcase";
import Newsletter from "./components/Newsletter";
import { features } from "./data/dummy-data";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
