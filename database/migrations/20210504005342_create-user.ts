import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").notNullable();
    table.string("name").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").nullable();
    table.dateTime("deleted_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
