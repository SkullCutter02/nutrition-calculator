import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import { useFoodContext } from "../../../context/FoodContext";

const Chart: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <section id="chart">
        <h1>{food[5].toString()}</h1>
        <PieChart
          data={[
            { title: "碳水化合物", value: food[14] as number, color: "var(--secondaryColor)" },
            { title: "脂肪", value: food[11] as number, color: "#0000FF" },
            { title: "蛋白質", value: food[10] as number, color: "var(--primaryColor)" },
          ]}
          startAngle={270}
          lineWidth={35}
          viewBoxSize={[400, 150]}
          center={[200, 70]}
          labelStyle={(dataIndex) => ({
            fontSize: "0.4rem",
            fill:
              dataIndex === 2 ? "var(--primaryColor)" : dataIndex === 1 ? "#0000FF" : "var(--secondaryColor)",
            whiteSpace: "pre-line",
            fontWeight: "500",
          })}
          labelPosition={120}
          label={({ dataEntry }) => `${dataEntry.title} : 
          ${dataEntry.value}%`}
        />
        <p className="calorie">
          卡路里 : <br /> {food[9].toString()}kcal
          <br />
          <span>/100克</span>
        </p>
      </section>

      <style jsx>{`
        section {
          margin: 0 auto;
          width: 100%;
          position: relative;
        }

        h1 {
          margin-top: 50px;
          text-align: center;
          color: var(--secondaryTextColor);
        }

        .calorie {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 1.7rem;
        }

        .calorie span {
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default Chart;
