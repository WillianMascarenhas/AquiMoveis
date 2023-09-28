import Image from "next/image";
import { BannerImages } from "../../../../public/Carousel/bannerImages";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const CarouselMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? BannerImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex === BannerImages.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (itemIndex: number) => {
    setCurrentIndex(itemIndex);
  };

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 12000);

      return () => {
        clearInterval(intervalId);
      };
    }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${BannerImages[currentIndex].imageUrl})` }}
        className="w-full h-full rounded-2xl border-2 border-gray-250 bg-center bg-no-repeat xl:bg-cover duration-1000"
      ></div>

      {/* <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
            <div
            onClick={prevSlide}
            className=""
            >
              <BsChevronCompactLeft size={20} />
            </div>
            <div
              onClick={nextSlide}
              className=""
            >
              <BsChevronCompactRight size={20} t />
            </div>
        </div> */}

      {/* Arrow left */}
      <div
        onClick={prevSlide}
        className="arrow arrow_left"
      >
        <BsChevronCompactLeft size={20} />
      </div>
      {/* Arrow right */}
      <div
        onClick={nextSlide}
        className="arrow arrow_right"
      >
        <BsChevronCompactRight size={20} />
      </div>

      <div className="flex justify-center top-4 p-5">
        {BannerImages.map((bannerImage, bannerImageIndex) => (
          <div
            className={
              bannerImageIndex === currentIndex
                ? "text-2xl cursor-pointer translate-y-[-25%] duration-500 text-brand1-1000 ease-in-out "
                : "text-2xl cursor-pointer duration-500 text-brand2-1000 ease-in-out"
            }
            key={bannerImageIndex}
            onClick={() => goToSlide(bannerImageIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};