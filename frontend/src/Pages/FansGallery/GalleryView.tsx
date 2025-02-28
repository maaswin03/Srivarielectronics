import { useState, useEffect } from "react";
import styles from "./GalleryView.module.css";
import Header from "@/components/FansGalleryComponent/Header";
import Gallery from "@/components/FansGalleryComponent/Gallery";

export default function FansGalleryView() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {

    window.scrollTo(0, 0);
    
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
      <Gallery/>
      {/* <Footer /> */}
      {showScrollTop && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
