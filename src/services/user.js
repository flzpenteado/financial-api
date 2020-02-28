const ValidationError = require('../errors/validationError');

module.exports = app => {
    const findAll = (filter = {}) => app.db('user').select().where(filter);

    const save = async user => {
        if (!user.name) throw new ValidationError('Name is a required field');
        if (!user.email) throw new ValidationError('Email is a required field');
        if (!user.password) throw new ValidationError('Password is a required field');

        const existingUser = await findAll({ email: user.email }).first();

        if (existingUser) throw new ValidationError('Email already exists');

        return app.db('user').insert(user, '*');
    };

    return { findAll, save };
};
