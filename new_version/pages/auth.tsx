import { useState } from "react";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiAstronautHelmet, GiRocketThruster } from "react-icons/gi";

const Auth = () => {

  const [formType, setFormType] = useState<string>('login')
  
  const handleFormType = ():void => {
    setFormType(formType === 'login' ? 'signup' : 'login')
  }

    return (
      <div className="h-screen w-screen  flex flex-col gap-10 justify-center items-center bg-black">
        {formType === "login" ? (
          <GiRocketThruster className="text-purple-500 text-3xl" />
        ) : (
          <GiAstronautHelmet className="text-purple-500 text-3xl" />
        )}
        <form className="w-1/3 border py-8 border-white-2 rounded-md">
          <div className="flex flex-col m-auto gap-6 w-2/3">
            {formType !== "login" ? (
              <label htmlFor="username" className="flex flex-col gap-2">
                <span className="text-sm text-white">Username</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="p-2 rounded-full outline-none outline-white  outline-1 bg-transparent text-white text-sm"
                  required
                />
              </label>
            ) : null}
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="text-sm text-white">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 rounded-full outline-none outline-white  outline-1 bg-transparent text-white text-sm"
                required
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-2">
              <span className="text-sm text-white">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 rounded-full outline-none outline-white  outline-1 bg-transparent text-white text-sm"
                required
              />
            </label>
            <button className="text-white m-auto border border-white-1 rounded-md p-2 flex gap-2 items-center" type="button"><AiFillGoogleCircle className="text-xl"/>Continue with Google</button>
            <input
              type="submit"
              value="SUBMIT"
              className="text-white border border-white-1 w-fit rounded-md p-2 m-auto cursor-pointer hover:bg-purple-500 hover:text-white  transition-all duration-200 ease-linear"
            />
          </div>
          <p className="mt-6 text-blue-500 ml-10">
            {formType === "login" ? "New User ? " : "Already a user? "}
            <button type="button" className="text-white" onClick={handleFormType}>
              {formType === "login" ? "sign-up" : "login"}
            </button>
          </p>
        </form>
      </div>
    );
}
 
export default Auth;