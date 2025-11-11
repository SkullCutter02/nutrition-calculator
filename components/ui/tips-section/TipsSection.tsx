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

      <style jsx>{`
        section {
          width: 50%;
          margin: 0 auto;
        }

        @media screen and (max-width: 1000px) {
          section {
            width: 70%;
          }
        }

        @media screen and (max-width: 600px) {
          section {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default TipsSection;
