import Navbar from "@/components/Widgets/Navigation/Navigation";
import styles from "./Home.module.css";
import HeroSection from "@/components/Widgets/HeroSection/HeroSection";
import Services from "@/components/Widgets/Services/Services";
import AboutUs from "@/components/Widgets/AboutUs/AboutUs";
import Gallery from "@/components/Widgets/Gallery/Gallery";
import ContactUs from "@/components/Widgets/ContactUs/ContactUs";
import Footer from "@/components/Widgets/Footer/Footer";
import Products from "@/components/Widgets/Products/Products";
import { useState, useEffect } from "react";
import AboutUsSection from "@/components/Widgets/Aboutfounder/AboutFounder";

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <Navbar />
        <div id="home">
          <HeroSection />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div>
          <AboutUsSection/>
        </div>
        <div id="contactUs">
          <ContactUs />
        </div>
        <Footer />
        {showScrollTop && (
          <button className={styles.scrollTop} onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
