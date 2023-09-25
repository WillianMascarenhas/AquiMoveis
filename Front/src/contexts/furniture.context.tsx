import { api } from "@/service/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";



interface Props {
  children: ReactNode;
}

interface furnitureProviderData {
}

const furnitureContext = createContext<furnitureProviderData>({} as furnitureProviderData);

export function FurnitureProvider({ children }: Props) {

  return (
    <furnitureContext.Provider value={{  }}>
      {children}
    </furnitureContext.Provider>
  );
}

export const useFurniture = () => useContext(furnitureContext);