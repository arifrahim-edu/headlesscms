import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";
  import { RoleAuthority } from "./RoleAuthority";
  import { RoleMenu } from "./RoleMenu";
  
  @Entity({ name: "dbo_Roles_Table" })
  export class Role {
    @PrimaryColumn({ length: 50 })
    role!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    home!: string;
  
    @Column({ type: "int", nullable: true })
    priority!: number;
  
    @Column({ type: "int", nullable: true })
    maxSessions!: number;
  
    @Column({ type: "int", nullable: true })
    inactivityTimeout!: number;
  
    @Column({ type: "int", nullable: true })
    passwordFailLimit!: number;
  
    @Column({ type: "int", nullable: true })
    nFAFailLimit!: number;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    orgId!: string;
  
    @Column({ type: "int", nullable: true })
    isPartnerRole!: number;
  
    @Column({ length: 20, nullable: true })
    owner!: string;
  
    @Column({ length: 400, nullable: true })
    description!: string;
  
    @Column({ type: "int", nullable: true })
    expirationDuration!: number;
  
    @Column({ type: "int", nullable: true })
    accntLockDuration!: number;
  
    @Column({ type: "int", nullable: true })
    resetAccntCounter!: number;
  
    @Column({ type: "int", nullable: true })
    chCapacity!: number;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    displayName!: string;
  
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
  
    @OneToMany(() => RoleAuthority, (roleAuthority) => roleAuthority.role)
    authorities!: RoleAuthority[];
  
    @OneToMany(() => RoleMenu, (roleMenu) => roleMenu.role)
    menus!: RoleMenu[];
  }