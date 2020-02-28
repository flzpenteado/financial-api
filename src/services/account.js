const ValidationError = require('../errors/validationError');

module.exports = app => {
    const create = account => {
        if (!account.name) throw new ValidationError('Name is a required field');

        return app.db('account').insert(account);
    };

    const findAll = (filter = {}) => app.db('account').where(filter);

    const get = id => app.db('account').where({ id }).first();

    const update = (id, account) => app.db('account').where({ id }).update(account, '*');

    const del = id => app.db('account').where({ id }).del();

    return {
        create, findAll, get, update, del,
    };
};
