import React from "react";
interface Props {
  categoryName: string;
  currentCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const FoodCategory: React.FC<Props> = ({ categoryName, setCategory, currentCategory }) => {
  return (
    <>
      <div
        className="food-category-container"
        style={{ display: currentCategory && currentCategory !== categoryName ? "none" : "block" }}
      >
        <button
          className="food-category"
          onClick={() => setCategory(categoryName)}
          style={{
            pointerEvents: currentCategory && currentCategory === categoryName ? "none" : "initial",
          }}
        >
          {categoryName}
        </button>
        <span
          style={{
            display: currentCategory && currentCategory === categoryName ? "block" : "none",
          }}
          onClick={() => setCategory(null)}
        >
          &times;
        </span>
      </div>

      <style jsx>{`
        .food-category-container {
          position: relative;
          width: 50%;
          margin-top: 20px;
        }

        .food-category {
          width: 100%;
          cursor: pointer;
          border: red;
          padding: 10px;
          font-size: 1rem;
          background: #fff;
        }

        span {
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          color: #000;
          position: absolute;
          top: 50%;
          left: 90%;
          transform: translate(-50%, -50%);
          z-index: 100;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default FoodCategory;
