import { BiMessageSquareDetail } from "react-icons/bi"

export const Section1 = () =>{

    return(
        <section className="z-[1] container">
        <div className="w-screen flex flex-col gap-9 justify-center items-center mt-[60px] lg:flex-row lg:gap-0">
          <div
            data-aos="fade-right"
            className="bg-gray-250 pt-16 pb-9 w-[100%] h-[550px] rounded-lg flex justify-center items-center relative"
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
                  <span className="relative z-50 text-4xl sm:text-5xl text-brand1-1000">
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
                  SABIA MAIS <BiMessageSquareDetail size={20} />
                </button>
              </div>
              <div className="absolute right-0 top-[81px] w-[120px] border-brand2-1000 border-t-2" />
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
    )
}