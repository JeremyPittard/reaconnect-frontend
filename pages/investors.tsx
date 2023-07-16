import InvestorForm from "@/components/InvestorForm";
import InvestorHero from "@/components/InvestorHero";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Investors() {
  return (
    <Layout>
      <InvestorHero />
      <motion.section
        className="pt-24 pb-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow"
          id="investors"
        >
          Investors:
        </h2>
        <p>
          There is an informal practice that exists in the real estate market
          where potential buyers/renters and real estate agents write letters to
          homeowners that relay their interests in a property. This is to buy or
          rent a specific property or a narrow suburb range of properties, that
          are not on the market.
        </p>
        <p>
          This is an intriguing practice that if formalised represents an
          opportunity, specifically from a data perspective and how that data
          can be harnessed and turned into valuable and marketable insights. As
          a homeowner I have received letters from potential buyers and real
          estate agents (acting on behalf of buyers) expressing interest in
          discussing the prospect of selling my house, even though I’ve not
          listed it as for sale.
        </p>
      </motion.section>
      <motion.section
        className="pt-24 py-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          Our company is focussed on solving this problem:
        </h2>
        <p>
          Formalising the exchange of buyers/renters’ intent and homeowners’
          willingness to sell/rent unlisted real estate properties and
          commercialising this data.
        </p>
        <p>
          A compelling value proposition exists for real estate intermediaries
          to get access to buyers/renters’ intent and homeowners’ willingness
          data and activity ahead of the market. That is being introduced to
          motivated buyers/renters and interested homeowners and commercialising
          that data.
        </p>
      </motion.section>
      <motion.section
        className="pt-24 py-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          Founders:
        </h2>
        <p>
          We are two guys who have the skills, know-how and ability to execute
          on our idea. We are building an MVP to validate our assumptions, get
          user feedback and produce a world class platform.
        </p>
      </motion.section>
      <motion.section
        className="pt-24 py-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          What we are looking for:
        </h2>
        <ul>
          <li>Advice, guidance, and mentorship,</li>
          <li>Funding and</li>
          <li>Access to networks</li>
        </ul>
      </motion.section>
      <motion.section
        className="pt-24 py-6 xl:pt-40 xl:pb-6 max-w-xs md:max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl lg:text-5xl bold mb-7 mx-auto bg-pale-yellow">
          If you’re interested in finding out more about our company and the
          founders, send us a message and we’ll get in touch with you shortly.
        </h2>
        <InvestorForm formName="Investors" />
      </motion.section>
    </Layout>
  );
}
