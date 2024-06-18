import React from "react";
import SearchArea from "./SearchArea";
import ResultsArea from "./ResultsArea";

const Search: React.FC = () => {
  return (
    <>
      <section>
        <SearchArea />
        <ResultsArea />
      </section>

      <style jsx>{`
        section {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Search;
