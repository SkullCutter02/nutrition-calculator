import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import readXlsxFile, { Row } from "read-excel-file";
import FoodCategory from "./FoodCategory";

interface Props {
  setResults: React.Dispatch<React.SetStateAction<Row[]>>;
}

const SearchArea: React.FC<Props> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");
  const [category, setCategory] = useState<string | null>(null);

  const [dInput] = useDebounce(input, 500);

  useEffect(() => {
    fetch("/food-data.xlsx")
      .then((res) => res.blob())
      .then((blob) => readXlsxFile(blob))
      .then((rows) => {
        setResults([]);

        // start from 4 as the excel sheet has 3 rows of introductory information at the top
        for (let i = 4; i < rows.length; i++) {
          // rows[i][5] collects the Chinese name of each food
          if (rows[i][5] && rows[i][5].toString().includes(dInput.trim())) {
            setResults((prev) => [...prev, rows[i]]);
          }
        }
      });
  }, [dInput]);

  useEffect(() => {}, [category]);

  return (
    <>
      <div className="search-area">
        <h1>
          搜尋食物 <br /> 的營養資料
        </h1>
        <input
          type="text"
          placeholder="e.g   叉燒包 / 揚州炒飯"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FoodCategory categoryName={"Dine Out Dishes"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"HK Delicacies"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"Beverages"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"Breakfast Foods"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"Snacks"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"HK Bakery"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"HK Desserts"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"Condiments"} setCategory={setCategory} currentCategory={category} />
        <FoodCategory categoryName={"Fruits"} setCategory={setCategory} currentCategory={category} />
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
          color: var(--secondaryTextColor);
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

        @media only screen and (max-width: 800px) {
          .search-area {
            width: 100%;
          }

          input {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
};

export default SearchArea;
