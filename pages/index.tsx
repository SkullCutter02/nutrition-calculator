import React, { useState } from "react";
import { Row } from "read-excel-file";

import Header from "../components/ui/header/Header";
import Search from "../components/ui/search/Search";
import { FoodContext } from "../context/FoodContext";

const HomePage: React.FC = () => {
  const [food, setFood] = useState<Row | null>(null);

  return (
    <>
      <Header />
      <FoodContext.Provider value={{ food, setFood }}>
        <Search />
      </FoodContext.Provider>
    </>
  );
};

export default HomePage;
