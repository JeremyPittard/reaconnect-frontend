import React from "react";
import WaitlistForm from "./WaitlistForm";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.3 }}
      className="py-24 xl:py-40 bg-mustard"
      style={{
        backgroundImage: `url('/img/scales.svg')`,
        backgroundSize: "30%",
      }}
    >
      <div className="bg-mustard rounded-sm max-w-xs md:max-w-3xl mx-auto p-3 ">
        <h2 className="text-2xl font-bold md:text-3xl text-center">
          Seen a house you love? Let it know!
        </h2>

        <p className="hidden sm:mt-4 sm:block mb-3">
          use our platform to contact homeowners and express an interest to buy,
          with your potential budget. If the owner is also interested you can
          start on your way to owning your dream home.
        </p>
        <WaitlistForm formName="call-out" />
      </div>
    </motion.section>
  );
};

export default Feature;