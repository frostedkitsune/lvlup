"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Classes = () => {
  const classes = [
    {
      name: "Computer Science",
      url: "classes/cse",
    },
    {
      name: "Internet of Things",
      url: "classes/iot",
    },
    {
      name: "Embedded Sysytem",
      url: "classes/embd",
    },
  ];

  const router = useRouter();

  return (
    <main className="bg-gray-400 min-h-screen">
      <section className="px-44 py-20">
        <h1 className="text-4xl text-center text-black font-extrabold mb-12">
          Your Classes
        </h1>
        <div className="bg-gray-200 min-h-96 w-full rounded-[3rem] grid place-content-center">
          {classes?.map((e, index) => (
            <Link href={e.url}>
              <div
                key={index}
                className="p-6 px-24 font-extrabold text-white bg-gradient-to-br from-yellow-500 to-red-400 rounded-[3rem] my-4 text-center"
              >
                {e.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <footer className="fixed bottom-10 right-10">
        <button
          onClick={() => {
            router.push("/classes/join");
          }}
          className="bg-slate-600 hover:bg-slate-600/40 hover:shadow-md hover:shadow-black/70 p-4 rounded-full text-white font-extrabold"
        >
          + Join Class
        </button>
      </footer>
    </main>
  );
};

export default Classes;
