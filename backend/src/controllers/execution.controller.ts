import { Request, Response } from "express";
import ExecutionService from "../services/execution.service";

export default class ExecutionController {
  static async run(req: Request, res: Response) {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const { workflowId, input } = req.body;
      const execution = await ExecutionService.run(
        workflowId,
        req.user.id,
        input,
      );
      res.json({ success: true, data: execution });
    } catch (err: any) {
      console.error("execution run", err);
      res.status(400).json({ error: err.message });
    }
  }
}
