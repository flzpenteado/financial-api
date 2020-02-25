module.exports = app => {
    const create = async (req, res) => {
        await app.services.account.create(req.body);

        return res.status(201).json();
    };

    const findAll = async (req, res) => {
        const accounts = await app.services.account.findAll();
        return res.status(200).json(accounts);
    };

    return { create, findAll };
};
