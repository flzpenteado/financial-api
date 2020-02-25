module.exports = app => {
    const create = account => app.db('account').insert(account);

    const findAll = () => app.db('account');

    return { create, findAll };
};
