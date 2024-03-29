"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const JoinClass = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-400">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            LVLUP
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    className="bg-gray-50 border uppercase border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="XXXXXX"
                    required={true}
                  ></input>
                </div>

            
                <button
                  onClick={() => {
                    router.push("/clases");
                  }}
                  className="w-full text-white bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Join Class
                </button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinClass;
