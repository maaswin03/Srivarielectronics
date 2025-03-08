import { useState, useEffect, useRef } from "react";
import styles from "./Gallery.module.css";

const images1 = [
  {
    src: "/images/Fans/Fans1.webp",
    alt: "Image 1",
    description: "Brown luminaire ceiling Fan",
  },
  {
    src: "/images/Fans/Fans13.webp",
    alt: "Image 2",
    description: "Crystal cascade ceiling fan",
  },
  {
    src: "/images/Fans/Fans2.webp",
    alt: "Image 3",
    description: "Dazzling delight ceiling fan",
  },
  {
    src: "/images/Fans/Fans3.webp",
    alt: "Image 4",
    description: "Icy whirlwind ceiling fan",
  },
  {
    src: "/images/Fans/Fans4.webp",
    alt: "Image 5",
    description: "Ninja whirl ceiling fan",
  },
  {
    src: "/images/Fans/Fans5.webp",
    alt: "Image 6",
    description: "Rosdorf Park Houstyn Dimmable Crystal Ceiling Fan",
  },
  {
    src: "/images/Fans/Fans6.webp",
    alt: "Image 7",
    description: "Smokey serenade ceiling fan",
  },
  {
    src: "/images/Fans/Fans7.webp",
    alt: "Image 8",
    description: "Snowy frost ceiling fan",
  },
  {
    src: "/images/Fans/Fans8.webp",
    alt: "Image 9",
    description: "Supernova Waves ceiling fan",
  },
  {
    src: "/images/Fans/Fans9.webp",
    alt: "Image 10",
    description: "Talkative breeze ceiling fan",
  },
  {
    src: "/images/Fans/Fans10.webp",
    alt: "Image 11",
    description: "Walnut wonder ceiling fan",
  },
  {
    src: "/images/Fans/Fans11.webp",
    alt: "Image 12",
    description: "White comet ceiling fan",
  },
  {
    src: "/images/Fans/Fans12.webp",
    alt: "Image 13",
    description: "Wooden winds ceiling fan",
  },
];

const Gallery = () => {
  const [visibleFans, setVisibleFans] = useState<string[]>([]);
  const fansRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleFans([]); // Reset visible fans when the component mounts
  
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
  

  return (
    <>
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
    </>
  );
};

export default Gallery;
