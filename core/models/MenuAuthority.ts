import 
{ 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  CreateDateColumn, 
  UpdateDateColumn 
} from "typeorm";
import { MenuDefinition } from "./MenuDefinition";

@Entity({ name: "dbo_menuAuthority_Table" })
export class MenuAuthority {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  authorityID!: string;

  @Column({ length: 50 })
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

  @ManyToOne(() => MenuDefinition, (menu) => menu.authorities)
  menu!: MenuDefinition;
}