import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FurnitureProps } from "@/pages/products";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { api } from "@/service/api";

export const ProductsForm = ({ furniture }: FurnitureProps) => {
  const [types, setTypes] = useState([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/furniture");
        setTypes(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uniqueTypes = Array.from(new Set(types.map((item) => item.type)));

  const handleSubmitProducts = (data: any) => {
      if (data.type === "all") {
      router.push(``);
    }else{
        router.push(`?type=${data.type}`);
    }
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
        <div
          className={
            formOpen ? "duration-[900ms]" : "text-transparent absolute"
          }
        >
          <label className="hidden" htmlFor="all">
            Todos
          </label>
          <input
            className="cursor-pointer"
            value="TODAS"
            type="button"
            onClick={() => handleTypeClick("all")}
          />
        </div>
        {uniqueTypes.map((type, index) => (
          <div
            className={
              formOpen ? "duration-[900ms]" : "text-transparent absolute"
            }
            key={index}
          >
            <label className="hidden" htmlFor={type}>
              {type}
            </label>
            <input
              className="cursor-pointer"
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
