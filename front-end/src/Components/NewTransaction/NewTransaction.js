import "./NewTransaction.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewTransaction() {
  const navigate = useNavigate();
  let id = ""
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

  function addTransaction(newTransaction) {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then((response) => (id = response.data.id))
      .then(
        () => {
          navigate(`/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((e) => console.warn("catch", e));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction(transaction);
  }

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
