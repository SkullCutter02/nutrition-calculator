import React from "react";
import { useFoodContext } from "../../../context/FoodContext";

const Information: React.FC = () => {
  const { food } = useFoodContext();

  return (
    <>
      <section>
        <div className="table-container">
          <div className="table-header">
            <p>營養資料</p>
          </div>
          <div className="table-body-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>每100克</th>
                  <th>
                    每食用份量
                    <br />{" "}
                    <span>
                      ({food[18].toString()} = {food[19].toString()}克)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="topic">能量</td>
                  <td>{parseFloat(food[9].toString()).toFixed(1)}千卡</td>
                  <td>{parseFloat(food[21].toString()).toFixed(1)}千卡</td>
                </tr>
                <tr>
                  <td className="topic">蛋白質</td>
                  <td>{parseFloat(food[10].toString()).toFixed(1)}克</td>
                  <td>{parseFloat(food[22].toString()).toFixed(1)}克</td>
                </tr>
                <tr>
                  <td className="topic">總脂肪</td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[11].toString()) > 20
                            ? "var(--errorColor)"
                            : parseFloat(food[11].toString()) > 3
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[11].toString()).toFixed(1)}克
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[11].toString()) > 20
                            ? "var(--errorColor)"
                            : parseFloat(food[11].toString()) > 3
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[23].toString()).toFixed(1)}克
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="topic">- 飽和脂肪</td>
                  <td>{parseFloat(food[12].toString()).toFixed(1)}克</td>
                  <td>{parseFloat(food[24].toString()).toFixed(1)}克</td>
                </tr>
                <tr>
                  <td className="topic">- 反式脂肪</td>
                  <td>{parseFloat(food[13].toString()).toFixed(1)}克</td>
                  <td>{parseFloat(food[25].toString()).toFixed(1)}克</td>
                </tr>
                <tr>
                  <td className="topic">碳水化合物</td>
                  <td>{parseFloat(food[14].toString()).toFixed(1)}克</td>
                  <td>{parseFloat(food[26].toString()).toFixed(1)}克</td>
                </tr>
                <tr>
                  <td className="topic">糖</td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[15].toString()) > 15
                            ? "var(--errorColor)"
                            : parseFloat(food[15].toString()) > 5
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[15].toString()).toFixed(1)}克
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[15].toString()) > 15
                            ? "var(--errorColor)"
                            : parseFloat(food[15].toString()) > 5
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[27].toString()).toFixed(1)}克
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="topic">鈉</td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[16].toString()) > 600
                            ? "var(--errorColor)"
                            : parseFloat(food[16].toString()) > 120
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[16].toString()).toFixed(1)}毫克
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        background:
                          parseFloat(food[16].toString()) > 600
                            ? "var(--errorColor)"
                            : parseFloat(food[16].toString()) > 120
                              ? "var(--alternativeSecondaryColor)"
                              : "var(--primaryColor)",
                      }}
                    >
                      {parseFloat(food[28].toString()).toFixed(1)}毫克
                    </p>
                  </td>
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
          padding: 30px 0;
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

        table td p {
          display: inline-block;
          padding: 0 5px;
        }

        table th {
          font-size: 1.1rem;
          font-weight: bold;
          text-align: right;
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
          table td.topic {
            padding-left: 0;
          }

          .table-body-container {
            padding: 15px;
          }

          table td {
            font-size: 0.9rem !important;
          }

          table th {
            font-size: 0.9rem !important;
          }

          table tr th span {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Information;
