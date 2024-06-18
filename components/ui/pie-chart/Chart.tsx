import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart: React.FC = () => {
  return (
    <>
      <section>
        <h1>三文魚壽司</h1>
        <PieChart
          data={[
            { title: "蛋白質", value: 38.9, color: "var(--primaryColor)" },
            { title: "碳水化合物", value: 49.4, color: "var(--secondaryColor)" },
            { title: "脂肪", value: 11.7, color: "#0000FF" },
          ]}
          lineWidth={35}
          viewBoxSize={[400, 150]}
          center={[200, 70]}
          labelStyle={(dataIndex) => ({
            fontSize: "0.4rem",
            fill:
              dataIndex === 0 ? "var(--primaryColor)" : dataIndex === 1 ? "var(--secondaryColor)" : "#0000FF",
            whiteSpace: "pre-line",
            fontWeight: "500",
          })}
          labelPosition={120}
          label={({ dataEntry }) => `${dataEntry.title} : 
          ${dataEntry.value}%`}
        />
        <p className="calorie">
          卡路里 : <br /> 82.0kcal
          <br />
          <sup>/100克</sup>
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
          line-height: 2rem;
        }

        .calorie sup {
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default Chart;
