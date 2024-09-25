import React, { useState } from "react";
import { Row } from "read-excel-file";

import SearchArea from "./SearchArea";
import ResultsArea from "./ResultsArea";

const Search: React.FC = () => {
  const [results, setResults] = useState<Row[]>([]);

  return (
    <>
      <section>
        <SearchArea setResults={setResults} />
        <ResultsArea results={results} />
      </section>

      <style jsx>{`
        section {
          display: flex;
        }

        @media only screen and (max-width: 1200px) {
          section {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Search;
