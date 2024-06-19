import React from "react";

const TipBox: React.FC = () => {
  return (
    <>
      <div className="tip-box">
        <h1>飲食貼士</h1>
        <p>牛肉含豐富鐵質及蛋白質, 建議選擇鮮牛肉, 脂肪含量較低。例如:雪菜肉絲湯米粉。</p>
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
      `}</style>
    </>
  );
};

export default TipBox;
