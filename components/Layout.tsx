import { motion } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -5, opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <main>{children}</main>
    </motion.div>
  );
};

export default Layout;
