const express = require('express')
const {getAllTransactions, getTransaction, createTransaction, deleteTransaction, updateTransaction} = require('../queries/transactions')
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

transactions.delete("/:id", async (req,res) => {
    const { id } = req.params
    const deletedTransaction = await deleteTransaction(id)
    if(deletedTransaction.id) {
        res.status(200).json(deletedTransaction)
    } else {
        res.status(404).send("Transaction Not Found")
    }
})

transactions.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedTransaction = await updateTransaction(id, req.body)
    if (updatedTransaction.id) {
    res.status(200).json(updatedTransaction)
    } else {
        res.status(404).send("Error updating Transaction")
    }
})

module.exports = transactions