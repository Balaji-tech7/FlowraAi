/// <reference path="./types/express.d.ts" />
import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import authRoutes from "./routes/auth.routes";
import workflowRoutes from "./routes/workflow.routes";
import executionRoutes from "./routes/execution.routes";
import aiRoutes from "./routes/ai.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/workflows", workflowRoutes);
app.use("/executions", executionRoutes);
app.use("/ai", aiRoutes);

app.use(errorHandler);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
