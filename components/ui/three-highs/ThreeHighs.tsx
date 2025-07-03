import React from "react";

import { useFoodContext } from "../../../context/FoodContext";
import Legend from "../tips-section/Legend";

const ThreeHighs: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <section id="three-highs">
        <h1 className="food-name">{food[5].toString()}</h1>
        <div
          style={{
            backgroundImage: `url("https://drive.google.com/thumbnail?id=${food[30]}&sz=w300"), url("https://drive.google.com/thumbnail?id=${(food[30] as string).match(/[-\w]{25,}/)}&sz=w300"), url("https://placehold.co/100")`,
          }}
          className="food-picture"
        />
        <h1 className="calories">
          卡路里 : {parseFloat(food[9].toString()).toFixed(1)}千克 <span>/100克</span>
        </h1>
        <div className="three-highs-container">
          <div
            style={{
              background:
                parseFloat(food[11].toString()) > 20
                  ? "var(--errorColor)"
                  : parseFloat(food[11].toString()) > 3
                    ? "var(--alternativeSecondaryColor)"
                    : "var(--primaryColor)",
            }}
            className="fat-container nutrition-container"
          >
            <img src="/pictures/fat.png" alt="Fat" />
            <div>
              <p className="header">總脂肪</p>
              <p className="measurement">
                {parseFloat(food[11].toString()).toFixed(1)}克 <span>/100克</span>
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                parseFloat(food[16].toString()) > 600
                  ? "var(--errorColor)"
                  : parseFloat(food[16].toString()) > 120
                    ? "var(--alternativeSecondaryColor)"
                    : "var(--primaryColor)",
            }}
            className="salt-container nutrition-container"
          >
            <img src="/pictures/salt.png" alt="Salt" />
            <div>
              <p className="header">鈉 (鹽)</p>
              <p className="measurement">
                {parseFloat(food[16].toString()).toFixed(1)}毫克 <span>/100克</span>
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                parseFloat(food[15].toString()) > 15
                  ? "var(--errorColor)"
                  : parseFloat(food[15].toString()) > 5
                    ? "var(--alternativeSecondaryColor)"
                    : "var(--primaryColor)",
            }}
            className="sugar-container nutrition-container"
          >
            <img src="/pictures/sugar.png" alt="Sugar" />
            <div>
              <p className="header">添加糖</p>
              <p className="measurement">
                {parseFloat(food[15].toString()).toFixed(1)}克 <span>/100克</span>
              </p>
            </div>
          </div>
        </div>
        <div className="legend-container">
          <Legend />
        </div>
      </section>

      <style jsx>{`
        section {
          margin: 0 auto;
          width: 100%;
          position: relative;
        }

        .food-name {
          margin-top: 50px;
          text-align: center;
          color: var(--secondaryTextColor);
        }

        .food-picture {
          width: 20%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          overflow: hidden;
          margin: 30px auto;
          display: block;
          border-radius: 40px;
          background-size: cover;
        }

        .calories {
          margin: 30px 0;
          text-align: center;
          font-size: 1.3rem;
        }

        .calories span {
          font-size: 0.8rem;
        }

        .three-highs-container {
          width: 60%;
          margin: 0 auto 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 30px;
        }

        .nutrition-container {
          aspect-ratio: 1;
          padding-bottom: 20px;
          border-radius: 50%;
          background: green;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

        .nutrition-container img {
          width: 60%;
          display: block;
          margin: 0 auto;
        }

        .nutrition-container p {
          color: #fff;
          font-size: 1.7rem;
          font-weight: bold;
          text-align: center;
        }

        .nutrition-container p span {
          font-size: 0.8rem;
        }

        .legend-container {
          margin: 20px auto;
          width: 60%;
        }

        @media only screen and (max-width: 1400px) {
          .three-highs-container {
            width: 70%;
            column-gap: 25px;
          }
        }

        @media only screen and (max-width: 1000px) {
          .three-highs-container {
            width: 80%;
            column-gap: 20px;
          }

          .nutrition-container p {
            font-size: 1.2rem;
          }

          .food-picture {
            width: 40%;
          }
        }

        @media only screen and (max-width: 800px) {
          .three-highs-container {
            width: 90%;
            column-gap: 10px;
          }

          .legend-container {
            width: 80%;
          }
        }

        @media only screen and (max-width: 650px) {
          .three-highs-container {
            width: 95%;
            row-gap: 20px;
          }

          .legend-container {
            width: 90%;
          }

          .food-picture {
            width: 50%;
          }

          .header {
            font-size: 0.85rem !important;
          }

          .measurement {
            font-size: 0.65rem !important;
          }

          .measurement span {
            font-size: 0.45rem !important;
          }

          .nutrition-container img {
            width: 55%;
          }
        }
      `}</style>
    </>
  );
};

export default ThreeHighs;
