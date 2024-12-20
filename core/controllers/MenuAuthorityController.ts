import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { MenuAuthority } from "../models/MenuAuthority";

export class MenuAuthorityController {
  static async getAllMenuAuthorities(req: Request, res: Response) {
    const menuAuthorityRepository = AppDataSource.getRepository(MenuAuthority);
    const menuAuthorities = await menuAuthorityRepository.find();
    res.json(menuAuthorities);
  }

  static async createMenuAuthority(req: Request, res: Response) {
    const menuAuthorityRepository = AppDataSource.getRepository(MenuAuthority);
    const newMenuAuthority = menuAuthorityRepository.create(req.body);
    const result = await menuAuthorityRepository.save(newMenuAuthority);
    res.status(201).json(result);
  }

  static async deleteMenuAuthority(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const menuAuthorityRepository = AppDataSource.getRepository(MenuAuthority);
    const result = await menuAuthorityRepository.delete(id);
    if (result.affected === 0) {
      res.status(404).json({ message: "MenuAuthority not found" });
      return;
    }
    res.status(204).send();
  }
}
