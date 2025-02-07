import Navbar from "@/components/Widgets/Navigation/Navigation";
import IconCloud from "@/components/ui/icon-cloud";
import TypingAnimation from "@/components/ui/typing-animation";
import "./Home.css";
import HeroSection from "@/components/Widgets/HeroSection/HeroSection";
import Services from "@/components/Widgets/Services/Services";

const slugs = [
  "python",
  "typescript",
  "javascript",
  "java",
  "react",
  "chartdotjs",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "netlify",
  "amazonaws",
  "mongodb",
  "sql",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "c",
  "flask",
  "clerk",
];

function Home() {
      
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Services/>

      <div className="home-6">
        <div className="home-7">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="home-7 home-9">
          <div className="home-8">
            <h1>SKILLS</h1>
            <p>
              Here are the key skills I excel in, each contributing to my
              effectiveness as a full-stack developer
            </p>
            <p>
              <span id="skilltitle">Languages : </span>
              <TypingAnimation text="Proficient in C, C++, Java, Python, HTML, CSS, and JavaScript, enabling me to tackle a variety of programming challenges." />
            </p>
            <p>
              <span id="skilltitle">Web Development : </span>
              <TypingAnimation text="Proficient in building responsive and dynamic interfaces using React.js, HTML5, CSS3, and JavaScript. Skilled in back-end development with flask , Node.js and Express.js." />
            </p>
            <p>
              <span id="skilltitle">Cloud Platforms : </span>
              <TypingAnimation text="Experience deploying and managing applications on AWS, Vercel, and Netlify. Familiar with serverless functions and cloud services." />
            </p>
            <p>
              <span id="skilltitle">Databases : </span>
              <TypingAnimation text="Skilled in managing both SQL and NoSQL databases like PostgreSQL, MongoDB, and Convex, ensuring data integrity and scalability." />
            </p>
            <p>
              <span id="skilltitle">Development Tools : </span>
              <TypingAnimation text="Comfortable working with Git, GitHub, Docker, and CI/CD pipelines to maintain code quality and automate workflows." />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
