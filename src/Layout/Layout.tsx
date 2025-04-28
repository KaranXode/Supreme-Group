import { useEffect, useState } from "react";
import FormSection from "../Components/Form/FormSection";
import HeroSection from "../Components/HeroSection/HeroSection";
import MobileViewSlider from "../Components/MobileViewSlider/MobileViewSlider";
import Automotive from "../Pages/Automotive/Automotive";

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <HeroSection />
      {isMobile ? <MobileViewSlider /> : <Automotive />}
      <FormSection />
    </>
  );
}
