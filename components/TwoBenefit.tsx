/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import React from "react";
import CustomButton from "./CustomButton";

const TwoBenefit = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-250px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex flex-col items-center py-24 xl:py-40 mx-auto xl:flex-row">
        <div className="flex flex-col items-center mt-6 xl:items-end xl:w-1/2 xl:mt-0">
          <div className="">
            <h2 className="text-3xl lg:text-5xl bold tracking-tight">
              We keep it simple
            </h2>

            <p className="block max-w-lg mt-4">
              With ReaConnect, you can take a carefree shot at the home you love
              before investing in the extra overhead work that goes into a
              traditional house sale. Our platform allows you to express your
              interest to buy as well as your budget to connect with potential
              sellers and streamline the buying process.
            </p>

            <div className="mt-6 sm:-mx-2">
              <CustomButton buttonType="link" linkAddress="/" linkTarget="self">
                Join the waitlist
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex justify-center xl:w-1/2">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
            src="/img/green-circle.svg"
            alt="#"
          />
        </div>
      </div>
    </motion.section>
  );
};
export default TwoBenefit;
