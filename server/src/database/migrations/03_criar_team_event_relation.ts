import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('team_event', table =>{
    table.increments('id').primary();
    table.integer('team_id').references('id').inTable('team').notNullable().onDelete('cascade');
    table.integer('event_id').references('id').inTable('event').notNullable().onDelete('cascade');
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('team_event');
}