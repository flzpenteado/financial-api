const request = require('supertest');
const app = require('../src/app');

test('It should respond on root (/)', () => request(app).get('/').then(res => expect(res.status).toBe(200)));
