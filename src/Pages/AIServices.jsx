import React from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "../components/navigation";
import AIHeader from "../components/AIHeader";
import Footer from "../components/Footer";
import DesignServices from "../components/AIDesignServices";
import AISwiper from "../components/AISwiper";
import AIImageContent from "../components/AIImageContent";
import StartProject from "../components/StartProject";

function AIServices() {
  const { category } = useParams();
  const categoryData = {
    AI: {
      header: "Artificial Intelligence",
      content: "Content related to AI",
    },
    ComputerVision: {
      header: "Computer Vision",
      content: "Content related to Computer Vision",
    },
    NLP: {
      header: "Natural Language Processing",
      content: "Content related to NLP",
    },
    DocumentAI: {
      header: "Document AI",
      content: "Content related to Document AI",
    },
    PredictiveModeling: {
      header: "Predictive Modeling",
      content: "Content related to Predictive Modeling",
    },
    Consultations: {
      header: "Consultations",
      content: "Content related to Consultations",
    },
  };

  const data = categoryData[category] || {
    header: "Service Not Found",
    content: "The service you are looking for does not exist.",
  };
  console.log(data);
  return (
    <>
      <Navigation />
      <AIHeader title={data.header} />
      <DesignServices />
      <AISwiper />
      <AIImageContent />
      <StartProject />
      <Footer />
    </>
  );
}

export default AIServices;
