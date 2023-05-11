import PennyTiles from "./PennyTiles";
import WaitlistForm from "./WaitlistForm";
import { motion } from "framer-motion";

const Hero = () => {
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
        <h2 className="text-6xl lg:text-8xl bold mb-7 mx-auto">
          Not for sale? <br />
          Not a problem
        </h2>
        <p className="mb-7 max-w-xs md:max-w-md">
          {`
          With ReaConnect, you can let homeowners know you're interested in
          buying their property and see if they're down to sell. Easy as that!
          `}
        </p>
        <WaitlistForm />
      </motion.div>
      <PennyTiles />
    </section>
  );
};

export default Hero;

//pat-na1-96804740-72c7-4836-abd1-1f857cf68752
