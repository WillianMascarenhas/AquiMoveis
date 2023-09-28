import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/user.schema";
import { ILogin } from "@/interfaces/user.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FurnitureProps } from "@/pages/products";
import { useState } from "react";

export const ProductsForm = ({ furniture }: FurnitureProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const uniqueTypes = Array.from(new Set(furniture.map(item => item.type)));

  const handleSubmitProducts = (data: any) => {
    console.log(data);
  };

  const handleTypeClick = (type: string) => {
    handleSubmitProducts({ ["type"]: type });
  };

  const [formOpen, setFormOpen] = useState(true)

  return (
    <form onSubmit={handleSubmit(handleSubmitProducts)}>
      {uniqueTypes.map((type, index) => (
        <div key={index}>
          <label className="hidden" htmlFor={type}>{type}</label>
          <input
            value={type}
            type="button"
            onClick={() => handleTypeClick(type)}
          />
        </div>
      ))}
    </form>
  );
};
