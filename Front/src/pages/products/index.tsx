import { Main } from "@/components/Main/ProductsPage";
import { useFurniture } from "@/contexts/furniture.context";
import { IFurnitureArray } from "@/interfaces/furniture.interface";
import { api } from "@/service/api";
import type { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import path from "path";
import 'dotenv/config'
import { Footer } from "@/components/Footer";

export type FurnitureProps = {
  furniture: IFurnitureArray;
  // furnitureNumber: number
};

// export const getStaticPaths = async () =>{
//       return {
//           paths: [{ params: { type:"/" } }],
//           fallback: "blocking"
//         };
// }

export const getServerSideProps: GetServerSideProps<FurnitureProps> = async (
  ctx
) => {
  ctx.res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60");

  const perPage = 1;

  if (ctx.query.type) {
    if (ctx.query.page) {
      const response = await api.get(`/furniture?type=${ctx.query.type}&page=${ctx.query.page}&perPage=${perPage}`);

      if (response.data.length === 0) {
        const response = await api.get(`/furniture`);

        return { props: { furniture: response.data } };
      }

      return { props: { furniture: response.data } };
    }else{
      const response = await api.get(`/furniture?type=${ctx.query.type}&page=1&perPage=${perPage}`);
  
      if (response.data.length === 0) {
        const response = await api.get(`/furniture`);
  
        return { props: { furniture: response.data } };
      }
  
      return { props: { furniture: response.data } };
    }

  } else {
    if(ctx.query.page){
      const response = await api.get(`/furniture?page=${ctx.query.page}&perPage=${perPage}`);

      return { props: { furniture: response.data } };
    }else{
      const response = await api.get(`/furniture?page=1&perPage=${perPage}`);
  
      return { props: { furniture: response.data } };
    }
  }
};

const ProductsPage = ({ furniture }: FurnitureProps) => {
  return (
    <>
      <Main furniture={furniture} />
      <Footer/>
    </>
  );
};

export default ProductsPage;
