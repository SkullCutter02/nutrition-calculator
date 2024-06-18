import React from "react";

const SearchResult: React.FC = () => {
  return (
    <>
      <div className="food-item">
        <p className="food-item-name">三文魚</p>
      </div>

      <style jsx>{`
        .food-item {
          width: 100%;
          height: 100%;
          background: red;
          aspect-ratio: 1;
          border-radius: 40px;
          border: 4px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .food-item-name {
          color: white;
          font-weight: bold;
          font-size: 1.4rem;
        }
      `}</style>
    </>
  );
};

export default SearchResult;
