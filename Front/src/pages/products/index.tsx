import { Main } from '@/components/Main/ProductsPage';
import { useFurniture } from '@/contexts/furniture.context';
import { IFurnitureArray } from '@/interfaces/furniture.interface';
import { api } from '@/service/api';
import type { GetStaticProps } from 'next'
import { useEffect } from 'react';

export type FurnitureProps = {
    furniture:IFurnitureArray
  }

  
  export const getStaticProps: GetStaticProps<FurnitureProps> = async (ctx) => {
      const response = await api.get("/furniture");
      
      return { props: { furniture: response.data }, revalidate: 60 };
    };
    
    const ProductsPage = ({ furniture }: FurnitureProps) => {

    const {furniture: furnitureToSet} = useFurniture()
  
    useEffect(() => {}, [])

    return(
        <>
        <Main furniture={furniture}/>
        </>
    )
}

export default ProductsPage