import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import JsonData from "../data/data.json";
import { Gallery } from "../components/gallery";
import { PortFolio } from "../components/portfolio";
import { Contact } from "../components/contact";
import ClientsSlider from "../components/ClientsSlider";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";
function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Header />
      <About data={landingPageData.About} />
      <Gallery />
      <PortFolio />
      <ClientsSlider />
      <WhyUs />
      <CTA />
      <FAQSection />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </>
  );
}

export default Home;
