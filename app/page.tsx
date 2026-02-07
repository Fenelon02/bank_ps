import { CreditCard, Factory } from "lucide-react";
import APICard from "./components/apiCard/APICard";
import Benefits from "./components/benefits/Benefits";
import HeroSection from "./components/heroSection/HeroSection";
import Header from "./components/layout/Header";
import Marquee from "./components/marquee/Marquee";
import Offered_services from "./components/offered_services/Offered_services";
import CreditCardSection from "./components/creditCradSection/CreditCardSection";
import FAQSection from "./components/FAQ/FAQSection";
import Footer from "./components/ui/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />  
      <HeroSection />
      <Benefits />
      <Marquee/>
      <APICard/>
      <Offered_services/>
      <CreditCardSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
