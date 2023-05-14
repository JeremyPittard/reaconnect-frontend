import { motion } from "framer-motion";

import React from "react";

const OneBenefit = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.3 }}
        className="my-24 xl:my-40 max-w-xs md:max-w-3xl mx-auto"
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto">
          Make the first move!
        </h2>
        <p className="mb-7">
          take the chance to get a great deal on your dream home. With
          off-market listings, you can often avoid competition from other buyers
          and negotiate directly with the seller, giving you the chance to
          secure a lower price than you might find on the open market. This can
          help you save money and feel more confident that you`re getting a good
          deal on the home of your dreams.
        </p>
      </motion.section>
    </>
  );
};
export default OneBenefit;
