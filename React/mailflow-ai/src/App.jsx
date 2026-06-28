import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import BentoGrid from "./components/BentoGrid";
import Stats from "./components/Stats";
import Partner from "./components/Partner";
import Industries from "./components/Industries";
import Timeline from "./components/Timeline";

import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Why Choose Joas AI */}
      <Trusted />

      {/* AI Platform Bento Grid */}
      <BentoGrid />

      {/* Business Metrics */}
      <Stats />

      {/* Official Partner Section */}
      <Partner />

      {/* Industries */}
      <Industries />

      {/* AI Implementation Process */}
      <Timeline />

      

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </div> 
  );
}

export default App;