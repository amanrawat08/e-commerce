import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Frontslider } from "./components/FrontSlider";
import { BestSellerCard } from "./components/BestSellerCard";
import Lastpart from "./components/Lastpart";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cloth from "./components/Cloth";
import Home from "./components/Home";
import Kitchen from "./components/Kitchen";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
