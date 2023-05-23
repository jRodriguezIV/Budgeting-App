const db = require("../db/dbConfig")

const getAllTransactions = async () => {
    try {
        const allTransactions = await db.any("SELECT * FROM transactions")
        return allTransactions
    } catch (error) {
        return error
    }
}

const getTransaction = async (id) => {
    try {
        const transaction = await db.one("SELECT * FROM transactions WHERE id=$1", id)
        return transaction
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTransactions,
    getTransaction,
}