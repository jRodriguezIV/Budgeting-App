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


  function styleElement() {
    let n = transactions.reduce((acc, cur) => acc + cur.amount, 0)
    console.log(n)
    if(n >= 100) {
      return {backgroundColor:"green"}
    } else if (n > 0 && n <= 99) {
      return {backgroundColor:"yellow"}
    } else if (n <= 0) {
      return {backgroundColor:"red"}
    }
  }

  return (
    <div className="index">
      <h1 className="total">
        Bank Account Total:{" "}
        <span style={styleElement()}>
        {transactions.reduce((acc, cur) => acc + cur.amount, 0)}
        </span>
      </h1>

      <div className="transactionList">
        {transactions.map((el) => (
          <div key={el.id}>
            <div className="transaction">
              <p className="date">{el.date}</p>
              <a className="id" href={`/${el.id}`}>
                {el.item_name}
              </a>
              <p className="amount">{el.amount}</p>
            </div>
            <hr style={{ width: "95%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
