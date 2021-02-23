import express from 'express'
import routes from './routes/index'
import server from './server'

const app = express()


app.use(routes)
app.use(server)