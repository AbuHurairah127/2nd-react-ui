import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import Navbar from "./components/navbar/Navbar";
import Reasons from "./components/reasons/Reasons";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <Reasons />
      <AboutUs />
    </div>
  );
}

export default App;
