"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  isAnimated: boolean;
  text: string;
  className?: string;
};

const Title = ({ isAnimated, text, className }: Props) => {
  return (
    <motion.h6
      variants={{
        hidden: {
          width: 40,
        },
        show: {
          width: "fit-content",
          transition: {
            duration: 2,
            type: "keyframes",
            ease: "easeInOut",
          },
        },
      }}
      initial={isAnimated ? "hidden" : ""}
      whileInView={isAnimated ? "show" : ""}
      className={` text-secondary-white text-[14px] overflow-hidden whitespace-nowrap w-fit ${className}`}
    >
      |{"  "} {text}
    </motion.h6>
  );
};

export default Title;
