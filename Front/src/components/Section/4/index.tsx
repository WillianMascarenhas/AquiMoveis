import { CarouselMainProducts } from "@/components/Carousel/Products";
import { FurnitureProps } from "@/pages";

export const Section4 = ({ furniture }: FurnitureProps) => {
  return (
    <section className="flex justify-center items-center p-[80px_0px] w-full bg-brand1-750 relative">
      <div className="container flex-col item-center justify-center gap-20">
        <h2 className="self-center text-4xl text-gray-250">Destaques</h2>
        <div className="pb-[80px] ">
          <CarouselMainProducts furniture={furniture} />
        </div>
      </div>
    </section>
  );
};
