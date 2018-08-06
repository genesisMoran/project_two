DROP DATABASE IF EXISTS unfiltered_experiment_db;

CREATE DATABASE unfiltered_experiment_db;

\c unfiltered_experiment_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS emotions;
DROP TABLE IF EXISTS responses;

CREATE TABLE users (
            id SERIAL PRIMARY KEY,
          name VARCHAR(50),
           age INTEGER
);

CREATE TABLE emotions (
            id SERIAL PRIMARY KEY,
     emotion_1 VARCHAR(20),
     emotion_2 VARCHAR(20),
     emotion_3 VARCHAR(20),
     emotion_4 VARCHAR(20),
     emotion_5 VARCHAR(20),
     emotion_6 VARCHAR(20),
     emotion_7 VARCHAR(20),
     emotion_8 VARCHAR(20),
     emotion_9 VARCHAR(20),
    emotion_10 VARCHAR(20),
    emotion_11 VARCHAR(20),
    emotion_12 VARCHAR(20),
    emotion_13 VARCHAR(20),
    emotion_14 VARCHAR(20),
    emotion_15 VARCHAR(20),
    emotion_16 VARCHAR(20),
    emotion_17 VARCHAR(20)    
);

CREATE TABLE responses (
            id SERIAL PRIMARY KEY,
    question_1 TEXT,
    question_2 TEXT,
       emotion INTEGER REFERENCES emotions(id),
      users_id INTEGER REFERENCES users(id)
);
