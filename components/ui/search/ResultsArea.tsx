import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { Row } from "read-excel-file";

interface Props {
  results: Row[];
}

const ResultsArea: React.FC<Props> = ({ results }) => {
  const [page, setPage] = useState<number>(0);

  // whenever the user inputs something, set the page count back to 0
  useEffect(() => {
    setPage(0);
  }, [results]);

  return (
    <>
      <div className="results-area">
        {page > 0 && <div className="arrow-left" onClick={() => setPage((prev) => prev - 1)} />}
        <SearchResult result={results[9 * page]} />
        <SearchResult result={results[9 * page + 1]} />
        <SearchResult result={results[9 * page + 2]} />
        <SearchResult result={results[9 * page + 3]} />
        <SearchResult result={results[9 * page + 4]} />
        <SearchResult result={results[9 * page + 5]} />
        <SearchResult result={results[9 * page + 6]} />
        <SearchResult result={results[9 * page + 7]} />
        <SearchResult result={results[9 * page + 8]} />
        {(page + 1) * 9 < results.length && (
          <div className="arrow-right" onClick={() => setPage((prev) => prev + 1)} />
        )}
      </div>

      <style jsx>{`
        .results-area {
          position: relative;
          background: var(--secondaryColor);
          width: 60%;
          border-top-left-radius: 170px;
          padding: 100px 150px 40px calc(170px - 60px);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 30px;
          row-gap: 20px;
        }

        .results-area::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #e7e7e7;
          height: 170px;
          width: 170px;
          z-index: -1;
        }

        .arrow-left {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 15px solid #ffe596;
          left: 50px;
          top: 50%;
          cursor: pointer;
        }

        .arrow-right {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 15px solid #ffe596;
          top: 50%;
          right: 85px;
          cursor: pointer;
        }

        @media only screen and (max-width: 1050px) {
          .results-area {
            padding: 100px 70px 40px calc(140px - 60px);
          }

          .arrow-left {
            left: 35px;
          }

          .arrow-right {
            right: 30px;
          }
        }

        @media only screen and (max-width: 1200px) {
          .results-area {
            width: 100%;
            border-radius: initial;
            padding: 40px 60px 40px 60px;
          }

          .results-area::before {
            display: none;
          }

          .arrow-left {
            left: 30px;
          }

          .arrow-right {
            right: 30px;
          }
        }

        @media only screen and (max-width: 550px) {
          .results-area {
            column-gap: 10px;
            row-gap: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default ResultsArea;
