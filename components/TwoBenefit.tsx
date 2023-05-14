import { motion } from "framer-motion";

import React from "react";

const TwoBenefit = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.3 }}
      className="my-24 xl:my-40 max-w-xs md:max-w-3xl mx-auto"
    >
      <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto">
        We keep it simple.
      </h2>
      <p className="mb-7">
        With ReaConnect, you can take a carefree shot at the home you love
        before investing in the extra overhead work that goes into a traditional
        house sale. Our platform allows you to express your interest to buy as
        well as your budget to connect with potential sellers and streamline the
        buying process.
      </p>
    </motion.section>
  );
};
export default TwoBenefit;
