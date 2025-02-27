import { useState, useEffect } from "react";
import styles from "./GalleryView.module.css";
import Header from "@/components/Gallerycompoents/Header";
import Gallery from "@/components/Gallerycompoents/Gallery";
// import Footer from "@/components/Widgets/Footer/Footer";

export default function GalleryView() {
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
    <div className={styles.app}>
      <Header />
      <Gallery />
      {/* <Footer /> */}
      {showScrollTop && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
