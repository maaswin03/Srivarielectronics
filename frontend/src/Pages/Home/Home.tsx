import Navbar from "@/components/Widgets/Navigation/Navigation";
import "./Home.css";
import HeroSection from "@/components/Widgets/HeroSection/HeroSection";
import Services from "@/components/Widgets/Services/Services";
import AboutUs from "@/components/Widgets/AboutUs/AboutUs";
import Gallery from "@/components/Widgets/Gallery/Gallery";
import ContactUs from "@/components/Widgets/ContactUs/ContactUs";

function Home() {
      
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Services/>
      <AboutUs/>
      <Gallery/>
      <ContactUs/>
    </>
  );
}

export default Home;
