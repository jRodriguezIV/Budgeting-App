const express = require('express')
const {getAllTransactions} = require('../queries/transactions')
const transactions = express.Router()

transactions.get("/", async (req, res) => {
    const allTransactions = await getAllTransactions()
    if (allTransactions[0]) {
        res.status(200).json(allTransactions)
    } else {
        res.status(500).json({ error: "server error"})
    }
})

module.exports = transactions