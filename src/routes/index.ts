import { Router } from 'express'

import { userRoutes } from './userRoutes'
import { surveyRoutes } from './surveyRoutes'

const router = Router()

router.use('/users', userRoutes)
router.use('/surveys', surveyRoutes)


export default router