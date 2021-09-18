import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
const Container = styled.div`
  width: 386px;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

const HomeComponent = (props) => {
  const [transaction, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.map((payload) => {
      payload?.type === "Expense"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateIncome(inc);
    updateExpense(exp);
  };
  const addTransaction = (payload) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
    console.log(transaction);
  };
  useEffect(() => calculateBalance(), [transaction]);
  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transaction={transaction} />
    </Container>
  );
};

export default HomeComponent;
