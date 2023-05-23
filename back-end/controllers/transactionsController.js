const express = require('express')
const transactions = express.Router()

transactions.get("/", async (req, res) => {
    const allFlowers = await getAllFlowers()
})

module.exports = transactions