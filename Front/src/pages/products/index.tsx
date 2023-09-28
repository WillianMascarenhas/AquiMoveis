import { Main } from '@/components/Main/ProductsPage';
import { useFurniture } from '@/contexts/furniture.context';
import { IFurnitureArray } from '@/interfaces/furniture.interface';
import { api } from '@/service/api';
import type { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import path from 'path';

export type FurnitureProps = {
    furniture:IFurnitureArray
  }

  // export const getStaticPaths = async () =>{
  //       return {
  //           paths: [{ params: { type:"/" } }],
  //           fallback: "blocking"
  //         };
  // }
  
  export const getServerSideProps : GetServerSideProps <FurnitureProps> = async (ctx) => {
    ctx.res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60")
    if(ctx.query.type){
      const response = await api.get(`/furniture?type=${ctx.query.type}`);

      if(response.data.length === 0){
        const response = await api.get(`/furniture`);
      
        return { props: { furniture: response.data } };
      }

      return { props: { furniture: response.data } };
    }
      const response = await api.get(`/furniture`);
      
      return { props: { furniture: response.data } };
    };
    
    const ProductsPage = ({ furniture }: FurnitureProps) => {
    
    return(
        <>
        <Main furniture={furniture}/>
        </>
    )
}

export default ProductsPage