const db = require('../connection');

// const pgp = require('pg-promise')();
// const dbConfig = require('../config/dbConfig');

// const db = pgp(dbConfig);

module.exports = {
  destroy(id) {
    return db.one(`
        DELETE FROM responses
        WHERE id = $1
        RETURNING *
        `, id);
  }
};
