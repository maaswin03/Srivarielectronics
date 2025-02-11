import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import WordRotate from "@/components/ui/word-rotate";
import { Link } from "react-scroll";
import "./HeroSection.css";

import image1 from "@/image/image1.jpg";
import image2 from "@/image/image2.jpg";
import image3 from "@/image/image3.jpg";

const HeroSection: React.FC = () => {
  const images = [image1, image2, image3, image3];
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
          <h2 id="hello" style={{ fontSize: "15px" }}>
            <WordRotate
              words={[
                "RESIDENTIAL SERVICES",
                "COMMERCIAL SERVICES",
                "INDUSTRIAL SERVICES",
                "AUTHORISED DISTRIBUTOR OF NIMBUS LIGHTS",
              ]}
            />
          </h2>
          <p>
            A dedicated team specializing in industrial, commercial, and
            residential electrical solutions. We ensure reliable installations,
            maintenance, and automation for a smarter tomorrow. As authorised
            distributors of Nimbus lights, we offer a wide range of customizable
            electrical products, including lights, fans, and more.
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
            <Link to="services" smooth={true} duration={500} offset={-70}>
              Learn More
            </Link>
          </button>
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
            "absolute inset-0 -z-10 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </>
  );
};

export default HeroSection;
