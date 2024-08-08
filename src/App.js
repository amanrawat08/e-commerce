import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Frontslider } from "./components/FrontSlider";
import { BestSellerCard } from "./components/BestSellerCard";
import Lastpart from "./components/Lastpart";

function App() {
  return (
    <>
      <Navbar />
      <Frontslider />
      <BestSellerCard />
      <Lastpart />
    </>
  );
}

export default App;
