import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FurnitureProps } from "@/pages";
import Image from "next/image";

export const CarouselMainProducts = ({furniture}: FurnitureProps) => {
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className="arrow arrow_right" onClick={onClick}>
        <BsChevronCompactRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className="arrow arrow_left" onClick={onClick}>
        <BsChevronCompactLeft />
      </div>
    );
  };

  const [productIndex, setProductIndex] = useState(0);
  const [productImageIndex, setProductImageIndex] = useState(0);
  console.log(productImageIndex)

  const settings = {
    infinite: true,
    // lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 20000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setProductIndex(next),
  };


  return (
    <>
      <div className="">
        <Slider {...settings}>
            {furniture.map((item, itemI)=>(
                <div className={itemI === productIndex? "slide active_slide" : "slide" } key={item.id}>
                            <Image height={20} width={200} src={item.furnitureImages[0].url} alt={""} />
                    <h2 className="flex items-center justify-center">{item.name}</h2>
                </div>
            ))}

        </Slider>
      </div>
    </>
  );
};