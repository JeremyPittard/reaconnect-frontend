import ExpandClaim from "@/components/ExpandClaim";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import OneBenefit from "@/components/OneBenefit";
import TwoBenefit from "@/components/TwoBenefit";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReaConnect | Seen a house you love? Let it know </title>
        <meta
          name="description"
          content="With ReaConnect, you can let homeowners know you're interested in buying their property and see if they're down to sell. Easy as that!"
        />
      </Head>
      <Layout>
        <Hero></Hero>
        <ExpandClaim></ExpandClaim>
        <OneBenefit></OneBenefit>
        <TwoBenefit></TwoBenefit>
        <Feature></Feature>
      </Layout>
    </>
  );
}
