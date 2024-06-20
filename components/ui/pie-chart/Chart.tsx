import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useWindowWidth } from "@react-hook/window-size";

import { useFoodContext } from "../../../context/FoodContext";

const Chart: React.FC = () => {
  const { food } = useFoodContext();
  const windowWidth = useWindowWidth();

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
          viewBoxSize={[windowWidth > 850 ? 400 : 200, 150]}
          center={[windowWidth > 850 ? 200 : 100, 70]}
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

        @media only screen and (max-width: 600px) {
          .calorie {
            font-size: 1rem;
            line-height: 1.4rem;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  );
};

export default Chart;
