import { Request, Response } from 'express'

class UserController {
    
    static async create(request: Request, response: Response) {

        const user = request.body
         console.log(user);
         return response.json({user})
        
    }



}


export { UserController }