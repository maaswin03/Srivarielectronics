import React, { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";
// import GridPattern from "@/components/ui/grid-pattern";
import WordRotate from "@/components/ui/word-rotate";
import "./HeroSection.css";

import image1 from "/images/AboutUs/AboutUs1.webp";
import image2 from "/images/AboutUs/AboutUs2.webp";
import image3 from "/images/AboutUs/AboutUs3.webp";
import image4 from "/images/AboutUs/AboutUs4.webp";
import image5 from "/images/AboutUs/AboutUs5.webp";

const HeroSection: React.FC = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  ``;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Preload only the first image for LCP optimization
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = image1;
    preloadLink.type = "image/webp";
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index);
  // };

  return (
    <>
      <div className="herosection">
        <div className="herosection-1">
          <div className="herosection-2 herosection-3">
            <h1>
              Heyy! We are{" "}
              <span style={{ color: "orangered" }}>Sri Vari Electricals</span>
            </h1>
            <h2 id="hello" style={{ fontSize: "15px" }}>
              <WordRotate
                words={[
                  "RESIDENTIAL SERVICES",
                  "COMMERCIAL SERVICES",
                  "INDUSTRIAL SERVICES",
                  "A.D OF NIMBUS LIGHTS",
                ]}
              />
            </h2>
            <p>
              A dedicated team specializing in industrial, commercial, and
              residential electrical solutions. We ensure reliable
              installations, power management, and automation for a smarter
              tomorrow. As authorized distributors of Nimbus lights, we offer a
              wide range of customizable electrical products, including lights,
              fans, and more.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919843079070?text=Hello,%20I%20am%20interested%20in%20your%20services!",
                  "_blank"
                )
              }
            >
              Get a Quote
            </button>
            <button id="hello1">
              <a
                href="./brochure/srivarielectricals.pdf"
                download="Our_Products.pdf"
              >
                Download brochure
              </a>
            </button>
          </div>
          <div
            className="herosection-2 herosection-5"
            style={{ position: "relative" }}
          >
            <div className="herosection-4">
              <div className="slider">
                <button className="nav-btn prev-btn" onClick={goToPrevious}>
                  &#10094;
                </button>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                    style={{
                      backgroundImage:
                        index === currentIndex ? `url(${image})` : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                ))}
                <button className="nav-btn next-btn" onClick={goToNext}>
                  &#10095;
                </button>
                <div className="dots-container">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              .nav-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: orangered;
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                cursor: pointer;
                z-index: 10;
                opacity: 0.6;
              }
              .prev-btn {
                left:10px;
              }
              .next-btn {
                right: 10px;
              }
            `}</style>
          </div>
        </div>
      </div>
      {/* <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 -z-10 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      /> */}
    </>
  );
};

export default HeroSection;
