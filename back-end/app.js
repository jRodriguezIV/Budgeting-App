const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const transactionsController = require('./controllers/transactionsController')
app.use("/transactions", transactionsController)

app.get("/", (req, res) => {
    res.status(200).send("This is the Budget App landing page!")
})

app.get("*", (req, res) => {
    res.status(404).send("This Page Does Not Exist!")
})

module.exports = app