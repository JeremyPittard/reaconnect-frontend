/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const OneBenefit = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex flex-col items-center py-24 xl:py-40 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src="/img/yellow-circle.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-3xl lg:text-5xl bold tracking-tight">
              Make the first move!
            </h2>

            <p className="block max-w-lg mt-4">
              take the chance to get a great deal on your dream home. With
              off-market listings, you can often avoid competition from other
              buyers and negotiate directly with the seller, giving you the
              chance to secure a lower price than you might find on the open
              market. This can help you save money and feel more confident that
              you`re getting a good deal on the home of your dreams.
            </p>

            <div className="mt-6 sm:-mx-2">
              <CustomButton buttonType="link" linkAddress="/" linkTarget="self">
                Join the waitlist
              </CustomButton>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default OneBenefit;
