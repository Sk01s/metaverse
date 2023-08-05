import React from "react";

type Props = {
  children: React.ReactNode;
};

function IconFram({ children }: Props) {
  return (
    <div className="p-4 bg-[#ffffff20] w-14 rounded-3xl backdrop-blur-xl text-white">
      {children}
    </div>
  );
}

export default IconFram;
