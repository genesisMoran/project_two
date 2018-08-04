\c unfiltered_experiment_db;

INSERT INTO users 
(id, name, age)
VALUES 
(DEFAULT, 'Genesis Moran', 25);

INSERT INTO responses
(id, 
impression_1, 
impression_2, 
impression_3, 
users_id)
VALUES
(DEFAULT, 
'This is a test', 
'This is a test too', 
DEFAULT, 
DEFAULT);
-- Question: Should I hard-code the number or keep it @ DEFAULT(/something similar)?

INSERT INTO emotions
(id, 
emotion_1, 
emotion_2, 
emotion_3, 
emotion_4, 
emotion_5, 
emotion_6, 
emotion_7, 
emotion_8,
emotion_9, 
emotion_10, 
emotion_11, 
emotion_12,
emotion_13, 
emotion_14, 
emotion_15, 
emotion_16, 
emotion_17)
VALUES 
(DEFAULT, 
'Ineffable',
'Bliss',
'Serenity',
'Reverence',
'Understanding',
'Forgiveness',
'Optimism',
'Trust',
'Affirmation',
'Scorn',
'Hate',
'Craving',
'Anxiety',
'Regret',
'Despair',
'Blame',
'Humiliation');
