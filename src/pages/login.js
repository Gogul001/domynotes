import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <>
      <div className="flex lg:min-h-screen">
        <div className="lg:flex-1 bg-black">
          <img
            className="home w-0 lg:w-full h-screen pl-4 pr-4 pt-5 pb-3"
            src="home.png"
            alt="describe the image here"
          ></img>
        </div>
        <div className=" bg-white flex-1 ">
          <img
            className="mobilehome lg:w-0"
            src="mobileHome.png"
            alt="describe the image here"
          ></img>
          <div className=" text-2xl font-semibold p-4 flex flex-row lg:pl-24 lg:pt-8">
            <img
              className="logo fill-slate-600 pl-1 w-12 h-12"
              src="logo.svg"
              alt="logo"
            ></img>
            <h1 className="pt-3 pl-2">Domynotes</h1>
          </div>

          <h1 className=" text-base p-3 pb-12 lg:pl-24">
            A new way to experience real state in the infinite virtual space.
          </h1>
          <h1 className="text-xl font-semibold pl-2 pb-3 lg:pl-24">Login</h1>
          <h1 className=" text-sm font-semibold p-2 lg:pl-24">Email</h1>
          <div class="mb-4 pl-3 lg:pl-24">
            <input
              class="peer hover:border-orange-200 shadow appearance-none border rounded w-72 py-2 px-3 leading-tight focus:outline-none text-sm text-black focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              placeholder=" Enter the email..."
            />
          </div>
          <h1 className=" text-sm font-semibold p-2 pt-0 lg:pl-24">Password</h1>
          <div class="mb-4 pl-3 lg:pl-24">
            <input
              class="peer hover:border-orange-200  shadow appearance-none border rounded w-72 py-2 px-3 leading-tight focus:outline-none text-sm text-black focus:shadow-outline"
              id="username"
              type="password"
              name="name"
              placeholder=" Enter the Password..."
            />
          </div>
          <div class="flex justify-center gap-2 lg:justify-start  lg:pl-24 ">
            <input type="checkbox" class="accent-gray-700  bg-grey-700" />

            <label
              class="form-check-label inline-block text-gray-900 text-sm "
              for="myCheck"
            >
              Remember me
            </label>
            <label class="form-check-label inline-block text-gray-900 text-sm pl-16 underline underline-offset-2">
              Forget password?
            </label>
          </div>

          <div className="flex flex-row pt-6 justify-center gap-6 lg:gap-8 lg:justify-start  lg:pl-24">
            <div className="">
              <button class="bg-black text-white font-normal py-2 px-12 rounded-md text-sm border">
                Login
              </button>
            </div>

            <button class="bg-slate-100 text-black font-normal py-2 px-12 rounded-md text-sm border">
              Sign Up
            </button>
          </div>

          <div className=" text-sm font-medium text-slate-500 p-3 pl-28 pb-3 pt-4 lg:pt-8 lg:pb-8 lg:pl-48">
            or login with
          </div>
          <div className="flex flex-row justify-center pb-5  lg:justify-start  lg:pl-24">
            <div className="p-2">
              <button class="bg-white text-black font-normal py-1 px-2 lg:px-5 rounded-md text-sm border border-slate-500">
                Facebook
              </button>
            </div>

            <div className="px-5 py-2 lg:p-2">
              <button class="bg-white text-black font-normal py-1 px-2 lg:px-5 rounded-md text-sm border border-slate-500">
                Linked In
              </button>
            </div>

            <div className="p-2">
              <button class="bg-white text-black font-normal py-1 px-5 rounded-md text-sm border border-slate-500">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
