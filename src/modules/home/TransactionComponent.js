import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-weight: bold;
  gap: 10px;
  padding: 10px 20px;
  font-size: 18px;
  & input {
    padding: 12px 10px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    border-radius: 12px;
    outline: none;
    width: 100%;
  }
`;
const Cell = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid #e6e8e9;
  border-radius: 4px;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
  font-weight: normal;
  font-size: 14px;
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "Expense"}>
      <span>{props.payload?.desc}</span>
      <span>{props.payload?.amount}</span>
    </Cell>
  );
};

// Main Component
const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transaction);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload) => 
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };
  useEffect(() => filterData(searchText), [props.transaction]);
  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  );
};

export default TransactionComponent;
