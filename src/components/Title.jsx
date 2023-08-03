import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Experience = ({title, className = ""}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} ${className}`}>
          {title}
        </h2>
      </motion.div>
    </>
  );
};

export default Experience;