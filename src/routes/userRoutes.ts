import {Router }from 'express'
const userRoutes = Router()

userRoutes.get('', (req, res) => {
    return res.json({ message: true })
})

export default userRoutes

