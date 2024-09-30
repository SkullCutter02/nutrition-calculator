import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <button className="yellow" onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
        搜尋其他食物的營養資料
      </button>
      <a href="https://www.stroke.med.hku.hk/diet-tips" target="_blank">
        <button className="green">更多預防中風及其他疾病的營養資貼士</button>
      </a>

      <style jsx>{`
        button {
          color: #fff;
          padding: 10px 30px;
          border-radius: 20px;
          border: none;
          margin-bottom: 15px;
          cursor: pointer;
          font-size: 1rem;
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
