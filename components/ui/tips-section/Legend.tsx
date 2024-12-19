import React from "react";

const Legend: React.FC = () => {
  return (
    <>
      <p className="explanation">
        <span>* 總脂肪、糖和鈉</span>的紅綠燈標記註解 :
      </p>
      <div className="legend-container">
        <div className="legend-mini-container">
          <div className="red" />
          <p>紅色 - 攝取量超標</p>
        </div>
        <div className="legend-mini-container">
          <div className="yellow" />
          <p>黃色 - 攝取量輕微過高</p>
        </div>
        <div className="legend-mini-container">
          <div className="green" />
          <p>綠色 - 攝取量適中</p>
        </div>
      </div>

      <style jsx>{`
        p {
          font-weight: bold;
        }

        .explanation {
          align-self: flex-start;
          margin-bottom: 7px;
        }

        .explanation > span {
          color: var(--importantTextColor);
        }

        .legend-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .legend-container > div {
          display: flex;
          align-items: center;
        }

        .red,
        .yellow,
        .green {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          margin-right: 14px;
        }

        .red {
          background: red;
        }

        .yellow {
          background: var(--alternativeSecondaryColor);
        }

        .green {
          background: var(--primaryColor);
        }

        @media only screen and (max-width: 800px) {
          p {
            font-size: 0.8rem;
          }
        }

        @media only screen and (max-width: 700px) {
          .red,
          .yellow,
          .green {
            height: 20px;
            width: 20px;
          }
        }

        @media only screen and (max-width: 650px) {
          p {
            font-size: 0.7rem;
          }
        }

        @media only screen and (max-width: 430px) {
          .legend-container {
            flex-direction: column;
          }

          .legend-mini-container {
            margin-bottom: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Legend;
