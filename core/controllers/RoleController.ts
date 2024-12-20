import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Role } from "../models/Role";

export class RoleController {
  static async getAllRoles(req: Request, res: Response): Promise<void> {
    const { page = 1, pageSize = 10 } = req.query; // Default page size: 10
    const roleRepository = AppDataSource.getRepository(Role);
  
    const [roles, total] = await roleRepository.findAndCount({
      skip: (Number(page) - 1) * Number(pageSize),
      take: Number(pageSize),
    });
  
    res.json({
      data: roles,
      total,
      page: Number(page),
      pageSize: Number(pageSize),
    });
  }

  static async getRolesByContext(req: Request, res: Response): Promise<void> {
    const { context } = req.query;

    // Check if context is provided and valid
    if (!context || typeof context !== "string") {
      res.status(400).json({ message: "Invalid or missing context parameter" });
      return;
    }

    try {
      const roleRepository = AppDataSource.getRepository(Role);

      // Adjust 'context' to match the property name in the Role entity
      const roles = await roleRepository.find({
        where: { context }, // Ensure 'context' matches the Role entity property
      });

      res.json(roles);
    } catch (error) {
      console.error("Error fetching roles:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  

  static async getRole(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const roleRepository = AppDataSource.getRepository(Role);
    const role = await roleRepository.findOneBy({ role: id });
    if (!role) {
      res.status(404).json({ message: "Role not found" });
      return;
    }
    res.json(role);
  }

  static async createRole(req: Request, res: Response) {
    const roleRepository = AppDataSource.getRepository(Role);
    const newRole = roleRepository.create(req.body);
    const result = await roleRepository.save(newRole);
    res.status(201).json(result);
  }

  static async updateRole(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const roleRepository = AppDataSource.getRepository(Role);
    const role = await roleRepository.findOneBy({ role: id });
    if (!role) {
      res.status(404).json({ message: "Role not found" });
      return;
    }
    Object.assign(role, req.body);
    const result = await roleRepository.save(role);
    res.json(result);
  }

  static async deleteRole(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const roleRepository = AppDataSource.getRepository(Role);
    const result = await roleRepository.delete({ role: id });
    if (result.affected === 0) {
      res.status(404).json({ message: "Role not found" });
      return;
    }
    res.status(204).send();
  }

  static async createRoles(req: Request, res: Response): Promise<void> {
    const roles = req.body; // Expect an array of roles
    if (!Array.isArray(roles)) {
      res.status(400).json({ message: "Input should be an array" });
      return;
    }
    const roleRepository = AppDataSource.getRepository(Role);
    const newRoles = roleRepository.create(roles);
    const result = await roleRepository.save(newRoles);
    res.status(201).json(result);
  }

  static async deleteRoles(req: Request, res: Response): Promise<void> {
    const { ids } = req.body; // Expect an array of role IDs
    if (!Array.isArray(ids)) {
      res.status(400).json({ message: "Input should be an array" });
      return;
    }
    const roleRepository = AppDataSource.getRepository(Role);
    const result = await roleRepository.delete(ids);
    res.status(204).send();
  }
  
  
}
