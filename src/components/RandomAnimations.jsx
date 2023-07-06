import {
  motion,
  useMotionValue,
  useTransform,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";

const RandomAnimations = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { x: "100%" });
      animate("li", { opacity: 1 });
    };

    animation();
  }, []);

  const [counter, setCounter] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const [rotator, setRotator] = useState(0);

  //   const list = { hidden: { opacity: 1 } };
  //   const item = { hidden: { x: -10, opacity: 1 } };

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const btnClassName =
    "p-[1rem] rounded-lg border border-blue-500 text-white-700 mx-[1rem]";

  const list = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 1,
      },
    }),
    hidden: { opacity: 0 },
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100000, {
      type: "spring",
      duration: 0.5,
    });

    return controls.stop;
  }, []);

  //   const item = {
  //     visible: { opacity: 1 },
  //     hidden: { opacity: 0, x: -100 },
  //   };

  return (
    <div>
      <h1 className="text-[4rem] my-[2rem]">Random Animation</h1>

      <motion.div
        className="w-[9rem] h-[9rem] bg-yellow-700 text-white text-[2rem]"
        animate={{ transform: "translateX(100px)" }}
      />
      <motion.div className="w-[9rem] h-[9rem] bg-cyan-700 text-white text-[2rem]">
        {rounded}
      </motion.div>
      <ul ref={scope} className="bg-red-600">
        <li>Enter</li>
        <li>Close</li>
        <li>Between</li>
      </ul>
      <motion.div
        animate={{ x: counter, rotate: rotator }}
        className="w-[10rem] h-[10rem] bg-red-400"
      />
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -500, right: 500 }}
        className="w-[10rem] h-[10rem] bg-green-400"
      />
      <motion.ul animate="visible" variants={list}>
        {["Great", "Powerful", "Healed"].map((item, i) => (
          <motion.li
            key={i}
            custom={i}
            animate="visible"
            initial="hidden"
            variants={list}
          >
            {item}
          </motion.li>
        ))}
        {/* <motion.li variants={item}>Great</motion.li>
        <motion.li variants={item}>Powerful</motion.li>
        <motion.li variants={item}>Healed</motion.li> */}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[10rem] h-[10rem] bg-yellow-400"
      />
      <motion.div
        drag="x"
        style={{ x, opacity }}
        className="w-[10rem] h-[10rem] bg-pink-400"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[10rem] h-[10rem] bg-orange-400"
      />
      <motion.div
        className="w-[10rem] h-[10rem] bg-blue-800"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          //   repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full h-[40rem] bg-gray-800 absolute top-0 left-0 "
          />
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        onClick={() => {
          setIsVisible((prevState) => !prevState);
        }}
        className={btnClassName}
      >
        Toggle Visibility
      </motion.button>
      <div
        onClick={() => animate(".boxes", { opacity: 0 })}
        className="w-[10rem] h-[10rem] bg-purple-400"
      />
      <div className="flex my-[2rem]">
        <button
          onClick={() => {
            setCounter((prevState) => prevState - 100);
          }}
          className={btnClassName}
        >
          Decrease counter by 100
        </button>
        <button
          onClick={() => {
            setCounter((prevState) => prevState + 100);
          }}
          className={btnClassName}
        >
          Increase counter by 100
        </button>
        <button
          onClick={() => {
            setRotator((prevState) => prevState + 20);
          }}
          className={btnClassName}
        >
          Rotate by 20
        </button>
      </div>
    </div>
  );
};

export default RandomAnimations;
