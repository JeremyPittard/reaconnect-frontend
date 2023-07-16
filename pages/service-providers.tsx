import Layout from "@/components/Layout";
import SPForm from "@/components/SPForm";
import SPHero from "@/components/SPHero";
import { motion } from "framer-motion";

export default function ServiceProviders() {
  return (
    <Layout>
      <SPHero />
      <motion.section
        className="pt-24 pb-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          Service Providers:
        </h2>
        <p>
          The not yet listed market represents a huge opportunity for real
          estate service providers to engage with both homeowners and
          prospective buyers or renters. This offers a unique competitive
          advantage and inside track to offering your services first.
        </p>
        <p>
          We at Reaconnect are interested in exploring models and agreements to
          disrupt the current transactional methods that exist in the real
          estate market. Our aim is to enable a ‘fairer go’ for both homeowners
          and buyers / renters.
        </p>
      </motion.section>

      <motion.section
        className="pt-24 py-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          If you’re an estate agent, mortgage broker, settlement agent and
          interested in partnering with us, send us a message and we’ll get in
          touch prior to launching to discuss our value proposition. founders,
          send us a message and we’ll get in touch with you shortly.
        </p>
        <SPForm formName="Service Providers" />
      </motion.section>
    </Layout>
  );
}
