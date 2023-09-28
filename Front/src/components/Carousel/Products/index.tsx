import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FurnitureProps } from "@/pages";
import Image from "next/image";
import { BsArrowRight  } from "react-icons/bs";
import Link from "next/link";

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

  const settings = {
    infinite: true,
    // lazyLoad: "ondemand",
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 20000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setProductIndex(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


  const [grab, setGrab] = useState(false);  
  
  return (
      <>
     <div className="w-full relative ">
        <Slider {...settings}>
          {furniture.map((item, itemI) => {
              const dateAPIObj = item.register_date ? new Date(item.register_date) : null;
              
              const deferenceInMili = new Date() - dateAPIObj;
              const deferenceInDays = Math.floor(deferenceInMili / (1000 * 60 * 60  *24));
            return (
              <div className={itemI === productIndex ? "slide active_slide" : "slide "} key={item.id}>
                    {
                    itemI === productIndex ?
                    <Link href={""}>
                        <Image className="w-full h-full rounded-xl absolute top-1/2 z-0  translate-y-[-50%] focus:outline-none" key={item.id} height={2000} width={2000} src={item.furnitureImages[0].url} alt={item.name} />
                    </Link>
                    :
                    <Image className={grab? "cursor grabbing" : "cursor grab"} onMouseDown={() => setGrab(true)} onMouseUp={() => setGrab(false)} key={item.id} height={2000} width={2000} src={item.furnitureImages[0].url} alt={item.name} />
                    }
                    {
                        deferenceInDays <= 2?
                        <div className="absolute top-3 left-3 z-[1] ">
                        <div className="flex items-center justify-center gap-1 text-brand1-1000">
                            <BsArrowRight size={25}/>
                            <span className="text-lg text-gray-1000">Novo </span>
                        </div>
                    </div>
                    :
                    null
                    }
                    <div className="absolute bg-slate-700/95 z-[1] w-full h-[100px] bottom-0 rounded-b-xl flex items-center justify-center  ">
                        {
                            itemI === productIndex ?
                        <Link className="flex items-center justify-center text-2xl text-gray-250 hover:text-brand1-1000 duration-200" href={""}>
                            {item.name}
                        </Link>
                        :
                        <h2 className="flex items-center justify-center text-2xl text-gray-250" >{item.name}</h2>
                        }
                    </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};