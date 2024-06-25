import React from "react";

import { useFoodContext } from "../../../context/FoodContext";

const ThreeHighs: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <section id="three-highs">
        <h1 className="food-name">{food[5].toString()}</h1>
        <h1 className="calories">
          卡路里 : {parseFloat(food[9].toString()).toFixed(1)}kcal <span>/100克</span>
        </h1>
        <div className="three-highs-container">
          <div className="fat-container nutrition-container">
            <img src="/pictures/fat.png" alt="Fat" />
            <div>
              <p>總脂肪</p>
              <p>
                {parseFloat(food[11].toString()).toFixed(1)}g <span>/100g</span>
              </p>
            </div>
          </div>
          <div className="salt-container nutrition-container">
            <img src="/pictures/salt.png" alt="Salt" />
            <div>
              <p>鈉</p>
              <p>
                {parseFloat(food[16].toString()).toFixed(1)}g <span>/100g</span>
              </p>
            </div>
          </div>
          <div className="sugar-container nutrition-container">
            <img src="/pictures/sugar.png" alt="Sugar" />
            <div>
              <p>糖</p>
              <p>
                {parseFloat(food[15].toString()).toFixed(1)}g <span>/100g</span>
              </p>
            </div>
          </div>
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
          justify-content: space-between;
        }

        .nutrition-container img {
          width: 70%;
          display: block;
          margin: 0 auto;
        }

        .nutrition-container p {
          color: #fff;
          font-size: 1.35rem;
          font-weight: bold;
          text-align: center;
        }

        .nutrition-container p span {
          font-size: 0.8rem;
        }

        @media only screen and (max-width: 1400px) {
          .three-highs-container {
            width: 70%;
            column-gap: 25px;
          }

          .nutrtion-calculator {
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
        }

        @media only screen and (max-width: 800px) {
          .three-highs-container {
            width: 90%;
            column-gap: 10px;
          }
        }

        @media only screen and (max-width: 600px) {
          .three-highs-container {
            width: 50%;
            row-gap: 30px;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default ThreeHighs;
