import { Router } from "express";
import { RoleController } from "../controllers/RoleController";

const router = Router();

router.get("/", RoleController.getAllRoles); // List roles with pagination
router.get("/:id", RoleController.getRole); // Get a role by ID
router.get("/relations", RoleController.getRolesWithRelations); // Get roles with authorities and menus
router.post("/", RoleController.createRole); // Create a new role
router.put("/:id", RoleController.updateRole); // Update a role by ID
router.delete("/:id", RoleController.deleteRole); // Delete a role by ID

export default router;