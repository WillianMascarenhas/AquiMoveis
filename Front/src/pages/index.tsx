import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Poppins } from "next/font/google";
import { AiOutlineWhatsApp } from "react-icons/ai";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Header />
      <Main />
      <Footer />
      <div className="fixed bottom-8 right-8 z-50  bg-[#25D366] rounded-[100%] p-[10px]">
        <button className="flex justify-center items-center text-gray-0">
          <AiOutlineWhatsApp size={58}  />
        </button>
      </div>
    </main>
  );
}
