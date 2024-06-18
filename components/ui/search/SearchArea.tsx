import React from "react";

const SearchArea: React.FC = () => {
  return (
    <>
      <div className="search-area">
        <h1>
          搜尋食物 <br /> 的營養資料
        </h1>
        <input type="text" placeholder="e.g   叉燒包 / 揚州炒飯" />
      </div>

      <style jsx>{`
        .search-area {
          background: #e7e7e7;
          padding: 40px 0;
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          color: #525252;
          text-align: center;
          margin-bottom: 20px;
        }

        input {
          background: white;
          padding: 17px 10px;
          font-weight: bold;
          width: 60%;
          box-shadow: 0 0 0 1px var(--primaryColor);
          border-radius: 10px;
          border: none;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default SearchArea;
