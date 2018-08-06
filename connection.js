// connects with models
const pgp = require('pg-promise')();

const opts = {
    database: 'unfiltered_experiment_db',
};

const db = pgp(opts);

module.exports = db;
