import React from "react";

import Legend from "./Legend";
import TipBox from "./TipBox";
import Footer from "./Footer";
import ReferenceTables from "./ReferenceTables";

const TipsSection: React.FC = () => {
  return (
    <>
      <section>
        <Legend />
      </section>
      <ReferenceTables />
      <section>
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
          font-size: 1rem;
        }

        @media only screen and (max-width: 800px) {
          section {
            width: 80%;
            font-size: 0.8rem;
          }
        }

        @media only screen and (max-width: 650px) {
          section {
            width: 90%;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default TipsSection;
