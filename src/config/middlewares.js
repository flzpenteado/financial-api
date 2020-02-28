
const bodyParser = require('body-parser');
// const knexLogger = require('knex-logger');

module.exports = app => {
    // app.use(knexLogger(app.db));
    app.use(bodyParser.json());
};
