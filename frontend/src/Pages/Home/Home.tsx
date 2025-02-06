import HeroSection from "../../Components/HeroSection/Hero";
import Navbar1 from "../../Components/Navigation/Navbar1/Navbar1";
import NavigationBar from "../../Components/Navigation/NavgationBar/NavigationBar";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <NavigationBar/>
      <HeroSection/>
    </>
  );
}
