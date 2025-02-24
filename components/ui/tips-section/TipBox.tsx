import React from "react";
import { useFoodContext } from "../../../context/FoodContext";

const TipBox: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      {
        <div className="tip-container">
          <img src="/pictures/nurse.png" alt="Nurse" className="nurse-img" />
          <div className="tip-box">
            <div className="triangle-right"></div>
            <img src="/pictures/idea.png" alt="Lightbulb" className="lightbulb-img" />
            <div className="tip-text">
              <h1>
                飲食貼士{" "}
                <span>
                  <img src="/pictures/idea.png" alt="Lightbulb" />
                </span>
              </h1>
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
        </div>
      }

      <style jsx>{`
        .tip-container {
          display: flex;
          width: 100%;
        }

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
          position: relative;
        }

        .triangle-right {
          position: absolute;
          left: -25px;
          top: 50px;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 25px solid #e21c24;
        }

        .nurse-img {
          width: 20%;
          object-fit: contain;
          margin-right: 20px;
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

        .tip-text h1 span img {
          width: 30px;
          transform: translateY(6px);
          display: none;
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

        @media only screen and (max-width: 550px) {
          .nurse-img {
            display: none;
          }

          .lightbulb-img {
            display: none;
          }

          .triangle-right {
            display: none;
          }

          .tip-box {
            margin: 100px auto;
            grid-template-columns: 100%;
            padding: 40px 10%;
          }

          .tip-text {
            width: 100%;
          }

          .tip-text h1 span img {
            display: inline;
          }
        }
      `}</style>
    </>
  );
};

export default TipBox;
