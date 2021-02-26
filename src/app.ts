import 'reflect-metadata'
import express from 'express'
import createConnection from './database/connection'
import routes from './routes/index'

createConnection()
const app = express()

app.use(express.json())
app.use(routes)


export { app }