/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ color }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`${color}`}
      style={{ height: isOpen ? "500px" : "100px" }}
      onClick={() => setOpen(!isOpen)}
    />
  );
};

export default Accordion;
