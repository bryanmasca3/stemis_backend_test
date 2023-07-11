import { Router } from "express";
import {
  getTask,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller.js";

const router = Router();
router.get("/", getTask);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
