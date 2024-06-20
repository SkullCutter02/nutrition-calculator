import React from "react";
import { Row } from "read-excel-file";
import { useFoodContext } from "../../../context/FoodContext";

interface Props {
  result: Row;
}

const SearchResult: React.FC<Props> = ({ result }) => {
  const { food, setFood } = useFoodContext();

  return (
    <>
      <div
        className="food-item"
        onClick={() => {
          if (result) setFood(result);
        }}
      >
        {result && <p className="food-item-name">{result[5].toString()}</p>}
      </div>

      <style jsx>{`
        .food-item {
          width: 100%;
          height: 100%;
          background: ${result
            ? food && food[5].toString() === result[5].toString()
              ? "blue"
              : "red"
            : "#8f8f8f"};
          aspect-ratio: 1;
          border-radius: 40px;
          border: 4px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: ${result ? "pointer" : "initial"};
        }

        .food-item-name {
          color: white;
          font-weight: bold;
          font-size: 1.4rem;
          text-align: center;
        }

        @media only screen and (max-width: 550px) {
          .food-item {
            border-radius: 20px;
          }

          .food-item-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default SearchResult;
