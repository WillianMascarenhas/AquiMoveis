import { api } from "@/service/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { ILogin } from "@/interfaces/user.interface";

interface Props {
  children: ReactNode;
}

interface authProviderData {
    showPassword: boolean,
    setShowPassword: Dispatch<SetStateAction<boolean>>,
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
    login: (loginData: ILogin) => void,
    loginError: string | null
}

const authContext = createContext<authProviderData>({} as authProviderData);

export function AuthProvider({ children }: Props) {

    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [token, setToken] = useState<string>("")

    const router = useRouter()

    const [loginError, setLoginError] = useState<string | null>(null);


    const login = (loginData: ILogin) =>{
      api.post("login", loginData).then(() => router.push("/")).catch((error) => {
        console.log(error)
        if(error.request.status === 403){
          setLoginError("Email ou senha invalido")
        }
      } )
    }

    

  return (
    <authContext.Provider value={{ showPassword, setShowPassword, token, setToken, login, loginError }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);