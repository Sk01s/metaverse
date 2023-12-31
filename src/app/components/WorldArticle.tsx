"use client";
import { motion } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import IconFram from "./IconFram";
import Image from "next/image";

type props = {
  index: number;
  state: boolean;
  title: string;
};
const WorldArticle: FC<props> = ({ index, state, title }) => {
  const [isOpen, setIsOpen] = useState(state);
  const [isSmall, setIsSmall] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, []);
  return (
    <motion.div
      variants={{
        hidden: {
          x: "100%",
        },
        show: {
          x: 0,
          transition: {
            duration: 0.5,
            delay: isSmall ? 0.1 : index * 0.1,
          },
        },
      }}
      initial={isSmall ? "show" : "hidden"}
      whileInView="show"
      onClick={() => {
        setIsOpen((isOpen) => !isOpen);
      }}
      className={`relative overflow-hidden rounded-3xl lg:h-[500px] md:h-[500px]   ${
        isOpen
          ? "lg:basis-2/6 md:basis-2/6 basis-[250px] "
          : "lg:basis-1/6 md:basis-1/6 basis-[90px]"
      } transition-all duration-300 cursor-pointer`}
    >
      <Image
        src={`/world-${index + 1}.webp`}
        alt="explore the metaverse"
        className="h-full w-full object-cover"
        layout="fill"
        loading="lazy"
      />
      <div
        className={`absolute w-full lg:h-48 md:h-48  h-44 ${
          isOpen ? "opacity-1" : "opacity-0"
        } bg-gradient-to-br from-[#00000028] to-[#000000ff] bottom-0 rounded-lg transition-opacity duration-200`}
      />
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0.5,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.2 }}
          className="absolute lg:bottom-[15%] bottom-[20%] left-[10%]  text-white flex flex-col gap-2 mb-[5%]"
        >
          <IconFram>
            <svg className="relative w-6 " viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_1_3529)">
                <path
                  d="M11.9996 1.872C14.7851 1.872 17.2886 2.8335 18.9746 4.563C20.3619 4.74342 21.6706 5.30994 22.7516 6.198C20.8601 2.223 16.9421 0 11.9996 0C7.12463 0 3.17963 2.22 1.26562 6.183C2.25673 5.37407 3.43901 4.83329 4.69913 4.6125C6.35363 2.808 8.96063 1.872 11.9996 1.872Z"
                  fill="white"
                />
                <path
                  d="M18.0004 18C16.4396 18.0018 14.9399 17.3935 13.8214 16.305L13.8184 16.302C13.6891 16.2049 13.5504 16.1209 13.4044 16.0515C12.9647 15.8474 12.485 15.7444 12.0004 15.75C11.3794 15.75 10.9069 15.9045 10.5979 16.0515C10.4513 16.1209 10.3121 16.2048 10.1824 16.302L10.1794 16.305C9.47408 16.9897 8.61138 17.4906 7.66713 17.7637C6.72287 18.0369 5.72597 18.0738 4.76409 17.8713C3.80221 17.6689 2.9048 17.2332 2.15078 16.6026C1.39676 15.9719 0.809212 15.1657 0.43981 14.2548C0.0704071 13.3439 -0.0695399 12.3562 0.0322737 11.3785C0.134087 10.4009 0.474543 9.46317 1.02371 8.64791C1.57287 7.83266 2.31392 7.16482 3.18169 6.7031C4.04947 6.24139 5.01739 5.99994 6.00035 6H18.0004C19.5917 6 21.1178 6.63214 22.243 7.75736C23.3682 8.88258 24.0004 10.4087 24.0004 12C24.0004 13.5913 23.3682 15.1174 22.243 16.2426C21.1178 17.3679 19.5917 18 18.0004 18Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3529">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </IconFram>
          ENTER METAVERSE
        </motion.div>
      )}
      <motion.p
        variants={{
          verticle: {
            left: "-10%",
            rotate: -90,
          },
          horizontal: {
            rotate: 0,
            left: "10%",
            y: "5rem",
          },
        }}
        initial="verticle"
        animate={isSmall ? "horizontal" : isOpen ? "horizontal" : "verticle"}
        className={`absolute   ${
          isOpen
            ? "lg-left-[50%] md:left-[50%] sm:left-[30$] left-[45%]"
            : "left-[60%]"
        }  bottom-28 text-white text-2xl whitespace-nowrap select-none  transition-[left] du`}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default WorldArticle;
