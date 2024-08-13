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
import BuyCard from "./components/BuyCard";
import ScrollTop from "./components/ScrollTop";
import Travel from "./components/Travel";
import Food from "./components/Food";
import Personal from "./components/Personal";
import Electronic from "./components/Electronic";
function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/PersonalCare" element={<Personal />} />
        <Route path="/Electronic" element={<Electronic />} />
        <Route path="/buycard/:id" element={<BuyCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
