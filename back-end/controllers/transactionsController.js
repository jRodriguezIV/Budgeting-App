const express = require('express')
const {getAllTransactions, getTransaction, createTransaction} = require('../queries/transactions')
const transactions = express.Router()

transactions.get("/", async (req, res) => {
    const allTransactions = await getAllTransactions()
    if (allTransactions[0]) {
        res.status(200).json(allTransactions)
    } else {
        res.status(500).json({ error: "server error"})
    }
})
transactions.get("/:id", async (req, res) => {
    const { id } = req.params
    const transaction = await getTransaction(id)
    if (transaction.id) {
        res.status(200).json(transaction)
    } else {
        res.status(404).json({ error : "transaction not found"})
    }

})

transactions.post("/", async (req, res) => {
    try {
        const transaction = await createTransaction(req.body)
        res.status(200).json(transaction)
    } catch (error) {
       res.status(404).json({ error: error})
    }
})

module.exports = transactions