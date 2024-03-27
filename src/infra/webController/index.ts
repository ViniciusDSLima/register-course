import { WebControllerType } from './types';
import { Request, Response } from 'express';

export function controllerAdapter(controller: WebControllerType) {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      await Promise.all([
        controller.validationRequest().body?.validate(req.body),
        controller.validationRequest().query?.validate(req.query),
        controller.validationRequest().params?.validate(req.params),
      ]);

      const response = await controller.handle(req);

      return res.status(response.statusCode).json(response.data);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}
