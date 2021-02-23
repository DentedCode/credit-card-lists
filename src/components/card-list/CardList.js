import React from "react";
import { CardListItem } from "../card-list-item/CardListItem";
import "./cardList.style.css";

export const CardList = ({ ccList }) => {
  return (
    <>
      <h2>Payment Methods</h2>
      <hr />
      <div className="card-lists">
        {ccList.length && ccList.map((row) => <CardListItem row={row} />)}
      </div>
    </>
  );
};
