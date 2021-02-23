import React from "react";

export const CardListItem = ({ row }) => {
  return (
    <div>
      <div className="cc-info">
        <div className="type">{row.type}</div>
        <div className="ccNum">{row.ccNum}</div>

        <div className="exp">
          Exp: {row.month}/ {row.year}
        </div>
        {/* <div className="ccv">{row.ccv}</div> */}
        <div className="name">{row.name}</div>
      </div>
    </div>
  );
};
