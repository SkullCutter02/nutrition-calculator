import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <button className="yellow">搜尋其他食物的營養資料</button>
      <button className="green">更多預防中風及其他疾病的營養資貼士</button>

      <style jsx>{`
        button {
          color: #fff;
          padding: 5px 20px;
          border-radius: 20px;
          border: none;
          margin-bottom: 15px;
          cursor: pointer;
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

export default Footer;
