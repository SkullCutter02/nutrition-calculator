import React from "react";
import PrimaryTextInput from "../../widgets/TextInputControl";

const SearchArea: React.FC = () => {
  return (
    <>
      <div className="search-area">
        <h1>
          搜尋食物 <br /> 的營養資料
        </h1>
        <PrimaryTextInput
          placeholder={"e.g   叉燒包 / 揚州炒飯"}
          name={"search"}
          borderRadius="10px"
          borderColor="var(--primaryColor)"
          backgroundColor="white"
          padding="17px 10px"
          fontWeight="bold"
          width="60%"
        />
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
      `}</style>
    </>
  );
};

export default SearchArea;
