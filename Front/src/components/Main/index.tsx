import { CarouselMain } from "../Carousel";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Main = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      delay: 0,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);
  return (
    <main
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/169185/pexels-photo-169185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
      className="overflow-x-hidden flex flex-col justify-center items-center z-0 mt-[100px] bg-fixed bg-center bg-cover"
    >
      {/* Overlay */}
      <div className="fixed mt-[100px] top-0 left-0 right-0 bottom-0 h-full bg-gray-400/40 z-[0]" />

      <CarouselMain />

      <section className="z-[1] container">
        <div className="w-screen flex flex-col gap-9 justify-center items-center mt-[60px] lg:flex-row lg:gap-0">
          <div
            data-aos="fade-right"
            className="bg-gray-250 pt-16 pb-9 w-[100%] rounded-lg flex justify-center items-center relative"
          >
            <div className="flex justify-center flex-col gap-[72px] w-[90%] h-[90%]">
              <div className=" w-full flex flex-col gap-0 text-gray-1000">
                <h3 data-aos="fade-up-right" className="text-sm sm:mb-[-15px]">
                  SOBRE NÓS
                </h3>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="text-lg"
                >
                  CONHEÇA A{" "}
                  <span className="text-4xl sm:text-5xl text-brand1-1000">
                    AQUIMOVEIS
                  </span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-gray-600 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nisi cum molestiae ipsum tempora eaque, reprehenderit
                  praesentium, corporis, quisquam iusto minima! Nesciunt quae
                  molestiae dolorem dolores nihil deserunt iusto iure!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  inventore minima suscipit accusantium perferendis,
                  perspiciatis, corporis, eligendi pariatur earum magnam
                  obcaecati nisi quam repellendus dolorum quaerat quis quas illo
                  consequuntur!
                </p>
              </div>
              <div>
                <button className="buttonMain">
                  ENTRE EM CONTATO <BiMessageSquareDetail size={20} />
                </button>
              </div>
              <div className="absolute right-0 top-[65.5px] w-[120px] border-brand2-1000 border-t-2" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative flex justify-center items-center bg-brand2-1000 text-lg text-gray-250 h-[325px] mb-16 w-[100%] rounded-lg lg:rounded-tl-none lg:rounded-bl-none"
          >
            <div className="absolute left-0 bottom-[60.5px] w-[150px] border-gray-250 border-t-2" />
            <div className="w-[90%] flex flex-col gap-5 border-t-2 border-brand1-750">
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="text-xl mt-3"
              >
                “Nós temos um{" "}
                <strong className="text-brand1-1000">relacionamento</strong>{" "}
                muito familiar com nossos clientes, eles acabam se tornando{" "}
                <strong className="text-brand1-1000">
                  {" "}
                  amigos, parceiros e divulgadores dos nossos produtos…
                </strong>
                “
              </p>
              <p className="text-sm mt-5">-Jhon, Gerente de Vendas</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-[90px] p-[80px_0px] w-full bg-gray-200 relative z-10">
        <div data-aos="fade-right" className="absolute left-0 top-[185.5px] w-[50%] border-brand2-1000 border-t-2"/>
        <div data-aos="fade-left" className="absolute right-0 bottom-[185.5px] w-[70%] border-brand1-1000 border-t-2"/>
        <div className="flex flex-col-reverse md:flex-row-reverse  gap-8 md:gap-16 items-center justify-center w-[90%]">
          <Link data-aos="fade-left" className="max-w-[1000px] w-[50%] md:w-full " href={""}>
            <figure>
              <Image
                src={
                  "https://images.pexels.com/photos/6544766/pexels-photo-6544766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={"wedding image"}
                width={10000}
                height={10000}
                className="w-full h-full rounded-xl border-2 border-gray-0 hover:scale-110 transform transition-transform duration-500  shadow-2xl shadow-gray-1000/80"
              />
              <figcaption className="hidden">Event photo</figcaption>
            </figure>
          </Link>
          <div className="flex flex-col justify-between md:w-[150%] gap-y-[80px] p-10 relative">
            <h2 className="text-5xl text-brand1-1000">Eventos</h2>
            <div className="flex flex-col gap-8 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                maiores quas in nihil consequuntur voluptatem doloribus delectus
                fuga, labore quisquam, enim doloremque explicabo alias earum
                officia dicta eaque voluptate ex?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat sed tenetur laborum, sunt officiis veritatis velit in
                doloribus vel quaerat provident modi distinctio vitae aliquid,
                aut sit repellat iste eos?
              </p>
            </div>
            <div>
                <button className="buttonMain">VER MAIS <BsBookHalf size={20}/></button>
            </div>
            <div>
                <h3>DESDE 2001</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
