import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { MenuDefinition } from "../models/MenuDefinition";

export class MenuDefinitionController {
  static async getAllMenus(req: Request, res: Response) {
    const menuRepository = AppDataSource.getRepository(MenuDefinition);
    const menus = await menuRepository.find();
    res.json(menus);
  }

  static async createMenu(req: Request, res: Response) {
    const menuRepository = AppDataSource.getRepository(MenuDefinition);
    const newMenu = menuRepository.create(req.body);
    const result = await menuRepository.save(newMenu);
    res.status(201).json(result);
  }

  static async deleteMenu(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const menuRepository = AppDataSource.getRepository(MenuDefinition);
    const result = await menuRepository.delete({ menuID: id });
    if (result.affected === 0) {
      res.status(404).json({ message: "Menu not found" });
      return;
    }
    res.status(204).send();
  }
}
