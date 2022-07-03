import "./App.css";
import "@fontsource/work-sans";
import AboutUs from "./components/aboutUs/AboutUs";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import Navbar from "./components/navbar/Navbar";
import Reasons from "./components/reasons/Reasons";
import Services from "./components/services/Services";
import Stats from "./components/stats/Stats";
import Ads from "./components/ads/Ads";
import Project from "./components/projects/Project";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <Reasons />
      <AboutUs />
      <Services />
      <Stats />
      <Ads />
      <Project />
    </div>
  );
}

export default App;
