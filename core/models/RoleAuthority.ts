import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./Role";

@Entity({ name: "dbo_roleAuthority_Table" })
export class RoleAuthority {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, nullable: true })
  authorityID!: string;

  @Column({ type: "int", nullable: true })
  canView!: number;

  @Column({ type: "int", nullable: true })
  canChange!: number;

  @Column({ type: "int", nullable: true })
  canDelete!: number;

  @Column({ length: 50, nullable: true })
  createdBy!: string;

  @CreateDateColumn()
  createTime!: Date;

  @Column({ length: 50, nullable: true })
  updatedBy!: string;

  @UpdateDateColumn()
  updateTime!: Date;

  @Column({ type: "int", default: 1 })
  active!: number;

  @ManyToOne(() => Role, (role: Role) => role.authorities)
  role!: Role;
}
