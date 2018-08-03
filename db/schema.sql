DROP DATABASE IF EXISTS unfiltered_experiment_db;

CREATE DATABASE unfiltered_experiment_db;

\c unfiltered_experiment_db;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS responses CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    impression_1 TEXT NOT NULL,
    impression_2 VARCHAR(255) NOT NULL,
    impression_3 VARCHAR(255) NOT NULL
);

CREATE TABLE responses (

);
