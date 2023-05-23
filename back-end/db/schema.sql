DROP DATABASE IF EXISTS transactions_dev;

CREATE DATABASE transactions_dev;

\c transactions_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    item_name TEXT,
    amount INT,
    date TEXT,
    from TEXT,
    category TEXT
);