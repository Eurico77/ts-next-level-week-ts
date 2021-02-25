import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveyRepositorys } from '../repositories/SurveysRepository'

class SurveyController {
    static async create(request: Request, response: Response) {

        try {
            const { title, description } = request.body

            const surveysRepository = getCustomRepository(SurveyRepositorys)

            const survey = surveysRepository.create({
                title,
                description
            })

            await surveysRepository.save(survey)
            response.status(201).json(survey)

        } catch (error) {
            return new Error(error)

        }


    }
    static async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveyRepositorys)

        const all = await surveysRepository.find();

        return response.json(all).status(200)

    }
}

export { SurveyController }
