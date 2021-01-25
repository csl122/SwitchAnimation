import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

export const Example = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  return (
    <ul>
      {colors.map((background) => (
        <motion.li
          key={background.backgroundColor}
          layout
          transition={spring}
          style={background}
        />
      ))}
    </ul>
  );
};

const initialColors = [{height: "20px", backgroundColor: "#FF008C"}, 
{height: "50px", backgroundColor: "#D309E1"}, 
{height: "90px", backgroundColor: "#9C1AFF"}, 
{height: "140px", backgroundColor: "#7700FF"}];
