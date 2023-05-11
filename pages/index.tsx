import ExpandClaim from "@/components/ExpandClaim";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import OneBenefit from "@/components/OneBenefit";
import TwoBenefit from "@/components/TwoBenefit";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <ExpandClaim></ExpandClaim>
      <OneBenefit></OneBenefit>
      <TwoBenefit></TwoBenefit>
      <Feature></Feature>
    </Layout>
  );
}
