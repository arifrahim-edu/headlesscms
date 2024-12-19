import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1734631411088 implements MigrationInterface {
    name = 'InitialMigration1734631411088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`dbo_roleAuthority_Table\` (\`id\` int NOT NULL AUTO_INCREMENT, \`authorityID\` varchar(50) NULL, \`canView\` int NULL, \`canChange\` int NULL, \`canDelete\` int NULL, \`createdBy\` varchar(50) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(50) NULL, \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` int NOT NULL DEFAULT '1', \`roleRole\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dbo_Roles_Table\` (\`role\` varchar(50) NOT NULL, \`home\` varchar(50) NULL, \`priority\` int NULL, \`maxSessions\` int NULL, \`inactivityTimeout\` int NULL, \`passwordFailLimit\` int NULL, \`nFAFailLimit\` int NULL, \`orgId\` varchar(50) NULL, \`isPartnerRole\` int NULL, \`owner\` varchar(20) NULL, \`description\` varchar(400) NULL, \`expirationDuration\` int NULL, \`accntLockDuration\` int NULL, \`resetAccntCounter\` int NULL, \`chCapacity\` int NULL, \`displayName\` varchar(50) NULL, \`createdBy\` varchar(50) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(50) NULL, \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` int NOT NULL DEFAULT '1', PRIMARY KEY (\`role\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dbo_menuAuthority_Table\` (\`id\` int NOT NULL AUTO_INCREMENT, \`authorityID\` varchar(50) NOT NULL, \`menuID\` varchar(50) NOT NULL, \`createdBy\` varchar(50) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(50) NULL, \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` int NOT NULL DEFAULT '1', \`menuMenuID\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dbo_menuDef_Table\` (\`menuID\` varchar(50) NOT NULL, \`parent\` varchar(50) NULL, \`menuURL\` text NULL, \`cssParent\` varchar(50) NULL, \`cssClass\` varchar(50) NULL, \`aClass\` varchar(50) NULL, \`dataToggle\` varchar(50) NULL, \`context\` varchar(50) NULL, \`slNum\` int NULL, \`colDef\` text NULL, \`wsName\` varchar(50) NULL, \`vwName\` varchar(50) NULL, \`functionName\` text NULL, \`functionType\` varchar(50) NULL, \`owner\` varchar(50) NULL, \`rejectReason\` text NULL, \`caption\` varchar(50) NULL, \`guide\` text NULL, \`createdBy\` varchar(50) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(50) NULL, \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` int NOT NULL DEFAULT '1', PRIMARY KEY (\`menuID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dbo_RoleMenu_Table\` (\`role\` varchar(50) NOT NULL, \`menuID\` varchar(50) NOT NULL, \`createdBy\` varchar(50) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(50) NULL, \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` int NOT NULL DEFAULT '1', \`roleEntityRole\` varchar(50) NULL, \`menuEntityMenuID\` varchar(50) NULL, PRIMARY KEY (\`role\`, \`menuID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`dbo_roleAuthority_Table\` ADD CONSTRAINT \`FK_fdefc9461e7fba262d2f9669c32\` FOREIGN KEY (\`roleRole\`) REFERENCES \`dbo_Roles_Table\`(\`role\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`dbo_menuAuthority_Table\` ADD CONSTRAINT \`FK_5235f59465c2873e5220b5f047f\` FOREIGN KEY (\`menuMenuID\`) REFERENCES \`dbo_menuDef_Table\`(\`menuID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`dbo_RoleMenu_Table\` ADD CONSTRAINT \`FK_543ad7498ad1aba498d0ade4f56\` FOREIGN KEY (\`roleEntityRole\`) REFERENCES \`dbo_Roles_Table\`(\`role\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`dbo_RoleMenu_Table\` ADD CONSTRAINT \`FK_ac8007ad75f640d4a21ccf0f434\` FOREIGN KEY (\`menuEntityMenuID\`) REFERENCES \`dbo_menuDef_Table\`(\`menuID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`dbo_RoleMenu_Table\` DROP FOREIGN KEY \`FK_ac8007ad75f640d4a21ccf0f434\``);
        await queryRunner.query(`ALTER TABLE \`dbo_RoleMenu_Table\` DROP FOREIGN KEY \`FK_543ad7498ad1aba498d0ade4f56\``);
        await queryRunner.query(`ALTER TABLE \`dbo_menuAuthority_Table\` DROP FOREIGN KEY \`FK_5235f59465c2873e5220b5f047f\``);
        await queryRunner.query(`ALTER TABLE \`dbo_roleAuthority_Table\` DROP FOREIGN KEY \`FK_fdefc9461e7fba262d2f9669c32\``);
        await queryRunner.query(`DROP TABLE \`dbo_RoleMenu_Table\``);
        await queryRunner.query(`DROP TABLE \`dbo_menuDef_Table\``);
        await queryRunner.query(`DROP TABLE \`dbo_menuAuthority_Table\``);
        await queryRunner.query(`DROP TABLE \`dbo_Roles_Table\``);
        await queryRunner.query(`DROP TABLE \`dbo_roleAuthority_Table\``);
    }

}
