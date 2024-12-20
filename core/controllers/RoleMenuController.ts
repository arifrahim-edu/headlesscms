import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { RoleMenu } from "../models/RoleMenu";

export class RoleMenuController {
  static async getAllRoleMenus(req: Request, res: Response) {
    const roleMenuRepository = AppDataSource.getRepository(RoleMenu);
    const roleMenus = await roleMenuRepository.find();
    res.json(roleMenus);
  }

  static async createRoleMenu(req: Request, res: Response) {
    const roleMenuRepository = AppDataSource.getRepository(RoleMenu);
    const newRoleMenu = roleMenuRepository.create(req.body);
    const result = await roleMenuRepository.save(newRoleMenu);
    res.status(201).json(result);
  }

  static async deleteRoleMenu(req: Request, res: Response): Promise<void> {
    const { role, menuID } = req.params;
    const roleMenuRepository = AppDataSource.getRepository(RoleMenu);
    const result = await roleMenuRepository.delete({ role, menuID });
    if (result.affected === 0) {
      res.status(404).json({ message: "RoleMenu not found" });
      return;
    }
    res.status(204).send();
  }
}
