import { Router } from "express";
import {
  getCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controller/category.controller.js";

const router = Router();
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
