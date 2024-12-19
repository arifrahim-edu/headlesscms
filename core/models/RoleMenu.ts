import { Entity, PrimaryColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./Role";
import { MenuDefinition } from "./MenuDefinition";

@Entity({ name: "dbo_RoleMenu_Table" })
export class RoleMenu {
  @PrimaryColumn({ type: "varchar", length: 50 })
  role!: string;

  @PrimaryColumn({ type: "varchar", length: 50 })
  menuID!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  createdBy!: string;

  @CreateDateColumn()
  createTime!: Date;

  @Column({ type: "varchar", length: 50, nullable: true })
  updatedBy!: string;

  @UpdateDateColumn()
  updateTime!: Date;

  @Column({ type: "int", default: 1 })
  active!: number;

  @ManyToOne(() => Role, (role: Role) => role.menus)
  roleEntity!: Role;

  @ManyToOne(() => MenuDefinition, (menu: MenuDefinition) => menu.roleMenus)
  menuEntity!: MenuDefinition;
}
