import { useState, useEffect, useRef } from "react";
import styles from "./Gallery.module.css";

const images1 = [
  {
    src: "/images/Fans/Fans1.webp",
    alt: "Image 1",
    description: "Modern LED lighting installation",
  },
  {
    src: "/images/Fans/Fans2.webp",
    alt: "Image 2",
    description: "High-efficiency ceiling fan",
  },
  {
    src: "/images/Fans/Fans3.webp",
    alt: "Image 3",
    description: "Industrial HVLS fan for large spaces",
  },
  {
    src: "/images/Fans/Fans4.webp",
    alt: "Image 4",
    description: "COB downlights for bright interiors",
  },
  {
    src: "/images/Fans/Fans5.webp",
    alt: "Image 5",
    description: "Magnetic track lighting system",
  },
  {
    src: "/images/Fans/Fans6.webp",
    alt: "Image 6",
    description: "Smart lighting automation setup",
  },
  {
    src: "/images/Fans/Fans7.webp",
    alt: "Image 7",
    description: "Decorative panel lights",
  },
  {
    src: "/images/Fans/Fans8.webp",
    alt: "Image 8",
    description: "Outdoor floodlight installation",
  },
  {
    src: "/images/Fans/Fans9.webp",
    alt: "Image 9",
    description: "Energy-efficient street lighting",
  },
  {
    src: "/images/Fans/Fans10.webp",
    alt: "Image 10",
    description: "LED strip lights for ambient lighting",
  },
  {
    src: "/images/Fans/Fans11.webp",
    alt: "Image 11",
    description: "Smart home lighting controls",
  },
  {
    src: "/images/Fans/Fans12.webp",
    alt: "Image 12",
    description: "Industrial high bay lighting setup",
  },
  {
    src: "/images/Fans/Fans13.webp",
    alt: "Image 13",
    description: "Low-voltage decorative lighting",
  },
];

const images2 = [
  {
    src: "/images/Gallery/Gallery1.webp",
    alt: "Image 1",
    description: "Modern LED lighting installation",
  },
  {
    src: "/images/Gallery/Gallery2.webp",
    alt: "Image 2",
    description: "High-efficiency ceiling fan",
  },
  {
    src: "/images/Gallery/Gallery3.webp",
    alt: "Image 3",
    description: "Industrial HVLS fan for large spaces",
  },
  {
    src: "/images/Gallery/Gallery4.webp",
    alt: "Image 4",
    description: "COB downlights for bright interiors",
  },
  {
    src: "/images/Gallery/Gallery5.webp",
    alt: "Image 5",
    description: "Magnetic track lighting system",
  },
  {
    src: "/images/Gallery/Gallery6.webp",
    alt: "Image 6",
    description: "Smart lighting automation setup",
  },
  {
    src: "/images/Gallery/Gallery7.webp",
    alt: "Image 7",
    description: "Decorative panel lights",
  },
  {
    src: "/images/Gallery/Gallery8.webp",
    alt: "Image 8",
    description: "Outdoor floodlight installation",
  },
  {
    src: "/images/Gallery/Gallery9.webp",
    alt: "Image 9",
    description: "Energy-efficient street lighting",
  },
  {
    src: "/images/Gallery/Gallery10.webp",
    alt: "Image 10",
    description: "LED strip lights for ambient lighting",
  },
  {
    src: "/images/Gallery/Gallery11.webp",
    alt: "Image 11",
    description: "Smart home lighting controls",
  },
  {
    src: "/images/Gallery/Gallery12.webp",
    alt: "Image 12",
    description: "Industrial high bay lighting setup",
  },
  {
    src: "/images/Gallery/Gallery13.webp",
    alt: "Image 13",
    description: "Low-voltage decorative lighting",
  },
  {
    src: "/images/Gallery/Gallery14.webp",
    alt: "Image 14",
    description: "Customizable neon LED lights",
  },
  {
    src: "/images/Gallery/Gallery15.webp",
    alt: "Image 15",
    description: "Power-efficient lighting fixtures",
  },
  {
    src: "/images/Gallery/Gallery16.webp",
    alt: "Image 16",
    description: "Electrical wiring and fittings",
  },
  {
    src: "/images/Gallery/Gallery17.webp",
    alt: "Image 17",
    description: "Commercial lighting solutions",
  },
  {
    src: "/images/Gallery/Gallery18.webp",
    alt: "Image 18",
    description: "Smart LED floodlights",
  },
  {
    src: "/images/Gallery/Gallery19.webp",
    alt: "Image 19",
    description: "Efficient power supply units",
  },
  {
    src: "/images/Gallery/Gallery20.webp",
    alt: "Image 20",
    description: "LED batten lights for offices",
  },
  {
    src: "/images/Gallery/Gallery21.webp",
    alt: "Image 21",
    description: "Decorative rope lights setup",
  },
  {
    src: "/images/Gallery/Gallery22.webp",
    alt: "Image 22",
    description: "High-performance SMPS units",
  },
  {
    src: "/images/Gallery/Gallery23.webp",
    alt: "Image 23",
    description: "Custom ceiling fan designs",
  },
  {
    src: "/images/Gallery/Gallery24.webp",
    alt: "Image 24",
    description: "Track lighting for modern interiors",
  },
  {
    src: "/images/Gallery/Gallery25.webp",
    alt: "Image 25",
    description: "Smart control panel lighting",
  },
  {
    src: "/images/Gallery/Gallery26.webp",
    alt: "Image 26",
    description: "Emergency exit lighting solutions",
  },
  {
    src: "/images/Gallery/Gallery27.webp",
    alt: "Image 27",
    description: "Customized HVLS fan designs",
  },
];

const Gallery = () => {
  const [visibleFans, setVisibleFans] = useState<string[]>([]);
  const [visibleLighting, setVisibleLighting] = useState<string[]>([]);

  const fansRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lightingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFans((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    fansRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLighting((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    lightingRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.gallery1}>
        <h2>Premium Ceiling Fans for Every Space</h2>
      </div>
      <div className={styles.gallery}>
        {images1.map((image, index) => (
          <div
            key={index}
            ref={(el) => (fansRefs.current[index] = el)}
            id={`fans-${index}`}
            className={`${styles.imageContainer} ${
              visibleFans.includes(`fans-${index}`) ? styles.visible : ""
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              style={{ height: "500px" }}
            />
            <div className={styles.description}>{image.description}</div>
          </div>
        ))}
      </div>

      <div className={styles.gallery1}>
        <h2>Lighting & Electrical Solutions</h2>
      </div>
      <div className={styles.gallery}>
        {images2.map((image, index) => (
          <div
            key={index}
            ref={(el) => (lightingRefs.current[index] = el)}
            id={`lighting-${index}`}
            className={`${styles.imageContainer} ${
              visibleLighting.includes(`lighting-${index}`)
                ? styles.visible
                : ""
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
            <div className={styles.description}>{image.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
