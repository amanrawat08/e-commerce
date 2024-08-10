import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Frontslider } from "./components/FrontSlider";
import { BestSellerCard } from "./components/BestSellerCard";
import Lastpart from "./components/Lastpart";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Frontslider />
      <BestSellerCard />
      <Lastpart />
      <Footer />
    </>
  );
}

export default App;
