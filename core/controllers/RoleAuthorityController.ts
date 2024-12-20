import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { RoleAuthority } from "../models/RoleAuthority";

export class RoleAuthorityController {
  static async getAllRoleAuthorities(req: Request, res: Response) {
    const roleAuthorityRepository = AppDataSource.getRepository(RoleAuthority);
    const roleAuthorities = await roleAuthorityRepository.find();
    res.json(roleAuthorities);
  }

  static async createRoleAuthority(req: Request, res: Response) {
    const roleAuthorityRepository = AppDataSource.getRepository(RoleAuthority);
    const newRoleAuthority = roleAuthorityRepository.create(req.body);
    const result = await roleAuthorityRepository.save(newRoleAuthority);
    res.status(201).json(result);
  }

  static async deleteRoleAuthority(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const roleAuthorityRepository = AppDataSource.getRepository(RoleAuthority);
    const result = await roleAuthorityRepository.delete(id);
    if (result.affected === 0) {
      res.status(404).json({ message: "RoleAuthority not found" });
      return;
    }
    res.status(204).send();
  }
}
