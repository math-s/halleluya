import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('membership', table =>{
    table.increments('id').primary();
    table.integer('person_id').references('id').inTable('person').notNullable().onDelete('cascade');
    table.integer('team_id').references('id').inTable('team').notNullable().onDelete('cascade');
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('membership');
}