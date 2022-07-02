import "./App.css";
import "@fontsource/work-sans";
import AboutUs from "./components/aboutUs/AboutUs";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import Navbar from "./components/navbar/Navbar";
import Reasons from "./components/reasons/Reasons";
import Services from "./components/services/Services";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <Reasons />
      <AboutUs />
      <Services />
      <Stats />
    </div>
  );
}

export default App;
