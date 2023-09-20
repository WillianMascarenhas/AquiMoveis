import Image from "next/image"
import logo from "../../../public/Logo/Captura_de_tela_2023-09-13_092845-removebg-preview.png"
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"

export const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <nav className="fixed flex items-center h-[100px] top-0 left-0 right-0 z-50 ease-in duration-300 bg-gray-0 shadow-2xl shadow-gray-100/70">
        <div className="w-[90vw] m-auto flex justify-between items-center">
            <Link href={"/"}>
                <figure className="z-10">
                    <Image className="w-[100%] max-w-[200px] min-w-[200px]" width={0} height={0} src={logo} alt={"Website logo"}/>
                    <figcaption className="hidden">Website logo</figcaption>
                </figure>
            </Link>
            <ul className="hidden lg:flex">
                <Link className="nav group text-gray-1000" href={"/"}>Início <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-brand1-1000 transition-all duration-500 ease-in-out group-hover:w-full"></span></Link>
                <Link className="nav group text-gray-1000" href={""}>Quem Somos <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-brand1-1000 transition-all duration-500 ease-in-out group-hover:w-full"></span></Link>
                <Link className="nav group text-gray-1000" href={""}>Produtos <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-brand1-1000 transition-all duration-500 ease-in-out group-hover:w-full"></span></Link>
                <Link className="nav group text-gray-1000" href={""}>Contatos <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-brand1-1000 transition-all duration-500 ease-in-out group-hover:w-full"></span></Link>
            </ul>

            {/* Mobile Button */}

            <div onClick={handleNav} className="lg:hidden block cursor-pointer">
                {
                nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
                }
            </div>

            {/* Mobile Nav */}

            <div className={
                // Logic for open and close smooth, doc in screens
            nav
              ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[80%] h-screen bg-gray-250 border-r-2 border-brand1-1000 text-center ease-in duration-300'
              : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-250 border-r-2 border-brand1-1000 text-center ease-in duration-300'
          }>
                <div className="flex items-start flex-col w-[90%] h-[100%] gap-5">
                        <Link href={"/"}>
                            <figure className="mt-[23px]">
                                <Image className="w-[100%] max-w-[200px] min-w-[200px]" width={0} height={0} src={logo} alt={"Website logo"}/>
                                <figcaption className="hidden">Website logo</figcaption>
                            </figure>
                        </Link>
                        <div className="flex items-start flex-col gap-5 mt-[52px]">
                            <Link href="" className=" border-2 border-gray-750 rounded-lg p-[7px_12px] bg-gray-750 text-gray-1000 hover:text-brand1-1000 hover:border-brand1-1000 hover:bg-gray-250 duration-300 ">Login</Link>
                            <Link href="" className="border-2 border-brand1-750 rounded-lg p-[7px_12px] bg-brand1-750 hover:bg-brand1-1000 hover:text-gray-0 hover:border-brand1-1000 duration-300">Cadastra-se</Link>
                        </div>
                        <ul className="lg:hidden w-[100%] flex flex-col items-start mt-[32px]">
                            <li className="w-[100%] h-[100px] flex items-center border-t-2 border-brand2-1000">
                                <Link className="w-[100%] flex" href={"/"}>Início</Link>
                            </li>
                            <li className="w-[100%] h-[100px] flex items-center border-t-2 border-brand2-1000">
                                <Link className="w-[100%] flex" href={""}>Quem Somos</Link>
                            </li>
                            <li className="w-[100%] h-[100px] flex items-center border-t-2 border-brand2-1000">
                                <Link className="w-[100%] flex" href={""}>Produtos</Link>
                            </li>
                            <li className="w-[100%] h-[100px] flex items-center border-t-2 border-brand2-1000">
                                <Link className="w-[100%] flex" href={""}>Contatos</Link>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-11">
                <Link href="" className=" hover:text-brand1-1000 duration-300">Login</Link>
                <Link className="border-2 border-brand1-750 rounded-lg p-[7px_12px] bg-brand1-750 hover:bg-brand1-1000 hover:text-gray-0 hover:border-brand1-1000 duration-300" href="">Cadastra-se</Link>
            </div>
        </div>
    </nav>
  );
};
