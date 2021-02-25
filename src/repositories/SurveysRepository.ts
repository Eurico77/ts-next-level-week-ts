import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveyRepositorys extends Repository<Survey>{


 }


export { SurveyRepositorys }