import React, { useState } from "react";

const ReferenceTables: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "每天攝取量建議",
      sublabel: "（以每天消耗2000千卡計算）",
      subTabs: [
        { id: "sub5", label: "總脂肪", value: "少於60克" },
        { id: "sub6", label: "鈉（鹽）", value: "少於2000毫克" },
        { id: "sub7", label: "糖", value: "少於50克" },
      ],
    },
    {
      id: "tab2",
      label: "攝取量適中",
      sublabel: "（按每100克計算）",
      activeColor: "var(--primaryColor)",
      inactiveColor: "#A5BB8C",
      subTabs: [
        { id: "sub5", label: "總脂肪", value: "少於3克" },
        { id: "sub6", label: "鈉（鹽）", value: "少於或等於120克" },
        { id: "sub7", label: "糖", value: "少於或等於5克" },
      ],
    },
    {
      id: "tab3",
      label: "攝取量輕微高中",
      sublabel: "（按每100克計算）",
      activeColor: "var(--secondaryColor)",
      inactiveColor: "#D4AF7B",
      subTabs: [
        { id: "sub5", label: "總脂肪", value: "3至20克" },
        { id: "sub6", label: "鈉（鹽）", value: "120.1至600毫克" },
        { id: "sub7", label: "糖", value: "5.1至15克" },
      ],
    },
    {
      id: "tab4",
      label: "攝取量超標",
      sublabel: "（按每100克計算）",
      activeColor: "var(--errorColor)",
      inactiveColor: "#D87172",
      subTabs: [
        { id: "sub5", label: "總脂肪", value: "大於20克" },
        { id: "sub6", label: "鈉（鹽）", value: "大於600克" },
        { id: "sub7", label: "糖", value: "大於15克" },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="table-header">
            <h1>營養素攝取量參考表</h1>
          </div>
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                style={{
                  backgroundColor: activeTab === tab.id ? "#fff" : "#D7D7D7",
                  color: activeTab === tab.id ? "#000" : "#8E8E8E",
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                <div
                  className="color-indicator"
                  style={{
                    backgroundColor:
                      activeTab === tab.id ? tab?.activeColor || "none" : tab?.inactiveColor || "none",
                    display: tab?.activeColor ? "block" : "none",
                  }}
                ></div>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <div className="sub-tab" style={{ border: "none" }}>
              <p style={{ margin: "0 auto" }}>{tabs.find((tab) => tab.id === activeTab)?.sublabel}</p>
            </div>
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.subTabs.map((subTab) => (
                <div key={subTab.id} className="sub-tab">
                  <span>{subTab.label}</span>
                  {subTab.value && (
                    <span
                      className="value"
                      style={{
                        color: tabs.find((tab) => tab.id === activeTab)?.activeColor || "var(--errorColor)",
                      }}
                    >
                      {subTab.value}
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100%;
          background: var(--secondaryColor);
          padding: 30px 0;
        }

        .container {
          width: 50%;
          margin: 0 auto;
        }

        .table-header {
          background: var(--primaryColor);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          padding: 20px 0;
        }

        .table-header h1 {
          text-align: center;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: 1.2px;
        }

        .tab-buttons {
          display: flex;
          justify-content: space-around;
        }

        .tab-buttons button {
          flex: 1;
          padding: 10px;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bold;
          transition: background-color 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tab-buttons button:hover {
          opacity: 0.9;
        }

        .tab-content {
          padding: 20px;
          background: white;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .sub-tab {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-weight: bold;
          border-top: 1px solid var(--secondaryColor);
        }

        .color-indicator {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          transition: background-color 0.3s;
          margin-right: 10px;
          transform: translateY(2px);
        }

        @media only screen and (max-width: 1100px) {
          .container {
            width: 60%;
          }
        }

        @media only screen and (max-width: 800px) {
          .container {
            width: 95%;
          }
        }

        @media only screen and (max-width: 600px) {
          .tab-buttons button {
            font-size: 0.65rem;
          }

          .color-indicator {
            transform: translateY(0);
            margin-right: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default ReferenceTables;
