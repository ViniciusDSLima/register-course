import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1710716579865 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Users',
      columns: [
        {
          name: 'id',
          default: 'uuid_generate_v4()',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          isNullable: false,
          type: 'varchar',
        },
        {
          name: 'email',
          isUnique: true,
          type: 'varchar',
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Users');
  }
}
