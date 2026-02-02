import Benefits from "./components/benefits/Benefits";
import HeroSection from "./components/heroSection/HeroSection";
import Header from "./components/layout/Header";
import Marquee from "./components/marquee/Marquee";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />  
      <HeroSection />
      <Benefits />
      <Marquee/>
    </div>
  );
}
