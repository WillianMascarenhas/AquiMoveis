import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/user.schema";
import { ILogin } from "@/interfaces/user.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FurnitureProps } from "@/pages/products";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const ProductsForm = ({ furniture }: FurnitureProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uniqueTypes = Array.from(new Set(furniture.map((item) => item.type)));

  const handleSubmitProducts = (data: any) => {
    console.log(data);
  };

  const handleTypeClick = (type: string) => {
    handleSubmitProducts({ ["type"]: type });
  };

  const [formOpen, setFormOpen] = useState(true);

  return (
    <div className="sticky top-[150px] flex flex-col border-t-[1px] border-gray-400 p-[20px_0px] gap-8 w-full">
      <span
        className="flex justify-between self-center items-center w-[90%] cursor-pointer text-base"
        onClick={() => setFormOpen(!formOpen)}
      >
        Categorias
        {!formOpen ? <AiOutlinePlus size={20} /> : <AiOutlineMinus size={20} />}
      </span>
      <form
        className={
          formOpen
            ? "flex flex-col absolute top-[70px] gap-5 self-center w-[100%] duration-[250ms] bg-gray-200 border-b-[1px] pl-3 pb-5 border-gray-400"
            : "flex flex-col absolute -z-10 top-[65px] gap-5 self-center w-[100%] duration-[250ms] border-b-[1px] border-gray-400"
        }
        onSubmit={handleSubmit(handleSubmitProducts)}
      >
        {uniqueTypes.map((type, index) => (
          <div className={formOpen ? "duration-[900ms]" : "text-transparent absolute"} key={index}>
            <label className="hidden" htmlFor={type}>
              {type}
            </label>
            <input
              value={type}
              type="button"
              onClick={() => handleTypeClick(type)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
