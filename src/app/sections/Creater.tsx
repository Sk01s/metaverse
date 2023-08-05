"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motions";
import Image from "next/image";
const Creater = () => {
  return (
    <section className="px-10 flex gap-8 lg:flex-row flex-col">
      <motion.div
        variants={slideIn("left", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        className="relative p-7 flex justify-center flex-col gap-6 border border-[#6A6A6A] bg-gradient-to-b from-[#ffffff0a]  to-[#ffffff00] rounded-3xl z-10"
      >
        <h3 className="text-[2rem]">Samantha</h3>
        <p className="text-md">Founder Metaverus</p>
        <q className="text-2xl">
          With the development of today&#39;s technology, metaverse is very
          useful for today&#39;s work, or can be called web 3.0. by using
          metaverse you can use it as anything
        </q>
        <img
          src="/mouse-scroll.png"
          className="absolute  h-20 lg:right-[-3.5rem] right-[5%] lg:top-[25%] top-[90%] rotate-[-30deg] opacity-80 cursor-pointer"
          alt="scroll up"
        />
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        className="aspect-video"
      >
        <Image
          src="/creater.webp"
          alt="rocket image"
          className=" object-cover rounded-3xl w-full h-full"
          width={3644}
          height={2000}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Creater;
