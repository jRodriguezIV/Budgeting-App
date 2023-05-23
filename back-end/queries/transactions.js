const db = require("../db/dbConfig")

const getAllTransactions = async () => {
    try {
        const allTransactions = await db.any("SELECT * FROM transactions")
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTransactions
}