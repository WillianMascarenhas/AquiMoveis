import { items } from "../../../public/Carousel/items";
import { useState, useEffect  } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

export const CarouselMain = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () =>{
        const isFirst = currentIndex === 0
        const newIndex = isFirst ? items.length -1 :currentIndex - 1 
        setCurrentIndex(newIndex)
    }
    const nextSlide = () =>{
        const isLast = currentIndex === items.length -1
        const newIndex = isLast ? 0 : currentIndex  + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (itemIndex: number) =>{
        setCurrentIndex(itemIndex)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 12000); 
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentIndex]); 

  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative ">
        <div 
        style={{backgroundImage: `url(${items[currentIndex].imageUrl})`}} 
        className="w-full h-[100%] rounded-2xl border-2 border-gray-250 bg-center bg-cover duration-500"
        >
        </div>

        {/* Arrow left */}
        <div onClick={prevSlide} className="absolute top-1/2 translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/20 text-gray-250 hover:text-brand1-1000 hover:bg-brand2-1000/20 duration-200 cursor-pointer">
            <BsChevronCompactLeft size={20}/>
        </div>
        {/* Arrow right */}
        <div onClick={nextSlide}  className="absolute top-1/2 translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/20 text-gray-250 hover:text-brand1-1000 hover:bg-brand2-1000/20 duration-200 ho cursor-pointer">
            <BsChevronCompactRight size={20}t/>
        </div>
        <div className="flex justify-center top-4 p-5">
            {
                items.map((item, itemIndex) => (
                    <div className={
                        itemIndex === currentIndex ?
                        "text-2xl cursor-pointer translate-y-[-25%] duration-500 text-brand1-1000 ease-in-out " :
                        "text-2xl cursor-pointer duration-500 text-brand2-1000 ease-in-out"
                    } key={itemIndex} onClick={() =>goToSlide(itemIndex)}>
                    <RxDotFilled/>
                </div>
                ))
            }
        </div>
    </div>
  );
};
