import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import logo from "../../../../public/Logo/logobranco.png";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { userSchemaRequest } from "@/schemas/user.schema";
import { IUserRequest } from "@/interfaces/user.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEyeSlash, FaEye, FaCity, FaRoute } from "react-icons/fa"
import { AiFillLock, AiOutlineLogin, AiFillPhone } from "react-icons/ai"
import { BsFillPersonFill, BsPinMapFill, BsGlobeAmericas } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import { GoNumber } from "react-icons/go"
import { GrCompliance } from "react-icons/gr"
import { allStatesCities } from "../../../../public/StatesCities/all";
import { useState } from "react"


export const RegisterForm = () => {
    const {showPassword, setShowPassword, register: handleRegisterData} = useAuth()

    
    const {register, handleSubmit, formState: {errors}} = useForm<IUserRequest>({
        resolver: zodResolver(userSchemaRequest)
    })

    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const findStateObj = allStatesCities.find((item, itemI) => (item.sigla === selectedState))

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
      if(event.target.id == "state" ){
        setSelectedState(event.target.value)
      }else if(event.target.id == "city"){
        setSelectedCity(event.target.value)
      }
    }
    
    const handleSubmitRegister = (registerData: IUserRequest) =>{
      if(registerData.password === registerData.confirm_password){
        handleRegisterData(registerData)
      }
    }
    
    const changeShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    
  return (
    <div className="w-[75%] sm:w-[50%] sm:h-[75%] mt-[370px] sm:mt-0 pb-4 sm:pb-0 bg-gray-250 rounded-xl shadow-2xl shadow-gray-250/40 flex flex-col sm:flex-row justify-evenly items-center">
      <div style={{ backgroundImage: `url(https://images.pexels.com/photos/3951652/pexels-photo-3951652.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
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
      <div className="flex flex-col justify-center gap-[40px] items-center h-[90%] w-[90%] sm:w-[50%]">
        <h1 className="text-3xl text-brand1-1000 mt-9">Cadastro</h1>
        <form onSubmit={handleSubmit(handleSubmitRegister)} className="form overflow-y-auto">
          <div className="input_container">
            <label className="label" htmlFor="email"><MdAlternateEmail size={20}/></label>
            <span/>
            <input className="input" type="email" placeholder="SeuEmail@mail.com" id="email" {...register("email")} />
            {errors.email && <span className="span_error">{errors.email.message}</span>}
          </div>

          <div className="input_container">
            <label className="label mr-[4px]" htmlFor="senha"><AiFillLock size={20}/></label>
            <input className="input" type={showPassword? "password" : "text"} placeholder="Sua senha"  id="senha" {...register("password")}></input>
            {errors.password && <span className="span_error">{errors.password.message}</span>}
            <span className="show_password absolute right-6" onClick={()=>changeShowPassword()}>
            {
              showPassword? <FaEyeSlash  size={22.1}/> : <FaEye size={20}/>
            }
            </span>
          </div>

          <div className="input_container">
            <label className="label mr-[4px]" htmlFor="confirm_password"><AiFillLock size={20}/></label>
            <input className="input" type={showPassword? "password" : "text"} placeholder="Confirme sua senha"  id="confirm_password" {...register("confirm_password")}></input>
            {errors.confirm_password && <span className="span_error">{errors.confirm_password.message}</span>}
            <span className="show_password absolute right-6" onClick={()=>changeShowPassword()}>
            {
              showPassword? <FaEyeSlash  size={22.1}/> : <FaEye size={20}/>
            }
            </span>
          </div>

          <div className="input_container">
            <label className="label" htmlFor="name"><BsFillPersonFill size={20}/></label>
            <span/>
            <input className="input" type="text" placeholder="Nome completo" id="name" {...register("name")} />
            {errors.name && <span className="span_error">{errors.name.message}</span>}
          </div>

          <div className="input_container">
            <label className="label" htmlFor="phone"><AiFillPhone size={20}/></label>
            <span/>
            <input className="input" type="tel" placeholder="(99) 9999-9999" id="phone" {...register("phone")} />
            {/* <input className="input" type="tel" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" id="phone" {...register("number")} /> */}
            {errors.phone && <span className="span_error">{errors.phone.message}</span>}
          </div>

          <div className="input_container">
            <label className="label" htmlFor="zipcode"><BsPinMapFill size={20}/></label>
            <span/>
            <input className="input" type="text" placeholder="CEP" id="zipcode" {...register("zipcode")} />
            {errors.zipcode && <span className="span_error">{errors.zipcode.message}</span>}
          </div>

          <div className="input_container">
            <label className="label" htmlFor="state"><BsGlobeAmericas size={20}/></label>
            <select className="input mr-4 sm:mr-5 sm:w-[30%]" value={selectedState} id="state" {...register("state", {
              onChange: (e) => {
              handleChange(e);
            }})}>
            <option value="">Estado</option>
                {
                    allStatesCities.map((item, itemI) => (
                        <option key={itemI} value={item.sigla}>{item.sigla}</option>
                    ))
                }
            </select>

            <label className="label" htmlFor="city"><FaCity size={20}/></label>
            <select className="input sm:w-[30%]" value={selectedCity ? selectedCity: "Cidades"} id="city" {...register("city", {
              onChange: (e) => {
              handleChange(e);
            }})}>
              <option value="">Cidade</option>
              {
                findStateObj?.cidades ?
                findStateObj?.cidades.map((city, cityI) => (
                  <option key={cityI} value={city}>{city}</option>
                ))
                :
                <option value="">Escolha uma estado primeiro</option>
              }

            </select>
          </div>

          <div className="input_container">
            <label className="label" htmlFor="number"><GoNumber size={20}/></label>
            <span/>
            <input className="input sm:w-[20%] mr-1" type="text" placeholder="Numero" id="number" {...register("number")} />
            {errors.number && <span className="span_error">{errors.number.message}</span>}
          
            <label className="label" htmlFor="address"><FaRoute size={20}/></label>
            <span/>
            <input className="input sm:w-[43%]" type="text" placeholder="Endereço" id="address" {...register("address")} />
            {errors.address && <span className="span_error">{errors.address.message}</span>}
          </div>

          <div className="input_container">
            <label className="label" htmlFor="complement"><GrCompliance size={20}/></label>
            <span/>
            <input className="input" type="text" placeholder="Complemento" id="complement" {...register("complement")} />
            {errors.complement && <span className="span_error">{errors.complement.message}</span>}
          </div>

          <button className="buttonMain border-gray-1000 text-gray-1000 hover:text-brand1-1000 gap-2 mt-6" type="submit">Fazer cadastro<AiOutlineLogin size={20}/></button>
        </form>
        <div className="flex flex-col items-center gap-5">
           <Link className="text-gray-400 border-b-2 hover:border-b-2 mb-3 hover:border-gray-400 duration-150" href={"/"}>Voltar</Link>
        </div>
      </div>
    </div>
  );
};
