import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('team', table => {
    table.increments('id').primary();
    table.integer('lider').references('id').inTable('person').notNullable().onDelete('cascade');
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('team');
}