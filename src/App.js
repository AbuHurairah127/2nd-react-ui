import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import Navbar from "./components/navbar/Navbar";
import Reasons from "./components/reasons/Reasons";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <Reasons />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
