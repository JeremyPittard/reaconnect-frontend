import React from "react";
import WaitlistForm from "./WaitlistForm";
import { motion } from "framer-motion";
import styles from "../styles/feature.module.scss";

const Feature = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.wrap}>
        <div className={styles.ogrid}>
          <div className={styles.shape}>
            <div className="mx-auto max-w-xl text-left flex flex-col items-baseline justify-center h-full">
              <h2 className="text-2xl font-bold md:text-3xl">
                Seen a house you love? Let it know!
              </h2>

              <p className="hidden sm:mt-4 sm:block">
                use our platform to contact homeowners and express an interest
                to buy, with your potential budget. If the owner is also
                interested you can start on your way to owning your dream home.
              </p>

              <div className="mt-4 md:mt-8">
                <WaitlistForm formName="call-out" />
              </div>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <img alt="Student" src="/img/domes.svg" className={styles.img} />

            <img alt="Student" src="/img/arch.svg" className={styles.img} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feature;
