import ExpandClaim from "@/components/ExpandClaim";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <ExpandClaim></ExpandClaim>
      <Feature></Feature>
    </Layout>
  );
}
