const request = require('supertest');
const app = require('../../src/app');

let userId;

beforeAll(async () => {
    const insertedUserIds = await app.db('user').insert({ name: 'Walter White', email: `${Date.now()}@email.com`, password: 123456 }, 'id');

    userId = insertedUserIds[0];
});


test('It should correctly insert an account', () => request(app).post('/account')
    .send({ name: 'Main account', user_id: userId })
    .then(res => {
        expect(res.status).toBe(201);
    }));

test('It should list all accounts', () => request(app).get('/account')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    }));

test('It should get an account by id', async () => {
    const insertedIds = await app.db('account').insert({ name: 'Account by id', user_id: userId }, 'id');
    const id = insertedIds[0];

    return request(app).get(`/account/${id}`)
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(id);
        });
});

test('It should update an account', async () => {
    const insertedIds = await app.db('account').insert({ name: 'Account by id', user_id: userId }, 'id');
    const id = insertedIds[0];

    return request(app).put(`/account/${id}`)
        .send({ name: 'Updated name' })
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.name).toBe('Updated name');
        });
});
