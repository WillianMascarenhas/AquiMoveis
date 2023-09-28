import { api } from "@/service/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";



interface Props {
  children: ReactNode;
}

interface furnitureProviderData {
  furniture: string,
  setFurniture: Dispatch<SetStateAction<string>>
}

const furnitureContext = createContext<furnitureProviderData>({} as furnitureProviderData);

export function FurnitureProvider({ children }: Props) {

    const [furniture, setFurniture] = useState("/furniture")

  return (
    <furnitureContext.Provider value={{ furniture, setFurniture }}>
      {children}
    </furnitureContext.Provider>
  );
}

export const useFurniture = () => useContext(furnitureContext);