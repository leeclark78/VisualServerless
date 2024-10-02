import { Request, Response } from 'express';

export const saveApplication = (_req: Request, res: Response) => {
  // TODO: Implement saving application to database
  res.json({ message: 'Application saved successfully' });
};

export const loadApplication = (_req: Request, res: Response) => {
  // TODO: Implement loading application from database
  res.json({ message: 'Application loaded successfully' });
};
