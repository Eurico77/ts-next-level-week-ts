import request from 'supertest'
import { app } from '../src/app'

import createConnection from '../src/database/connection'



describe('Users', () => {

    beforeAll(async () => {
        const connection = await createConnection();
 
        

        await connection.runMigrations();

    })

    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users')
            .send({
                name: 'user name',
                email: 'user@.comsad',
            })

        expect(response.status).toBe(201)
    })
})