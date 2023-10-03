import { IFurnitureArray } from "@/interfaces/furniture.interface";
import { api } from "@/service/api";
import { strict } from "assert";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { string } from "zod";



interface Props {
  children: ReactNode;
}

interface furnitureProviderData {
  setFurnitureType: Dispatch<SetStateAction<string | null>>
  furnitureType: string | null
  furnitureObj: never[]
}

const furnitureContext = createContext<furnitureProviderData>({} as furnitureProviderData);

export function FurnitureProvider({ children }: Props) {

    const [furnitureType, setFurnitureType] = useState<null | string>(null)

    const [furnitureObj, setfurnitureObj] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const res = await api.get("/furniture");
          setfurnitureObj(res.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);

  return (
    <furnitureContext.Provider value={{ setFurnitureType, furnitureType, furnitureObj }}>
      {children}
    </furnitureContext.Provider>
  );
}

export const useFurniture = () => useContext(furnitureContext);