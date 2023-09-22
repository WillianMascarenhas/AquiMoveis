import { RegisterForm } from "@/components/Forms/Register";
import { NextPage } from "next";


const registerPage: NextPage= () => {
  return (
    <main className="body z-10 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(https://images.pexels.com/photos/12303272/pexels-photo-12303272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
        className=" absolute -z-20 w-full h-[200%] sm:h-full bg-center bg-cover bg-fixed"
      ></div>
      <div className="absolute w-screen h-[200%] sm:h-screen -z-10 bg-gray-1000/80"/>
      <RegisterForm />
    </main>
  );
};

export default registerPage;
