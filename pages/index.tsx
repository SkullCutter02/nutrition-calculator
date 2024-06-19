import React, { useEffect, useState } from "react";
import { Row } from "read-excel-file";

import Header from "../components/ui/header/Header";
import Search from "../components/ui/search/Search";
import Chart from "../components/ui/pie-chart/Chart";
import Information from "../components/ui/nutritional-information/Information";
import TipsSection from "../components/ui/tips-section/TipsSection";
import { FoodContext } from "../context/FoodContext";

const HomePage: React.FC = () => {
  const [food, setFood] = useState<Row | null>(null);

  useEffect(() => {
    const chart = document.getElementById("chart");

    if (chart)
      window.scroll({
        top: chart.getBoundingClientRect().top + window.scrollY - 50, // 50 as h1 has margin-top of 50px
        behavior: "smooth",
      });
  }, [food]);

  return (
    <>
      <Header />
      <FoodContext.Provider value={{ food, setFood }}>
        <Search />
        {food && (
          <>
            <Chart />
            <Information />
            <TipsSection />
          </>
        )}
      </FoodContext.Provider>
    </>
  );
};

export default HomePage;
