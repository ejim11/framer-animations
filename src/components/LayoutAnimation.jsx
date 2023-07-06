import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Accordion from "./Accordion";

const LayoutAnimation = () => {
  const [isOn, setIsOn] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
      <h1 className="text-[4rem] my-[2rem]">Layout Animation</h1>
      <div
        className={`w-[10rem] h-[5rem] flex items-center cursor-pointer rounded-[1rem] p-[.5rem] ${
          isOn ? "justify-end  bg-cyan-400 " : "justify-start  bg-red-400 "
        } `}
        onClick={() => {
          setIsOn((prevState) => !prevState);
        }}
      >
        <motion.div
          layout
          transition={spring}
          className={`rounded-full bg-white w-[4rem] h-[4rem] `}
        ></motion.div>
      </div>
      {/* <Accordion /> */}
      <LayoutGroup>
        <Accordion color="bg-red-700" />
        <Accordion color="bg-blue-700" />
      </LayoutGroup>
    </>
  );
};

export default LayoutAnimation;
