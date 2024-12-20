import { Router } from "express";
import { RoleController } from "../controllers/RoleController";

const router = Router();

router.get("/", RoleController.getAllRoles);
router.get("/:id", RoleController.getRole);
router.post("/", RoleController.createRole);
router.put("/:id", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

export default router;