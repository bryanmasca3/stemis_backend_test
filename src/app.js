import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRoutes from "./routes/category.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("success");
});

app.use("/api/category", categoryRoutes);
app.use("/api/task", taskRoutes);

export default app;
