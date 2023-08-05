"use client";
import React, { FC, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { slideIn } from "../utils/motions";
type Props = {
  closeNav: () => void;
  isOpen: boolean;
};
const NavList = ({ isOpen, closeNav }: Props) => {
  return (
    <motion.nav
      variants={slideIn("right", "sprin", 0, 0.4)}
      initial="hidden"
      animate={isOpen ? "show" : "hidden"}
      className="absolute max-w-[20rem] w-[60%] h-full bg-gradient-to-bl from-[#000] to-[#05011ecb] right-0 top-0 z-50 flex justify-center items-center p-12 rounded-tl-3xl rounded-bl-3xl"
    >
      <button className="absolute right-8 top-4 w-6 h-6" onClick={closeNav}>
        <Image src={"/x-symbol.svg"} alt="" layout="fill" />
      </button>
      <ul className="flex flex-col gap-6 items-center">
        <motion.li whileTap={{ scale: 0.9 }} onClick={closeNav}>
          <Link
            className="hover:bg-[#aeaeae42]  p-4 rounded-2xl"
            href={"#description"}
          >
            Description
          </Link>
        </motion.li>

        <motion.li whileTap={{ scale: 0.9 }} onClick={closeNav}>
          <Link
            className="hover:bg-[#aeaeae42]  p-4 rounded-2xl"
            href={"#world"}
          >
            World
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }} onClick={closeNav}>
          <Link className="hover:bg-[#aeaeae42]  p-4 rounded-2xl" href={"#map"}>
            Map
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }} onClick={closeNav}>
          <Link
            className="hover:bg-[#aeaeae42]  p-4 rounded-2xl"
            href={"#information"}
          >
            Information
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }} onClick={closeNav}>
          <Link
            className="hover:bg-[#aeaeae42]  p-4 rounded-2xl"
            href={"#about"}
          >
            About
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default NavList;
