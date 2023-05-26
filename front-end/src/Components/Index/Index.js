import axios from 'axios'
import { useEffect, useState } from 'react'

const API = process.env.REACT_APP_API_URL

export default function Index() {
    const [transactions, setTransactions] = useState([])

    
    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then(response => setTransactions(response.data))
        .catch(e => console.warn("catch", e))
    }, [])
   
    


    




    return (
        <div className='index'>

            <h1>Bank Account Total: {transactions.reduce((acc, cur) => acc + cur.amount, 0)}</h1>
            


        </div>
    )
}