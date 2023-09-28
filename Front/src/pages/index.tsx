import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main/HomePage";
import { IFurnitureArray } from "@/interfaces/furniture.interface";
import { api } from "@/service/api";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { Poppins } from "next/font/google";
import { AiOutlineWhatsApp } from "react-icons/ai";


export type FurnitureProps = {
  furniture:IFurnitureArray
}

export const getStaticProps: GetStaticProps<FurnitureProps> = async (ctx) => {
  const response = await api.get("/furniture");

  return { props: { furniture: response.data }, revalidate: 60 };
};

const Home = ({ furniture }: FurnitureProps) => {
  return (
    <main>
      <Header />
      <Main furniture={furniture} />
      <Footer />
      <div className="hidden sm:block fixed bottom-8 right-8 z-50  bg-[#25D366] rounded-[100%] p-[10px] hover:scale-110 duration-200">
        <button className="flex justify-center items-center text-gray-0">
          <AiOutlineWhatsApp size={58}  />
        </button>
      </div>
    </main>
  );
}

export default Home
