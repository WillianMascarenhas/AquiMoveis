import { ProductsForm } from "@/components/Forms/Products";
import { FurnitureProps } from "@/pages/products";
import Image from "next/image";
import "dotenv/config";
import { useFurniture } from "@/contexts/furniture.context";
import { useRouter } from "next/router";
import { useState } from "react";

export const Section1 = ({ furniture }: FurnitureProps) => {
  const { furnitureObj, furnitureType } = useFurniture();

  const router = useRouter();
  let resultOfNumberOfPages = [];

  if (furnitureType) {
    const filterFurniture = furnitureObj.filter(
      (item) => item.type === furnitureType
    );
    const numberOfPages = filterFurniture.length / furniture.perPage;
    resultOfNumberOfPages = Array.from(
      { length: Math.ceil(numberOfPages) },
      (_, index) => index + 1
    );
  } else {
    const numberOfPages = furnitureObj.length / furniture.perPage;
    resultOfNumberOfPages = Array.from(
      { length: Math.ceil(numberOfPages) },
      (_, index) => index + 1
    );
  }

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  console.log(currentIndex);
  return (
    <section className="mt-[180px] w-[90%] pt-[80px] flex items-center lg:items-stretch flex-col lg:flex-row gap-16 relative">
      <div className="w-full absolute left-[5%] justify-between sm:left-0 top-[-25px] flex">
        <h1 className="text-gray-1000 text-2xl border-b-2 border-brand1-1000 pb-1">
          Produtos
        </h1>
        <h2>input pesquisar</h2>
      </div>
      <aside className="w-[90%] lg:w-[20%] relative">
        <ProductsForm furniture={furniture} />
      </aside>
      <main className="w-[90%] lg:w-[80%] flex flex-col ">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[80px]">
          {furniture.data.map((item, itemI) => (
            <li className="w-full h-[410px] bg-white rounded-md" key={item.id}>
              <Image
                style={{ objectFit: "cover" }}
                className="w-full h-[270px] rounded-t-md cursor-pointer"
                width={3000}
                height={3000}
                src={item.furnitureImages[0].url}
                alt={item.name}
              ></Image>
              <div className="flex flex-col items-center p-5 gap-7">
                <h2 className="text-xl text-gray-1000 cursor-pointer">
                  {item.name}
                </h2>
                <button className="text-gray-400 hover:text-brand1-1000 duration-200 border-2 border-gray-400 hover:border-brand1-1000 rounded-lg p-[6px_9px]">
                  Adicionar ao carrinho
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center relative h-[50px]">
          <ul className="flex gap-6 lg:ml-[-210px] xl:ml-[-310px]">
            {resultOfNumberOfPages.map((number, index) => {
              const isCurrent = currentIndex === number;
              return (
                <li
                  className={`cursor-pointer ${isCurrent ? 'text-gray-1000' : "opacity-75"} `}
                  onClick={() => {
                    if (router.query.type) {
                      if (router.query.page) {
                        setCurrentIndex(number);
                        router.push(
                          `?type=${router.query.type}&page=${number}`
                        );
                      } else {
                        setCurrentIndex(number);
                        router.push(`${router.asPath}&page=${number}`);
                      }
                    } else {
                      setCurrentIndex(number);
                      router.push(`?page=${number}`);
                    }
                  }}
                  key={number}
                >
                  {number}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </section>
  );
};
