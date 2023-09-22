import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import logo from "../../../public/Logo/logobranco.png";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { loginSchema } from "@/schemas/user.schema";
import { ILogin } from "@/interfaces/user.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEyeSlash, FaEye } from "react-icons/fa"
import { AiFillLock, AiOutlineLogin } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"

export const LoginForm = () => {
    const {showPassword, setShowPassword, login, loginError} = useAuth()
    
    const {register, handleSubmit, formState: {errors}} = useForm<ILogin>({
        resolver: zodResolver(loginSchema)
    })
    
    const handleSubmitLogin = (loginData: ILogin) =>{
        login(loginData)
    }

    const changeShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    
  return (
    <div className="w-[50%] sm:h-[75%] pb-4 sm:pb-0 bg-gray-250 rounded-xl shadow-2xl shadow-gray-250/40 flex flex-col sm:flex-row justify-evenly items-center">
      <div style={{ backgroundImage: `url(https://images.pexels.com/photos/17206055/pexels-photo-17206055/free-photo-of-bancos-assentos-decoracao-mobilia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
        className=" flex flex-col justify-start items-center relative sm:rounded-bl-xl rounded-tl-xl rounded-tr-xl sm:rounded-tr-none w-full sm:w-[50%] sm:h-[100%] bg-center bg-cover text-gray-0 text-base gap-4">
        <div className="absolute w-full h-full bg-gray-1000/30 rounded-bl-xl rounded-tl-xl rounded-tr-xl sm:rounded-tr-none"/>
        <figure className="z-10 w-full flex items-center justify-center">
          <Image
            className="sm:w-[85%] max-w-[200px] min-w-[20px] p-[70px_0px] sm:p-[60px_0px]"
            width={0}
            height={0}
            src={logo}
            alt={"Website logo"}
          />
          <figcaption className="hidden">Website logo</figcaption>
        </figure>
      </div>
      <div className="flex flex-col justify-center gap-[62px] items-center h-[90%] w-[90%] sm:w-[50%]">
        <h1 className="text-3xl text-brand1-1000 mt-6 sm:mt-0">Login</h1>
        <form onSubmit={handleSubmit(handleSubmitLogin)} className="form">
          <div className="input_container">
            <label className="label" htmlFor="email"><BsFillPersonFill size={20}/></label>
            <span/>
            <input className="input" type="email" placeholder="SeuEmail@mail.com" id="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="input_container">
            <label className="label mr-[4px]" htmlFor="senha"><AiFillLock size={20}/></label>
            <input className="input" type={showPassword? "password" : "text"} placeholder="Sua senha"  id="senha" {...register("password")}></input>
            {errors.password && <span>{errors.password.message}</span>}
            <span className="show_password" onClick={()=>changeShowPassword()}>
            {
              showPassword? <FaEyeSlash  size={22.1}/> : <FaEye size={20}/>
            }
            </span>
            <Link className="absolute bottom-[-25px] md:bottom-[-27px] right-1 lg:right-7 text-xs md:text-sm text-gray-400 border-b-[1px] border-gray-400 hover:text-brand1-1000 hover:border-brand1-1000 duration-200" href={"/resetPassword"}>Esqueceu seu senha?</Link>
          </div>
          {
            loginError? <span>{loginError}</span> : null
          }
          <button className="buttonMain border-gray-1000 text-gray-1000 hover:text-brand1-1000 gap-2 mt-9" type="submit">Fazer login <AiOutlineLogin size={20}/></button>
        </form>
        <div className="flex flex-col items-center gap-5">
           <span>Não tem uma conta? <Link className="text-brand1-1000 border-b-2 hover:border-b-2 hover:border-brand1-1000 duration-150" href={""}>Crie uma!</Link></span>
           <Link className="text-gray-400 border-b-2 hover:border-b-2 hover:border-gray-400 duration-150" href={"/"}>Voltar</Link>
        </div>
      </div>
    </div>
  );
};
