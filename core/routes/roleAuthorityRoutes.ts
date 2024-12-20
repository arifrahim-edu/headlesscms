import { Router } from "express";
import { RoleAuthorityController } from "../controllers/RoleAuthorityController";

const router = Router();

router.get("/", RoleAuthorityController.getAllRoleAuthorities);
router.post("/", RoleAuthorityController.createRoleAuthority);
router.delete("/:id", RoleAuthorityController.deleteRoleAuthority);

export default router;