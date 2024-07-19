import React from "react";
import { useFoodContext } from "../../../context/FoodContext";

const Information: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <section>
        <div className="table-container">
          <div className="table-header">
            <p>營養資料 Nutrition Information</p>
          </div>
          <div className="table-body-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>每100克 / Per100g</th>
                  <th>
                    每食用份量 / Per Serving <br /> ({food[18].toString()} = 500g)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="topic">能量 / Energy</td>
                  <td>{parseFloat(food[9].toString()).toFixed(1)}千卡/kcal</td>
                  <td>{parseFloat(food[21].toString()).toFixed(1)}千卡/kcal</td>
                </tr>
                <tr>
                  <td className="topic">蛋白質 / Protein</td>
                  <td>{parseFloat(food[10].toString()).toFixed(1)}克/g</td>
                  <td>{parseFloat(food[22].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">總脂肪 / Total fat</td>
                  <td
                    style={{
                      background:
                        parseFloat(food[11].toString()) > 20
                          ? "var(--errorColor)"
                          : parseFloat(food[11].toString()) > 3
                            ? "var(--secondaryColor)"
                            : "var(--primaryColor)",
                    }}
                  >
                    {parseFloat(food[11].toString()).toFixed(1)}克/g
                  </td>
                  <td>{parseFloat(food[23].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">- 飽和脂肪 / Saturated fat</td>
                  <td>{parseFloat(food[12].toString()).toFixed(1)}克/g</td>
                  <td>{parseFloat(food[24].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">- 反式脂肪 / Trans fat</td>
                  <td>{parseFloat(food[13].toString()).toFixed(1)}克/g</td>
                  <td>{parseFloat(food[25].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">碳水化合物 / Carbohydrates</td>
                  <td>{parseFloat(food[14].toString()).toFixed(1)}克/g</td>
                  <td>{parseFloat(food[26].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">糖 / Sugars</td>
                  <td
                    style={{
                      background:
                        parseFloat(food[15].toString()) > 15
                          ? "var(--errorColor)"
                          : parseFloat(food[15].toString()) > 5
                            ? "var(--secondaryColor)"
                            : "var(--primaryColor)",
                    }}
                  >
                    {parseFloat(food[15].toString()).toFixed(1)}克/g
                  </td>
                  <td>{parseFloat(food[27].toString()).toFixed(1)}克/g</td>
                </tr>
                <tr>
                  <td className="topic">鈉 / Sodium</td>
                  <td
                    style={{
                      background:
                        parseFloat(food[16].toString()) > 600
                          ? "var(--errorColor)"
                          : parseFloat(food[16].toString()) > 120
                            ? "var(--secondaryColor)"
                            : "var(--primaryColor)",
                    }}
                  >
                    {parseFloat(food[16].toString()).toFixed(1)}克/g
                  </td>
                  <td>{parseFloat(food[28].toString()).toFixed(1)}克/g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100%;
          background: var(--secondaryColor);
          padding: 10px 0;
        }

        .table-container {
          width: 80%;
          margin: 0 auto;
        }

        .table-body-container {
          width: 100%;
          padding: 25px 60px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          background: white;
        }

        table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
        }

        .table-header {
          background: var(--primaryColor);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          padding: 20px 0;
        }

        .table-header p {
          text-align: center;
          font-weight: 600;
          color: #fff;
          font-size: 1.1rem;
          letter-spacing: 1.2px;
        }

        table tr:not(:last-child) {
          border-bottom: 1px solid var(--secondaryColor);
        }

        table thead tr {
          border-bottom: 2px solid var(--secondaryColor);
        }

        table td:not(.topic) {
          text-align: right;
          padding-right: 30px;
        }

        table td.topic {
          padding-left: 60px;
        }

        table td,
        table th {
          padding-top: 5px;
          padding-bottom: 5px;
          background: white;
        }

        table th {
          font-size: 1.1rem;
          font-weight: bold;
          text-align: right;
          padding-right: 10px;
        }

        table td.topic {
          font-weight: bold;
        }

        @media only screen and (max-width: 800px) {
          .table-container {
            width: 95%;
          }

          .table-body-container {
            padding: 25px 30px;
          }

          table td.topic {
            padding-left: 30px;
          }
        }

        @media only screen and (max-width: 600px) {
          .table-body-container {
            overflow: scroll;
          }

          table {
            width: 600px;
          }
        }
      `}</style>
    </>
  );
};

export default Information;
