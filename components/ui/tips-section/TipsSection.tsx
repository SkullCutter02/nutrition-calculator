import React from "react";

import TipBox from "./TipBox";
import Footer from "./Footer";
import ReferenceTables from "./ReferenceTables";

const TipsSection: React.FC = () => {
  return (
    <>
      <ReferenceTables />
      <section>
        <TipBox />
        <Footer />
      </section>
    </>
  );
};

export default TipsSection;
