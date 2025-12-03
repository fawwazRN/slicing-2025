import Header from "./components/Header";
import Hero from "./components/Hero";
import Penjelasan from "./components/Penjelasan";
import ServicesPage from "./components/ServicesPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "./components/Logo";
import Testimoni from "./components/Testimoni";
import CaseStudies from "./components/CaseStudies";
import DevelopmentApproach from "./components/DevelopmentApproach";
import Hiring from "./components/hiring";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesPage />
      <Penjelasan />
      <Logo />
      <Testimoni />
      <CaseStudies />
      <DevelopmentApproach />
      <Hiring />
    </>
  );
}

export default App;
