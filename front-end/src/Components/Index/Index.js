import axios from "axios";
import { useEffect, useState } from "react";
import "./Index.css";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.warn("catch", e));
  }, []);
  console.log(transactions);

  return (
    <div className="index">
      <h1 className="total">
        Bank Account Total:{" "}
        {transactions.reduce((acc, cur) => acc + cur.amount, 0)}
      </h1>

      <div className="transactionList">
        {transactions.map((el) => (
          <>
            <div className="transaction">
              <p className="date">{el.date}</p>
              <a className="id" href={`/${el.id}`}>
                {el.item_name}
              </a>
              <p className="amount">{el.amount}</p>
            </div>
            <hr style={{ width: "95%" }} />
          </>
        ))}
      </div>
    </div>
  );
}
