import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo/Design_sem_nome-removebg-preview-new.png";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoInstagram, BiMailSend } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer id="contact_footer" className="flex justify-center items-center bg-brand2-750 p-[100px-0px] relative z-10">
      <div className="md:flex justify-between w-[90%] h-full p-[90px_0px] items-start">
        <div className="flex flex-col gap-[32px]">
          <Link href={"/"}>
            <figure className="z-10">
              <Image
                className="w-[100%] max-w-[200px] min-w-[200px]"
                width={1000}
                height={1000}
                src={logo}
                alt={"Website logo"}
              />
              <figcaption className="hidden">Website logo</figcaption>
            </figure>
          </Link>
          <div className="md:flex gap-[50px] mt-[7px]">
            <div className="flex flex-col pr-[80px] h-[100px] mb-[30px] md:mb-0 md:h-[300px] border-b-2 md:border-b-0 md:border-r-2 text-lg gap-4">
              <Link href={""}>Produtos</Link>
              <Link href={""}>Quem Somos</Link>
            </div>
            <div className="mt-[7px]">
              <h2 className="flex flex-col text-xl mb-4">Contato</h2>
              <div className="flex flex-col text-lg gap-4">
                <div>
                  <span className="flex items-center gap-2">
                    Endereço <GrMapLocation size={20} />
                  </span>
                  <span className="text-sm">Av AquiMoveis</span>
                </div>
                <div>
                  <span className="flex items-center gap-2 cursor-pointer">
                    Intagram <BiLogoInstagram size={21} />
                  </span>
                </div>
                <div>
                  <span className="flex items-center gap-2 cursor-pointer">
                    Telefone <AiOutlineWhatsApp size={21} />
                  </span>
                  <span className="text-sm">+55 000 99999-9999</span>
                </div>
                <div>
                  <span className="flex items-center gap-2">
                    Email <BiMailSend size={21} />
                  </span>
                <span className="text-sm">contato@aquimoveis.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[150px]">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nam
            eum totam neque fugit eius alias explicabo accusamus reiciendis?
            Impedit blanditiis quod recusandae nulla aut voluptas itaque ratione
            expedita corrupti?
          </span>
        </div> */}
      </div>
    </footer>
  );
};
