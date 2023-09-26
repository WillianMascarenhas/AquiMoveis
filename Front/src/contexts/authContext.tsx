import { api } from "@/service/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { ILogin, IUserRequest } from "@/interfaces/user.interface";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

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
    register: (registerData: IUserRequest) => void
}

const authContext = createContext<authProviderData>({} as authProviderData);

export function AuthProvider({ children }: Props) {

    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [token, setToken] = useState<string>("")

    const router = useRouter()

    const [loginError, setLoginError] = useState<string | null>(null);


    const login = (loginData: ILogin) =>{
     const res = api.post("login", loginData).then((res) => {
      //  setCookie(null, "AquiMovies_token", res.data.token, {
      //    maxAge: 3600 * 24,
      //    path: "/"
      //  })
      toast.success("Login realizado!")
      router.push(`/dashbord`);
       console.log(res)
    }).catch((error) => {
        console.log(error)
        if(error.request.status === 403){
          setLoginError("Email ou senha invalido")
        }
        toast.success("Erro ao tentar realizar o login.")
      } )
    }

    const register = (registerData: IUserRequest) => {
      api.post("user", registerData).then(() => {router.push("/login")}).catch((error) => console.log(error))
    }

    

  return (
    <authContext.Provider value={{ showPassword, setShowPassword, token, setToken, login, loginError, register }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);