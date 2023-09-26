import { LoginForm } from "@/components/Forms/Login";
import { NextPage } from "next";


const loginPage: NextPage= () => {
  return (
    <main className="body z-10 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(https://images.pexels.com/photos/12303272/pexels-photo-12303272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
        className=" absolute -z-20 w-full h-[100%] bg-center bg-cover"
      ></div>
      <div className="absolute w-screen h-screen -z-10 bg-gray-1000/80"/>
      <LoginForm />
    </main>
  );
};

export default loginPage;
