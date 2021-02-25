import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveys1614218586933 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveys",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "title",
                        type: "varchar(200)"
                    },
                    {
                        name: "description",
                        type: "varchar(200)"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'

                    }
                ]
            })
        );

    }



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('surveys')
    }

}
