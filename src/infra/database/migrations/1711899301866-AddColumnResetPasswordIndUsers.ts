import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnResetPasswordIndUsers1711899301866 implements MigrationInterface {
  name = 'AddColumnResetPasswordIndUsers1711899301866';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('Users', new TableColumn({
      isNullable: false,
      default: false,
      type: 'bool',
      name: 'resetPassword',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Users', new TableColumn({
      isNullable: false,
      default: false,
      type: 'bool',
      name: 'resetPassword',
    }));
  }

}
