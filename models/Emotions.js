const db = require('../connection');

// NOTE: MIGHT HAVE TO BE responses & NOT emotions
module.exports = {
    findAll() {
        return db.query(`
        SELECT * FROM emotions 
        `);
    },

    findOne(id) {
        return db.one(`
        SELECT * FROM emotions
        WHERE emotion_id = $1
        `, id);
    },
// REPLACE whatever with labels from db
    create(emotionData) {
        return db.one(`
        INSERT INTO emotions
        (whatever the labels are)
        VALUES
        ($1, $2) 
        RETURNING *
        `, [emotionData.whatever, emotionData.whatever2]);
    },

    delete(id) {
        return db.query(`
        DELETE FROM emotions
        WHERE emotion_id = $1
        `, id);
    },

    update(id, emotionData) {
        return db.query(`
        UPDATE emotions
        SET
            whatever = $2
            whatever2 = $3
        WHERE emotion_id = $1
        RETURNING *
        `, [id, emotionData.whatever, emotionData.whatever2]);
    },
};
