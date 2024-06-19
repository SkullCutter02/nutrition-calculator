import React from "react";

const Information: React.FC = () => {
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
                    每食用份量 / Per Serving <br /> (一碟 = 500g)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="topic">能量 / Energy</td>
                  <td>120千卡/kcal</td>
                  <td>600千卡/kcal</td>
                </tr>
                <tr>
                  <td className="topic">蛋白質 / Protein</td>
                  <td>6克/g</td>
                  <td>29克/g</td>
                </tr>
                <tr>
                  <td className="topic">總脂肪 / Total fat</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
                </tr>
                <tr>
                  <td className="topic">- 飽和脂肪 / Saturated fat</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
                </tr>
                <tr>
                  <td className="topic">- 反式脂肪 / Trans fat</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
                </tr>
                <tr>
                  <td className="topic">碳水化合物 / Carbohydrates</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
                </tr>
                <tr>
                  <td className="topic">糖 / Sugars</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
                </tr>
                <tr>
                  <td className="topic">鈉 / Sodium</td>
                  <td>16.9克/g</td>
                  <td>27.5克/g</td>
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
          background: #fff;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
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

        tr:not(:last-child) {
          border-bottom: 1px solid var(--secondaryColor);
        }

        table thead tr {
          border-width: 2px;
        }

        table td:not(.topic) {
          text-align: center;
        }

        table td.topic {
          padding-left: 60px;
        }

        table td,
        table th {
          padding-top: 5px;
          padding-bottom: 5px;
        }

        table th {
          font-size: 1.1rem;
          font-weight: bold;
        }

        table td.topic {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Information;
