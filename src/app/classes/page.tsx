import React from "react";

const Classes = () => {
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
    </main>
  );
};

export default Classes;
