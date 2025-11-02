"use client";

import "../globals.css";
import { useForm } from "react-hook-form";
import TargetCursor from "../../components/TargetCursor.jsx";
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen bg-pink-400 flex text-white">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} className=""/>
      <div className="w-[50%] h-[100%] bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-8">
        {/* Your content goes here */}
      </div>
      <div className="w-[40%] h-[80%] bg-white/30 backdrop-blur-md rounded-2xl border gap-5 border-white/30 shadow-lg p-8 ml-20 mt-20 flex flex-col items-center">
        <span className="text-5xl cursor-target">Sign Up</span>
        <form action="post" className="text-3xl mt-10" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username" >Username :</label>
            <input id="username" {...register("username")} type="text" placeholder="username" className="cursor-target ml-5 border p-2 pl-4 "/>
            <label htmlFor="email" >Email :</label>
            <input id="email" {...register("email")} type="text" placeholder="email" className="mt-10 cursor-target ml-21 border p-2 pl-4 "/>
            <label htmlFor="password" {...register("password")} >Password :</label>
            <input id="password" type="password" placeholder="password" className="mt-10 cursor-target ml-8 border p-2 pl-4 "/>
            <button type="submit" className="cursor-target text-white bg-pink-400 p-2 pl-4 pr-4 rounded-2xl mt-20 ml-50">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
