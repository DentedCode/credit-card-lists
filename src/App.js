import React, { useState, useEffect } from "react";
import "./App.css";
import { CardListItem } from "./components/card-list-item/CardListItem";
import { CardList } from "./components/card-list/CardList";

const ccList = [
  {
    name: "Prem Acharya",
    ccNum: "1234 5678 9632 5412",
    exp: "10/22",
    type: "Visa",
    ccv: 235,
  },
  {
    name: "Prem Acharya",
    ccNum: "123 4567 6554 25412",
    exp: "10/22",
    type: "Visa",
    ccv: 255,
  },
  {
    name: "Prem Acharya",
    ccNum: "1234 5671 2562 5412",
    exp: "10/22",
    type: "Visa",
    ccv: 237,
  },
];

const newCCInfo = {
  name: "",
  ccNum: "",
  month: "",
  year: "",
  type: "",
  ccv: null,
};

const initialErro = {
  ccNum: "",
};

function App() {
  const [ccFrmData, setCcFrmData] = useState(newCCInfo);
  const [ccLists, setCclist] = useState(ccList);
  const [ccNumErr, setCcNumErr] = useState(initialErro);

  useEffect(() => {}, [ccFrmData, ccLists, ccNumErr]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCcFrmData({
      ...ccFrmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { ccNum } = ccFrmData;

    console.log(ccNum.length);

    if (ccNum.length !== 16) {
      console.log(ccNum);
      setCcNumErr({ ...ccNumErr, ccNum: "Credit card must be 16 digit" });
      return;
    }

    setCcNumErr({ ...ccNumErr, ccNum: "" });

    setCclist([...ccLists, ccFrmData]);
    setCcFrmData(newCCInfo);
  };

  const setMonths = Array(12)
    .fill("")
    .map((row, i) => <option value={i + 1}>{i + 1}</option>);
  const setYear = [2021, 2022, 2023, 2024, 2025].map((year) => (
    <option value={year}>{year}</option>
  ));

  return (
    <div className="App">
      <div className="container">
        <CardList ccList={ccLists} />

        <div className="add-new-card">
          <h2>Add new payment method</h2>
          <hr />
          <div className="add-new-cc-form">
            <div className="display-card">
              <CardListItem row={ccFrmData} />
            </div>

            <div className="new-cc-form">
              <form
                className="submit-form "
                action=""
                onSubmit={handleOnSubmit}
              >
                <div className="input-group">
                  <label>Card Type</label>
                  <select
                    className="type"
                    name="type"
                    required
                    onChange={handleOnChange}
                    defaultValue={ccFrmData.type}
                  >
                    <option value=""></option>
                    <option value="Visa">Visa</option>
                    <option value="Master">Master</option>
                    <option value="AMEX">AMEX</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Name </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={ccFrmData.name}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Card Num</label>
                  <input
                    type="text"
                    name="ccNum"
                    defaultValue={ccFrmData.ccNum}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                {ccNumErr.ccNum && (
                  <div className="error">{ccNumErr.ccNum}</div>
                )}
                <div className="input-group">
                  <label>Expiration</label>
                  {/* <input
                    type="text"
                    name="exp"
                    defaultValue={ccFrmData.exp}
                    onChange={handleOnChange}
                    required
                    placeholder="MM/YYYY"
                  /> */}
                  <div className="exp-date">
                    <select
                      name="month"
                      required
                      onChange={handleOnChange}
                      className="month"
                    >
                      <option value="">--month--</option>
                      {setMonths}
                    </select>
                    <select
                      name="year"
                      required
                      onChange={handleOnChange}
                      className="year"
                    >
                      <option value="">--Year--</option>
                      {setYear}
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label>CCV</label>
                  <input
                    type="text"
                    name="ccv"
                    maxLength="3"
                    minLength="3"
                    defaultValue={ccFrmData.ccv}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
