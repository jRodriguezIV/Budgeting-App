import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './Transaction.css'

const API = process.env.REACT_APP_API_URL

export default function Transaction() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({})

    useEffect(() => {
        axios
        .get(`${API}/transactions/${id}`)
        .then(response => setTransaction(response.data))
        .catch(e => console.warn("catch", e))
    }, [id])
    console.log(transaction)

    return (
        <>
        <h2 className="transactionHeader">Transaction Information</h2>
        <div className="transactionInfo">

            <p>Transaction: {transaction.item_name}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Transaction Date: {transaction.date}</p>
            <p>Transaction Source: {transaction.from}</p>
            <p>Category: {transaction.category}</p>

            <button onClick={() => navigate(`/${id}/edit`)}>Edit</button>

        </div>
        </>
    )
}