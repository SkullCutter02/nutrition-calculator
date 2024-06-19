import React from "react";

const Legend: React.FC = () => {
  return (
    <>
      <p className="explanation">
        <span>* 總脂肪、糖和鈉</span>的紅綠燈標記註解 :
      </p>
      <div className="legend-container">
        <div>
          <div className="red" />
          <p>紅色 - 攝取量超標</p>
        </div>
        <div>
          <div className="yellow" />
          <p>黃色 - 攝取量輕微過高</p>
        </div>
        <div>
          <div className="green" />
          <p>綠色 - 攝取量適中</p>
        </div>
      </div>

      <style jsx>{`
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
          background: var(--secondaryColor);
        }

        .green {
          background: var(--primaryColor);
        }
      `}</style>
    </>
  );
};

export default Legend;
