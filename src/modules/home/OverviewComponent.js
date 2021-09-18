import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const BalanceBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;
const AddTransactionBtn = styled.button`
  background: black;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #e6e8e9;
  border-radius: 4px;
  & input {
    padding: 10px 10px;
    margin: 10px;
    border: 1px solid #e6e8e9;
    outline: none;
  }
  & button {
    margin: 10px;
    padding: 10px 20px;
  }
`;
const RadioBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
  }
`;

const ExpenseContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 134px;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #e6e8e9;
  border-radius: 4px;
  font-size: 14px;
  & span {
    font-weight: bold;
    font-size: 18px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
  }
`;
const AddTransactionView = (props) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("Expense");

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.toggleAddTxn();
  };

  return (
    <AddTransactionContainer>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          name="type"
          value="Expense"
          id="expense"
          checked={type === "Expense"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="Income"
          id="income"
          checked={type === "Income"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransactionBtn onClick={addTransaction}>
        Add Transaction
      </AddTransactionBtn>
    </AddTransactionContainer>
  );
};

// Main Component
const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        ${props.income-props.expense}
        <AddTransactionBtn onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "Add"}
        </AddTransactionBtn>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          toggleAddTxn={toggleAddTxn}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense
          <span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income
          <span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverViewComponent;
