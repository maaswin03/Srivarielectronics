import "./Hero.css";

export default function HeroSection() {
  return (
    <>
      <div className="HeroSection-box1">
        <div className="HeroSection-box2">
          <div className="HeroSection-box3">
            <h3>WELCOME TO SRI VARI ELECTRICALS</h3>
            <h1>Powering Your Future with Reliable Electrical Solutions</h1>
            <p>
              From residential to commercial projects, Sri Vari Electricals
              provides top-notch electrical services with a focus on safety and
              innovation.
            </p>
            <div className="HeroSection-box4">
              <button className="btn" id="learnmore">Learn More</button>
              <button className="btn">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
