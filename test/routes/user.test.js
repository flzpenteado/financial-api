const request = require('supertest');
const app = require('../../src/app');

const email = `${Date.now()}@email.com`;

beforeAll(() => app.db('user').insert({ name: 'Walter White', email, password: 12345 }));

test('It should list all users', () => request(app).get('/users')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    }));


test('It should correctly insert an user', () => request(app).post('/users')
    .send({ name: 'Walter White', email: `${Date.now()}@email.com`, password: 'pwd123' })
    .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter White');
    }));

test('It should not insert an user without name property', () => request(app).post('/users')
    .send({ email: `${Date.now()}@email.com`, password: 'pwd123' })
    .then(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Name is a required field');
    }));

test('It should not insert an user without email property', () => request(app).post('/users')
    .send({ name: 'Walter White', password: 'pwd123' })
    .then(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Email is a required field');
    }));

test('It should not insert an user without password property', () => request(app).post('/users')
    .send({ name: 'Walter White', email: `${Date.now()}@email.com` })
    .then(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Password is a required field');
    }));

test('It should not insert an user with an existing email', () => request(app).post('/users')
    .send({ name: 'Walter White', email, password: 'pwd123' })
    .then(res => {
        expect(res.body.error).toBe('Email already exists');
    }));
