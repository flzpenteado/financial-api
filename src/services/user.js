module.exports = app => {
    const findAll = (filter = {}) => app.db('users').select().where(filter);

    const save = async user => {
        if (!user.name) return { error: 'Name is a required field' };
        if (!user.email) return { error: 'Email is a required field' };
        if (!user.password) return { error: 'Password is a required field' };

        const existingUser = await findAll({ email: user.email }).first();

        if (existingUser) return { error: 'Email already exists' };

        return app.db('users').insert(user, '*');
    };

    return { findAll, save };
};
