import { motion } from "framer-motion";
import styles from "../styles/penny-tiles.module.scss";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, translateY: 50 },
  show: {
    opacity: 1,
    translateY: 0,
  },
};

const PennyTiles = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.tilesContainer}
    >
      <Image
        src="/img/bg.svg"
        alt="#"
        fill
        objectFit="cover"
        objectPosition="top"
      />
    </motion.div>
  );
};

export default PennyTiles;
