import "./AboutUs.css";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import image1 from "@/image/image1.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="AboutUs-1">
        <div className="AboutUs-2 AboutUs-3">
          <div className="AboutUs-5">
            <h1>About Us</h1>
            <p>
              Sri Vari Electricals is your trusted partner for electrical
              solutions. We are a dedicated company providing expert services in
              the domestic, industrial, and commercial sectors. Our offerings
              include a wide range of electrical services, ensuring reliability,
              efficiency, and innovation in every project.
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
    </>
  );
}
