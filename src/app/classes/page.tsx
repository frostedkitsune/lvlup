"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Classes = () => {
  const classes = [
    "Computer Science",
    "Internet of Things",
    "Embedded Sysytem",
  ];

  const router = useRouter();

  return (
    <main className="bg-gray-400 min-h-screen">
      <section className="px-44 py-20">
        <h1 className="text-4xl text-center text-black font-extrabold mb-12">
          Your Classes
        </h1>
        <div className="bg-gray-200 min-h-44 w-full rounded-lg grid place-content-center">
          <p className="text-center text-black my-auto">
            Sorry You dont have any clases !
          </p>
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
