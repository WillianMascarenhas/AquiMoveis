import { CarouselMain } from "../../Carousel/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FurnitureProps } from "@/pages";
import { Section1 } from "../../Section/HomePage/1";
import { Section2 } from "../../Section/HomePage/2";
import { Section3 } from "../../Section/HomePage/3";
import { Section4 } from "../../Section/HomePage/4";

export const Main = ({ furniture }: FurnitureProps) => {
  useEffect(() => {
    AOS.init({
      offset: -20,
      duration: 900,
      delay: 0,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);
  return (
    <main className="overflow-x-hidden flex flex-col justify-center items-center z-0 mt-[100px]">
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-fixed bg-center bg-cover relative bg-image1">
        {/* Overlay */}
        <div className="fixed mt-[100px] top-0 left-0 right-0 bottom-0 h-full bg-gray-400/40 z-[0]" />
        <CarouselMain />

        <Section1 />

        <Section2 />
      </div>

      <Section3 />

      <Section4 furniture={furniture} />
    </main>
  );
};
