import React from "react";
import { useFoodContext } from "../../../context/FoodContext";

const TipBox: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      {
        <div className="tip-box">
          <img src="/pictures/idea.png" alt="Lightbulb" className="lightbulb-img" />
          <div className="tip-text">
            <h1>飲食貼士</h1>
            <p>
              {food[31]?.toString() !== "" && food[31].toString().split("請按此")[0]}
              {food[32]?.toString() !== "" && (
                <a href={food[32]?.toString()} target="_blank">
                  請按此{food[31]?.toString().split("請按此")[1]}
                </a>
              )}
            </p>
          </div>
        </div>
      }

      <style jsx>{`
        .tip-box {
          margin: 100px 0;
          background: #e21c24;
          padding: 40px 5%;
          width: 75%;
          border-radius: 20px;
          outline: 3px dashed #fff;
          outline-offset: -20px;
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
        }

        .lightbulb-img {
          width: 100%;
        }

        .tip-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tip-text h1 {
          color: #fef900;
          letter-spacing: 5px;
        }

        .tip-text p {
          color: #fff;
          line-height: 1.5em;
          margin-top: 10px;
        }

        .tip-text a {
          color: #3636e8;
        }

        @media only screen and (max-width: 1150px) {
          .tip-box {
            width: 80%;
          }
        }

        @media only screen and (max-width: 800px) {
          .tip-box {
            margin: 50px 0;
            width: 90%;
            padding: 30px 8%;
            grid-template-columns: 70px 1fr;
          }

          .tip-text p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default TipBox;
