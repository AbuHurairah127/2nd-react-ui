import "./App.css";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import Navbar from "./components/navbar/Navbar";
import Reasons from "./components/reasons/Reasons";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <Reasons />
    </div>
  );
}

export default App;
