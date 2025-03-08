import "./AboutUs.css";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import image1 from "/images/Gallery/Gallery12.webp";

export default function AboutUs() {
  return (
    <>
      <div className="AboutUs">
        <div className="AboutUs-1">
          <div className="AboutUs-2 AboutUs-3">
            <div className="AboutUs-5">
              <h1>About Us</h1>
              <p>
                We, Sri Vari Electricals were established in 2004.We are a
                dedicated team specializing in industrial, commercial, and
                residential electrical solutions,with 20 years of expertise
                serving over 500 clients through reliable installations, power
                management, and automation. With a team of 45+ skilled
                professionals, we became Authorized Distributors of Nimbus
                Lights in 2014, offering high-quality and customizable
                electrical products, including lights, fans, and more, while
                continuing to deliver innovative and efficient solutions for
                homes, businesses, and industries.
              </p>
              <div className="AboutUs-6">
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919843079070?text=Hello,%20I%20am%20interested%20in%20your%20services!",
                      "_blank"
                    )
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="AboutUs-2 AboutUs-4">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/hsoGpoDxyKg?si=v9OpYEZZ22MWM4eT"
                thumbnailSrc={image1}
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/hsoGpoDxyKg?si=v9OpYEZZ22MWM4eT"
                thumbnailSrc={image1}
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
