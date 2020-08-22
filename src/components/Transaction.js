import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transactionClass(transaction.amount)}>
      {transaction.text}
      <span>
        {sign} {Math.abs(transaction.amount)}€
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

function transactionClass(amount) {
  if (amount > 0) {
    return "plus";
  }
  return "minus";
}
