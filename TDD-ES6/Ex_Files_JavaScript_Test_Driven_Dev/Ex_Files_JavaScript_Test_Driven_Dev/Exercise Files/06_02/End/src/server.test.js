import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import { app } from './server';

describe('GET /users/:username', () => {
    it('sends the correct response when a user with the username is found', async () => {
        const fakeData = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        const stub = sinon
            .stub(db, 'getUserByUsername')
            .resolves(fakeData);

        await request(app).get('/users/abc')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(fakeData);

        expect(stub.getCall(0).args[0]).to.equal('abc');

        stub.restore();
    });
});