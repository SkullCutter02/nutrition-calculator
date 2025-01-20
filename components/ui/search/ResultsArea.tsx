import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { Row } from "read-excel-file";
import useWindowSize from "../../../hooks/useWindowSize";

interface Props {
  results: Row[];
}

const ResultsArea: React.FC<Props> = ({ results }) => {
  const [page, setPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { width: windowWidth } = useWindowSize();

  // whenever the user inputs something, set the page count back to 0
  useEffect(() => {
    setPage(0);
  }, [results]);

  useEffect(() => {
    if (windowWidth < 600) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  // swipe logic below

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && (page + 1) * (isMobile ? 6 : 9) < results.length) {
      setPage((prev) => prev + 1);
    }

    if (isRightSwipe && page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div
        className="results-area"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {page > 0 && <div className="arrow-left" onClick={() => setPage((prev) => prev - 1)} />}
        <SearchResult result={results[(isMobile ? 6 : 9) * page]} />
        <SearchResult result={results[(isMobile ? 6 : 9) * page + 1]} />
        <SearchResult result={results[(isMobile ? 6 : 9) * page + 2]} />
        <SearchResult result={results[(isMobile ? 6 : 9) * page + 3]} />
        <SearchResult result={results[(isMobile ? 6 : 9) * page + 4]} />
        <SearchResult result={results[(isMobile ? 6 : 9) * page + 5]} />
        {!isMobile && (
          <>
            <SearchResult result={results[9 * page + 6]} />
            <SearchResult result={results[9 * page + 7]} />
            <SearchResult result={results[9 * page + 8]} />
          </>
        )}
        {(page + 1) * (isMobile ? 6 : 9) < results.length && (
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
          grid-template-columns: repeat(${isMobile ? 2 : 3}, 1fr);
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
            padding: 20px 40px;
          }

          .results-area::before {
            display: none;
          }

          .arrow-left {
            left: 15px;
          }

          .arrow-right {
            right: 15px;
          }
        }

        @media only screen and (max-width: 550px) {
          .results-area {
            padding: 20px 32px;
          }

          .results-area {
            column-gap: 7px;
            row-gap: 7px;
          }

          .arrow-left {
            left: 10px;
          }

          .arrow-right {
            right: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default ResultsArea;
