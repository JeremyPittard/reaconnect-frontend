/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const ExpandClaim = () => {
  return (
    <motion.section
      className="my-24 xl:my-40 max-w-xs md:max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl lg:text-5xl bold mb-7 mx-auto">
        Your Dream Home is Waiting for You: <br />
      </h1>
      <p className="mb-7">
        Have you ever walked past a house and wished it was for sale? What if
        you could make an enquiry, even if it's not listed on the market? At
        ReaConnect, we believe that most real estate assets are always on the
        market, for the right price. That's why we're building a platform to
        connect potential buyers with homeowners who haven't listed their
        property yet. With our platform, you can make enquire and express your
        interest in your dream home. It's a win-win situation: homeowners can
        receive unexpected offers, and buyers can snag their dream home before
        it hits the market. Join ReaConnect today and start making your
        homeownership dreams a reality.
      </p>
    </motion.section>
  );
};

export default ExpandClaim;
