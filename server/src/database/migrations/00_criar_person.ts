import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('person', table => {
    table.increments('id').primary();
    table.string('nome', 50).notNullable();
    table.string('sobrenome', 50).notNullable();
    table.string('genero', 1).notNullable();
    table.string('imagem', 50);
    table.string('email', 50);
    table.date('dataDeNascimento');
    table.string('cev', 10);
    table.string('telefone', 12);
    table.string('cep', 8);
    table.timestamps();

  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('person');
}