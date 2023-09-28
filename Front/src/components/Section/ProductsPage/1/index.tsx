import { ProductsForm } from "@/components/Forms/Products";
import { FurnitureProps } from "@/pages/products";
import Image from "next/image";


export const Section1 = ({ furniture }: FurnitureProps) => {
    return(
        <section className="mt-[150px] w-[90%] pt-[80px] flex items-center lg:items-stretch flex-col lg:flex-row gap-16 relative">
            <h1 className="absolute left-[5%] sm:left-0 top-0 text-gray-1000 text-2xl border-b-2 border-brand1-1000 pb-1">Produtos</h1>
            <aside className="w-[90%] lg:w-[20%] bg-slate-600">
                <ProductsForm furniture={furniture}/>
            </aside>
            <main className="w-[90%] lg:w-[80%] ">
                <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[80px]">
                    {
                        furniture.map((item, itemI) => (
                            <li className="w-full h-[410px] bg-white rounded-md" key={item.id}>
                            <Image 	style={{objectFit: "cover"}} className="w-full h-[270px] rounded-t-md cursor-pointer" width={3000} height={3000} src={item.furnitureImages[0].url} alt={item.name} ></Image>
                            <div className="flex flex-col items-center p-5 gap-7">
                                <h2 className="text-xl text-gray-1000 cursor-pointer">{item.name}</h2>
                                <button className="text-gray-400 hover:text-brand1-1000 duration-200 border-2 border-gray-400 hover:border-brand1-1000 rounded-lg p-[6px_9px]">Adicionar ao carrinho</button>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </main>
        </section>
    )
}