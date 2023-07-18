import CustomButton from "./CustomButton";
import PennyTiles from "./PennyTiles";
import WaitlistForm from "./WaitlistForm";
import { motion } from "framer-motion";

const SPHero = () => {
  console.log(process.env.NEXT_PUBLIC_BADD, "add");

  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="content max-w-3xl m-auto p-2 h-[60vh] flex flex-col justify-center"
      >
        <h1 className="text-6xl lg:text-8xl bold mb-7 mx-auto">Get Involved</h1>
        <p className="mb-7 max-w-xs md:max-w-md">
          {`
          work in real estate, settlements or just want to get your business involved? 
          `}
        </p>
        <CustomButton buttonType="link" linkAddress="#sp" linkTarget="self">
          find out more
        </CustomButton>
      </motion.div>
      <PennyTiles />
    </section>
  );
};

export default SPHero;

//pat-na1-96804740-72c7-4836-abd1-1f857cf68752
