"use client";

import userDetails from "@/components/state/StateManager";
import Link from "next/link";
import React from "react";

const Home = () => {
  const { user } = userDetails();

  return (
    <main className="bg-gray-400 min-h-screen">
      <header className="w-[100vw] p-10 justify-between text-black mb-4">
        <h2 className="text-3xl font-bold">Hey {user?.name} !</h2>
        <p>It's not about studying, it's all about learning !</p>
        <div className="h-1 rounded-full bg-black w-full mt-4"></div>
      </header>
      <section className="px-44 grid place-content-center">
        <Link
          href={"/classes"}
          className="p-6 bg-slate-200 rounded-full hover:bg-white text-black hover:shadow-md hover:shadow-black/70"
        >
          👉 See Your all Classes
        </Link>
      </section>
      <footer className="fixed bottom-10 right-10">
        <button className="bg-slate-600 hover:bg-slate-600/40 hover:shadow-md hover:shadow-black/70 p-4 rounded-full text-white font-extrabold">
          + Join Class
        </button>
      </footer>
    </main>
  );
};

export default Home;
