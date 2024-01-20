"use client";

import userDetails from "@/components/state/StateManager";
import Link from "next/link";
import { useState, useEffect } from "react";

const Home = () => {
  const { user } = userDetails();

  const [time, setTime] = useState({
    days: 4,
    hours: 12,
    minutes: 46,
    seconds: 3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        const newSeconds = seconds + 1;
        const newMinutes = minutes + Math.floor(newSeconds / 60);
        const newHours = hours + Math.floor(newMinutes / 60);
        const newDays = days + Math.floor(newHours / 24);

        return {
          days: newDays,
          hours: newHours % 24,
          minutes: newMinutes % 60,
          seconds: newSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-400 min-h-screen">
      <header className="w-[100vw] p-10 justify-between text-black pb-0">
        <h2 className="text-3xl font-bold">Hey Student !</h2>
        <p>It's not about studying, it's all about learning !</p>
        <div className="h-1 rounded-full bg-black w-full mt-4"></div>
      </header>
      <section className="grid grid-cols-2">
        <div className="grid place-content-center mr-[25vw] mt-14 ml-10 w-[30rem]">
          <Link
            href={"/classes"}
            className="p-6 w-[20rem] bg-slate-200 rounded-full hover:bg-white text-black hover:shadow-md hover:shadow-black/70"
          >
            👉 See Your all Classes
          </Link>
        </div>
        <div className="mt-16 ml-24 mr-8 w-[520px] h-[520px] pt-[6rem] bg-white text-center text-black rounded-full p-6 items-center content-center">
          <h2 className="text-2xl font-bold text-blue-950">
            Total Time Spent:
          </h2>
          <h3 className="text-3xl font-extrabold text-green-600 my-4">
            <span className="text-3xl">{time.days}</span> Days,{" "}
            <span className="text-3xl">{time.hours}</span> Hours,{" "}
            <span className="text-3xl">{time.minutes}</span> Mins,{" "}
            <span className="text-3xl">{time.seconds}</span> Sec
          </h3>
          <h2 className="text-3xl font-bold text-blue-950">
            Score: <span className="text-red-600 font-bold">290</span> 🔥
          </h2>
          <h2 className="text-2xl mt-6 font-bold text-blue-950">
            Achievements:
          </h2>
          <ul className="mt-2 ml-10 font-mono grid grid-cols-2 w-96">
            <li className="bg-gradient-to-r from-yellow-400 to-red-400 p-2 rounded-full w-44 my-2 text-white font-bold">
              Blade Runner 🔪
            </li>
            <li className="bg-gradient-to-r from-yellow-400 to-red-400 p-2 rounded-full w-44 my-2 text-white font-bold">
              Hard working 💪
            </li>
            <li className="bg-gradient-to-r from-yellow-400 to-red-400 p-2 rounded-full w-44 my-2 text-white font-bold">
              Fast learner 🚅
            </li>
            <li className="bg-gradient-to-r from-yellow-400 to-red-400 p-2 rounded-full w-44 my-2 text-white font-bold">
              First Chicken 🐔
            </li>
          </ul>
        </div>
      </section>
     
    </main>
  );
};

export default Home;
