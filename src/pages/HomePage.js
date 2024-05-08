import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import QnASection from "../components/QnASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Main />
      <QnASection />
      <Footer />
    </div>
  );
}
