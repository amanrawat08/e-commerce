import React from "react";
import { Frontslider } from "./FrontSlider";
import { BestSellerCard } from "./BestSellerCard";
import Lastpart from "./Lastpart";
export default function Home() {
  return (
    <>
      <Frontslider />
      <BestSellerCard />
      <Lastpart />
    </>
  );
}
