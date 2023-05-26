import "./NewTransaction.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewTransaction() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  function handleTextChange(event) {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  }

  function handleSubmit() {}

  return (
    <>
        <h2 className="newHeader">New Transaction Form</h2>
      <div className="newFormWrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item_name">
            Transaction Name: <br />
            <input
              id="item_name"
              type="text"
              placeholder="name"
              value={transaction.item_name}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="amount">
            Transaction Amount: <br />
            <input
              id="amount"
              type="number"
              value={transaction.amount}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="date">
            Transaction Date: <br />
            <input
              id="date"
              type="text"
              placeholder="date"
              value={transaction.date}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="from">
            Transaction Source: <br />
            <input
              id="from"
              type="text"
              placeholder="from"
              value={transaction.from}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="category">
            Category: <br />
            <input
              id="category"
              type="text"
              placeholder="category"
              value={transaction.category}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
