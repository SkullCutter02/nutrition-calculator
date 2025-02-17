import React from "react";
import { Row } from "read-excel-file";
import { useFoodContext } from "../../../context/FoodContext";

interface Props {
  result: Row;
}

const SearchResult: React.FC<Props> = ({ result }) => {
  const { setFood } = useFoodContext();

  return (
    <>
      {result && (
        <div
          className="food-item"
          style={{
            backgroundImage: `url("https://drive.google.com/thumbnail?id=${result && result[30]}&sz=w300"), url("https://drive.google.com/thumbnail?id=${result && (result[30] as string).match(/[-\w]{25,}/)}&sz=w300"), url("https://placehold.co/100")`,
          }}
          onClick={() => {
            if (result) setFood(result);
          }}
        >
          {result && <p className="food-item-name">{result[5].toString()}</p>}
        </div>
      )}

      <style jsx>{`
        .food-item {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 40px;
          border: 4px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: ${result ? "pointer" : "initial"};
          background-size: cover;
          position: relative;
          overflow: hidden;
        }

        .food-item::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background: black;
          opacity: 20%;
        }

        .food-item-name {
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          text-align: center;
          z-index: 2;
        }

        @media only screen and (max-width: 550px) {
          .food-item {
            border-radius: 20px;
          }

          .food-item-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default SearchResult;
