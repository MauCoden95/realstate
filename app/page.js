"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import { Banner } from "./components/Banner";
import { ShowProperties } from "./components/ShowProperties";
import { SeeMore } from "./components/SeeMore";
import { ShowReviews } from "./components/ShowReviews";
import { Newsletter } from "./components/Newsletter";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  


  return (
    <div>
        <Banner/>
        <ShowProperties/>
        <SeeMore/>
        <ShowReviews/>
        <Newsletter/>
     
      
      
    </div>
  );
}
