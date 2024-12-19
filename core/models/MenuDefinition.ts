import {
    Entity,
    PrimaryColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { RoleMenu } from "./RoleMenu";
  import { MenuAuthority } from "./MenuAuthority";
  
  @Entity({ name: "dbo_menuDef_Table" })
  export class MenuDefinition {
    @PrimaryColumn({ type: "varchar", length: 50 })
    menuID!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    parent!: string;
  
    @Column({ type: "text", nullable: true })
    menuURL!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    cssParent!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    cssClass!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    aClass!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    dataToggle!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    context!: string;
  
    @Column({ type: "int", nullable: true })
    slNum!: number;
  
    @Column({ type: "text", nullable: true })
    colDef!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    wsName!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    vwName!: string;
  
    @Column({ type: "text", nullable: true })
    functionName!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    functionType!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    owner!: string;
  
    @Column({ type: "text", nullable: true })
    rejectReason!: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    caption!: string;
  
    @Column({ type: "text", nullable: true })
    guide!: string;
  
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
  
    @OneToMany(() => RoleMenu, (roleMenu) => roleMenu.menuEntity)
    roleMenus!: RoleMenu[];
  
    @OneToMany(() => MenuAuthority, (menuAuthority) => menuAuthority.menu)
    authorities!: MenuAuthority[];
  }