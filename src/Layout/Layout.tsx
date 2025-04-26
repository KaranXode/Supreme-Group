import FormSection from "../Components/Form/FormSection";
import HeroSection from "../Components/HeroSection/HeroSection";
import Automotive from "../Pages/Automotive/Automotive";

export default function Layout() {
  return (
    <>
      <HeroSection />
      <Automotive/>
      <FormSection />
    </>
  );
}
