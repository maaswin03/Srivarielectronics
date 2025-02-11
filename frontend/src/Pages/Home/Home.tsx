import Navbar from "@/components/Widgets/Navigation/Navigation";
import "./Home.css";
import HeroSection from "@/components/Widgets/HeroSection/HeroSection";
import Services from "@/components/Widgets/Services/Services";
import AboutUs from "@/components/Widgets/AboutUs/AboutUs";
import Gallery from "@/components/Widgets/Gallery/Gallery";
import ContactUs from "@/components/Widgets/ContactUs/ContactUs";
import Footer from "@/components/Widgets/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Home;
