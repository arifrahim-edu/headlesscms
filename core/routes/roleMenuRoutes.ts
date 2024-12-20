import { Router } from "express";
import { RoleMenuController } from "../controllers/RoleMenuController";

const router = Router();

router.get("/", RoleMenuController.getAllRoleMenus);
router.post("/", RoleMenuController.createRoleMenu);
router.delete("/:role/:menuID", RoleMenuController.deleteRoleMenu);

export default router;