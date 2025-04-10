import React from "react";

const ReferenceTables: React.FC = () => {
  return (
    <>
      <div className="table-container">
        <img className="table" src="/pictures/table.jpeg" alt="" />
      </div>

      <style jsx>{`
        .table-container {
          width: 100%;
          display: flex;
          margin-top: 30px;
          flex-direction: column;
          align-items: center;
        }

        .table {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ReferenceTables;
