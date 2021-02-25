import { Router } from 'express'
import { SurveyController } from '../controllers/SurveyController'
const surveyRoutes = Router()

surveyRoutes.post('', SurveyController.create)

export { surveyRoutes }

