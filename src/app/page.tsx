import React from "react";

const Home = () => {
  return (
    <main className="bg-gray-400 min-h-screen">
      <header className="w-[100vw] p-10 justify-between text-black mb-4">
        <h2 className="text-3xl font-bold">Hey mamaa !</h2>
        <p>Are you excited to learn ?</p>
        <div className="h-1 rounded-full bg-black w-full mt-4"></div>
      </header>
      <section className="px-24">
        <h1 className="text-4xl text-center text-black font-extrabold mb-8">
          Your Classes
        </h1>
        <div className="bg-gray-200 min-h-24 w-full rounded-lg">
          <p className="text-center text-black my-auto">Sorry You dont have any clases !</p>
        </div>
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
