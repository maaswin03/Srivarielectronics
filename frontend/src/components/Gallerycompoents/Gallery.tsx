import { useState, useEffect, useRef } from "react";
import styles from "./Gallery.module.css";

const images = [
  {
    src: "/images/gallery1.jpeg",
    alt: "Image 1",
    description: "Beautiful landscape",
  },
  {
    src: "/images/gallery2.jpeg",
    alt: "Image 2",
    description: "Stunning architecture",
  },
  {
    src: "/images/gallery2.jpeg",
    alt: "Image 3",
    description: "Vibrant cityscape",
  },
  {
    src: "/images/gallery1.jpeg",
    alt: "Image 4",
    description: "Serene nature",
  },
  {
    src: "/images/gallery5.jpeg",
    alt: "Image 5",
    description: "Abstract art",
  },
  {
    src: "/images/gallery4.jpeg",
    alt: "Image 6",
    description: "Colorful patterns",
  },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            id={`image-${index}`}
            className={`${styles.imageContainer} ${
              visibleImages.includes(`image-${index}`) ? styles.visible : ""
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
