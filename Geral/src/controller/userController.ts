import { Request, Response } from 'express'

class UserController{    
    public async list(req: Request, res: Response) {
        return res.json('Natan Colleoni');
    }
}

export default new UserController()