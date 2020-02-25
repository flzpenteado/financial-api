module.exports = app => {
    const create = async (req, res) => {
        await app.services.account.create(req.body);

        return res.status(201).json();
    };

    const findAll = async (req, res) => {
        const accounts = await app.services.account.findAll();
        return res.status(200).json(accounts);
    };


    const get = async (req, res) => {
        const account = await app.services.account.get(req.params.id);
        return res.status(200).json(account);
    };

    const update = (req, res) => {
        app.services.account.update(req.params.id, req.body)
            .then(result => res.status(200).json(result[0]));
    };

    const del = (req, res) => {
        app.services.account.del(req.params.id)
            .then(() => res.status(204).send());
    };

    return {
        create, findAll, get, update, del,
    };
};
