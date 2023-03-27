import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
          <h1 className="text-xl font-semibold pl-2 pb-3 lg:pl-24">
            Login Space
          </h1>
          <h1 className=" text-sm font-semibold p-2 lg:pl-24">SpaceName</h1>
          <div class="mb-4 pl-3 lg:pl-24">
            <input
              class="peer hover:border-orange-200 shadow appearance-none border rounded w-72 py-2 px-3 leading-tight focus:outline-none text-sm text-black focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              placeholder=" Enter the Spacename..."
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
          </div>

          <div className="flex flex-row pt-6 justify-center gap-6 lg:gap-8 lg:justify-start  lg:pl-24">
            <div className="">
              <button class="bg-black text-white font-normal py-2 px-12 rounded-md text-sm border">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
