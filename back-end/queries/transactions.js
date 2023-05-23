const db = require("../db/dbConfig");

const getAllTransactions = async () => {
  try {
    const allTransactions = await db.any("SELECT * FROM transactions");
    return allTransactions;
  } catch (error) {
    return error;
  }
};

const getTransaction = async (id) => {
  try {
    const transaction = await db.one(
      "SELECT * FROM transactions WHERE id=$1",
      id
    );
    return transaction;
  } catch (error) {
    return error;
  }
};

const createTransaction = async (transaction) => {
  try {
    const newTransaction = await db.one(
      'INSERT INTO transactions (item_name, amount, "date", "from", category) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        transaction.item_name,
        transaction.amount,
        transaction.date,
        transaction.from,
        transaction.category,
      ]
    );
    return newTransaction
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTransactions,
  getTransaction,
  createTransaction
};
