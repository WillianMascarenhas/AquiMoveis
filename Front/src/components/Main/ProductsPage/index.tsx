import { CarouselMainProducts } from "@/components/Carousel/Products";
import { NavBar } from "@/components/NavBar/HomePage";
import { Section1 } from "@/components/Section/ProductsPage/1";
import { FurnitureProps } from "@/pages/products";
import AOS from "aos";
import { useEffect } from "react";
export const Main = ({ furniture }: FurnitureProps)=> {
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
    <main className="flex items-center justify-center">
        <NavBar/>
        {/* Overlay */}
        <div className="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 z-[-1] bg-gray-200" />
        {/* <CarouselMainProducts furniture={furniture} /> */}
        <Section1 furniture={furniture}/>
    </main>
  );
};
