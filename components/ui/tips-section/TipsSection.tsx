import React from "react";

import Legend from "./Legend";
import TipBox from "./TipBox";
import Footer from "./Footer";

const TipsSection: React.FC = () => {
  return (
    <>
      <section>
        <Legend />
        <TipBox />
        <Footer />
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60%;
          margin: 7px auto;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default TipsSection;
