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
              Sri Vari Electrical Contractors are your local approved
              electricians in Coimbatore. We are a small, friendly company
              offering services in the domestic and industrial sector. We offer
              a wide range of electrical services to both domestic customers and
              those customers in the industrial and commercial sectors,
              including renewable energy.
            </p>
            <div className="AboutUs-6">
              <button>Contact Us</button>
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
