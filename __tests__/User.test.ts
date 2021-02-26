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
        await connection.close()
    })


    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users')
            .send({
                name: 'user name',
                email: 'user@.cosadsmsad',
            })

        expect(response.status).toBe(201)
    })
})