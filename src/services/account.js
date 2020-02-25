module.exports = app => {
    const create = account => app.db('account').insert(account);

    const findAll = (filter = {}) => app.db('account').where(filter);

    const get = id => app.db('account').where({ id }).first();

    const update = (id, account) => app.db('account').where({ id }).update(account, '*');

    return {
        create, findAll, get, update,
    };
};
