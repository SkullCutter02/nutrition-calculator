import React from "react";

const ReferenceTables: React.FC = () => {
  return (
    <>
      <div className="table-container">
        <img className="table-1" src="/pictures/table-1.png" alt="" />
        <img className="table-2" src="/pictures/table-2.png" alt="" />
      </div>

      <style jsx>{`
        .table-container {
          width: 100%;
          display: flex;
          margin-top: 30px;
        }

        .table-1 {
          width: 70%;
        }

        .table-2 {
          width: 30%;
        }

        @media only screen and (max-width: 600px) {
          .table-container {
            flex-direction: column;
            align-items: center;
          }

          .table-1 {
            width: 100%;
          }

          .table-2 {
            width: 40%;
          }
        }
      `}</style>
    </>
  );
};

export default ReferenceTables;
