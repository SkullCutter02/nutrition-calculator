import React from "react";
import SearchResult from "./SearchResult";

const ResultsArea: React.FC = () => {
  return (
    <>
      <div className="results-area">
        <div className="arrow-left" />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <div className="arrow-right" />
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
      `}</style>
    </>
  );
};

export default ResultsArea;
