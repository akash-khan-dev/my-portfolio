import About from "@/component/About";
import Blog from "@/component/Blog";
import Hero from "@/component/Hero";
import Layout from "@/component/Layout/Layout";
import Portfolio from "@/component/Portfolio";
import Service from "@/component/Services";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Blog />
      </Layout>
    </>
  );
}
