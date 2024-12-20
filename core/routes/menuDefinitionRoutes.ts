import { Router } from "express";
import { MenuDefinitionController } from "../controllers/MenuDefinitionController";

const router = Router();

router.get("/", MenuDefinitionController.getAllMenus);
router.post("/", MenuDefinitionController.createMenu);
router.delete("/:id", MenuDefinitionController.deleteMenu);

export default router;