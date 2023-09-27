import Image from "next/image"
import { BsBookHalf } from "react-icons/bs"

export const Section2 = () => {
    return(
        <section className="flex justify-center items-center mt-[90px] p-[80px_0px] w-full bg-gray-200 relative z-10">
        <div id="div_anchor" data-aos-offset="0" data-aos="fade-right" className="absolute left-0 top-[185.5px] w-[50%] border-brand2-1000 border-t-2"/>
        <div data-aos-anchor="#div_anchor" data-aos="fade-left" className="absolute right-0 bottom-[185.5px] w-[70%] border-brand1-1000 border-t-2"/>
        <div className="flex flex-col-reverse md:flex-row-reverse  gap-8 md:gap-16 items-center justify-center w-[90%]">
          <div data-aos="fade-left" className="max-w-[1000px] w-[50%] md:w-full ">
            <figure>
              <Image
                src={
                  "https://images.pexels.com/photos/6544766/pexels-photo-6544766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={"wedding image"}
                width={10000}
                height={10000}
                className="w-full h-full rounded-xl border-2 border-gray-0 hover:scale-110 transform transition-transform duration-500  shadow-2xl shadow-gray-1000/80"
              />
              <figcaption className="hidden">Event photo</figcaption>
            </figure>
          </div>
          <div className="flex flex-col justify-between md:w-[150%] gap-y-[80px] p-10 relative">
            <h2 className="text-5xl text-brand1-1000">Eventos</h2>
            <div className="flex flex-col gap-8 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                maiores quas in nihil consequuntur voluptatem doloribus delectus
                fuga, labore quisquam, enim doloremque explicabo alias earum
                officia dicta eaque voluptate ex?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat sed tenetur laborum, sunt officiis veritatis velit in
                doloribus vel quaerat provident modi distinctio vitae aliquid,
                aut sit repellat iste eos?
              </p>
            </div>
            <div>
                <button className="buttonMain">VER MAIS <BsBookHalf size={20}/></button>
            </div>
            <div>
                <h3>DESDE 2001</h3>
            </div>
          </div>
        </div>
      </section>
    )
}