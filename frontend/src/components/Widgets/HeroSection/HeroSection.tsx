import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import WordRotate from "@/components/ui/word-rotate";
import "./HeroSection.css";

import image1 from "@/image/image1.jpg";
import image2 from "@/image/image2.jpg";
import image3 from "@/image/image3.jpg";

const HeroSection: React.FC = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="herosection-1">
        <div className="herosection-2 herosection-3">
          <h1>
            Heyy! We are{" "}
            <span style={{ color: "orangered" }}>Sri Vari Electricals</span>
          </h1>
          <p id="hello" style={{ fontSize: "15px" }}>
            <WordRotate
              words={[
                "DOMESTIC SERVICES",
                "COMMERCIAL SERVICES",
                "INDUSTRIAL SERVICES",
              ]}
            />
          </p>
          <p>
            A dedicated team specializing in industrial, commercial, and
            residential electrical solutions, committed to delivering
            innovative, reliable, and efficient services. We bring expertise in
            installations, maintenance, and automation, ensuring seamless and
            sustainable power solutions for a smarter tomorrow.
          </p>
          <button>Get a Quote</button>
          <button id="hello1">Learn More</button>
        </div>
        <div className="herosection-2 herosection-5">
          <div className="herosection-4">
            <div className="slider">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
              <div className="dots-container">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
          style={{ height: "600px", width: "100%", margin: "auto" }}
        />
      </div>
    </>
  );
};

export default HeroSection;
