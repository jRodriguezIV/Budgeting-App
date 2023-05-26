import "./EditTransaction.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((e) => console.warn("catch", e));
  }, [id]);


  function handleTextChange(event) {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  }

  function handleEdit(changedTransaction) {
    axios
      .put(`${API}/transactions/${id}`, changedTransaction)
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
    handleEdit(transaction);
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
