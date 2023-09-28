import Image from "next/image";
import { BiChair } from "react-icons/bi";

export const Section3 = () => {
  return (
    <section className="relative min-h-[800px] w-full bg-fixed bg-center bg-cover bg-no-repeat bg-image2 flex justify-center items-center p-[95px_0px]  ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-gray-900/70 z-[0]" />

      <div className="container">
        <div className="w-screen flex flex-col gap-9 justify-center items-center  lg:flex-row lg:gap-0">
          <div
            data-aos="fade-right"
            className="relative flex justify-center items-center bg-brand2-1000 text-lg text-gray-250 p-[50px_0px] mb-32 xl:mb-16 w-[100%] rounded-lg lg:rounded-tr-none lg:rounded-br-none"
          >
            <div className="absolute left-0 bottom-[60.5px] w-[150px] border-gray-250 border-t-2" />
            <div className="w-[90%] flex flex-col gap-5  relative">
              <div data-aos="fade-right" data-aos-duration="1500" className="border-t-2 border-brand1-1000 w-full xl:w-[700px] absolute z-10 xl:left-40"/>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-xl mt-3 mb-[100px]"
              >
                “Adorei tudo! Os móveis que alugamos para nosso casamento eram
                simplesmente perfeitos. A qualidade, o design e o serviço
                prestado pela sua empresa foram excepcionais. Com certeza,
                contribuíram para tornar nosso dia ainda mais especial. Muito
                obrigado por tudo! “
              </p>
              <div className="relative flex justify-center">
                <ul className="flex gap-10 top-[-49px] absolute">
                  <li data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" className="">
                    <figure>
                      <Image
                        src={
                          "https://images.pexels.com/photos/11993636/pexels-photo-11993636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        }
                        alt={"wedding image"}
                        width={150}
                        height={150}
                        className="rounded-3xl border-2 border-gray-250 w-[150px] h-[220px] hover:scale-110 transform transition-transform duration-500  shadow-2xl shadow-gray-1000/80"
                      />
                      <figcaption className="hidden">Event photo</figcaption>
                    </figure>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500" data-aos-offset="300" className="">
                    <figure>
                      <Image
                        src={
                          "https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        }
                        alt={"wedding image"}
                        width={150}
                        height={150}
                        className="rounded-3xl border-[1px] border-gray-250 w-[150px] h-[220px] hover:scale-110 transform transition-transform duration-500  shadow-2xl shadow-gray-1000/80"
                      />
                      <figcaption className="hidden">Event photo</figcaption>
                    </figure>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" className="">
                    <figure>
                      <Image
                        src={
                          "https://images.pexels.com/photos/10557274/pexels-photo-10557274.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        }
                        alt={"wedding image"}
                        width={150}
                        height={150}
                        className="rounded-3xl border-2 border-gray-250 w-[150px] h-[220px] hover:scale-110 transform transition-transform duration-500  shadow-2xl shadow-gray-1000/80"
                      />
                      <figcaption className="hidden">Event photo</figcaption>
                    </figure>
                  </li>
                </ul>
            </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="bg-gray-250 pt-16 pb-9 w-[100%] h-[550px] rounded-lg flex justify-center items-center relative"
          >
            <div className="flex justify-center flex-col gap-[72px] w-[90%] h-[90%] relative">
              <div className=" w-full flex flex-col items-center gap-5 -mt-20 text-gray-1000">
                <h3 data-aos="fade-up-left" className="text-sm sm:mb-[-15px]">
                  Nossos
                </h3>
                <span className="relative z-10 text-4xl sm:text-5xl text-brand1-1000">
                  Produtos
                </span>
              </div>
              <div className="flex flex-col gap-3 text-gray-600 text-sm relative z-[2]">
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
              <div className="self-end">
                <button className="buttonMain">
                  VER MAIS <BiChair size={20} />
                </button>
              </div>
              <div className="absolute z-[1] left-[-200px] top-[108px] w-[390px] border-brand2-1000 border-t-2 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
