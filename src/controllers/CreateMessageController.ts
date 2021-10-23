import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;
    
    try {
      const service = new AuthenticateUserService();
      const result = await service.execute(code);
     
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
}

export { CreateMessageController };
