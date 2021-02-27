import request from 'supertest'
import { app } from '../src/app'

import createConnection from '../src/database/connection'



describe('Users', () => {
    let connection = null

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();

    })

    beforeEach(async () => {
        await connection.transaction

    })

    afterAll(async () => {
        await connection.dropDatabase()
    })


    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users')
            .send({
                name: 'user ndsdaame',
                email: 'user@.cosdddssasadsmsad',
            })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
    })



    it('Should not be able to create a user with exists email', async () => {
        const response = await request(app).post('/users')
            .send({
                name: 'user ndsdaame',
                email: 'user@.cosdddssasadsmsad',
            })

        expect(response.status).toBe(400)
    })




})