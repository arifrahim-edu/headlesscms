import { Router } from "express";
import { MenuAuthorityController } from "../controllers/MenuAuthorityController";

const router = Router();

router.get("/", MenuAuthorityController.getAllMenuAuthorities);
router.post("/", MenuAuthorityController.createMenuAuthority);
router.delete("/:id", MenuAuthorityController.deleteMenuAuthority);

export default router;