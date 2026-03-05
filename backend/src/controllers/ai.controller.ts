import { Request, Response } from "express";
import AIService from "../services/ai.service";

export default class AIController {
  static async chat(req: Request, res: Response) {
    try {
      const { message } = req.body;
      const response = await AIService.chat(message);
      res.json({ success: true, data: response });
    } catch (err: any) {
      console.error("ai chat", err);
      res.status(500).json({ error: err.message });
    }
  }
}
