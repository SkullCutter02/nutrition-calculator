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
            background: currentCategory && currentCategory === categoryName ? "var(--primaryColor)" : "#fff",
            color: currentCategory && currentCategory === categoryName ? "#fff" : "var(--primaryColor)",
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
          margin: 0 auto;
          //margin-top: 20px;
        }

        .food-category {
          width: 100%;
          cursor: pointer;
          border: none;
          padding-top: 13px; // counter weird css offset
          padding-bottom: 10px;
          font-size: 1rem;
          background: #fff;
          border-radius: 50px;
          font-weight: bold;
          color: var(--primaryColor);
        }

        span {
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 90%;
          transform: translate(-50%, -50%);
          z-index: 100;
          padding: 10px;
        }

        @media only screen and (max-width: 1200px) {
          .food-category-container {
            width: 90%;
          }

          .food-category {
            font-size: 0.9rem;
          }
        }

        @media only screen and (max-width: 700px) {
          .food-category {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default FoodCategory;
