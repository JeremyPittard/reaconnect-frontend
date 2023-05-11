import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Atkinson_Hyperlegible, EB_Garamond } from "next/font/google";
import { useRouter } from "next/router";

const atkinson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: "400", subsets: ["latin"] });

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <style jsx global>
        {`
          :root {
            --atkinson-font: ${atkinson.style.fontFamily};
            --garamond-font: ${ebGaramond.style.fontFamily};
          `}
      </style>
      <PageHeader />
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={handleExitComplete}
      >
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <PageFooter />
    </>
  );
}
