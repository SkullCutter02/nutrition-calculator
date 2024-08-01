import React from "react";
import { useFoodContext } from "../../../context/FoodContext";

const TipBox: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <div className="tip-box">
        <h1>飲食貼士</h1>
        <p>{food[31]?.toString() || "We don't have tips yet!"}</p>
      </div>

      <style jsx>{`
        .tip-box {
          margin: 100px 0;
          background: #e21c24;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 10%;
          width: 60%;
          border-radius: 20px;
          outline: 3px dashed #fff;
          outline-offset: -20px;
        }

        .tip-box h1 {
          color: #fef900;
          letter-spacing: 5px;
        }

        .tip-box p {
          color: #fff;
          line-height: 1.5em;
          margin-top: 10px;
        }

        @media only screen and (max-width: 800px) {
          .tip-box {
            margin: 50px 0;
            width: 80%;
          }
        }
      `}</style>
    </>
  );
};

export default TipBox;
