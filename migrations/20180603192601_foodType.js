
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foodType', function(table){
      table.increments();
      table.integer('restUsers_id').notNullable().references('restUsers.id').onDelete('CASCADE');
      table.boolean('chinese').notNullable().defaultTo(false);
      table.boolean('japanese').notNullable().defaultTo(false);
      table.boolean('thai').notNullable().defaultTo(false);
      table.boolean('indian').notNullable().defaultTo(false);
      table.boolean('vietnamese').notNullable().defaultTo(false);
      table.boolean('italian').notNullable().defaultTo(false);
      table.boolean('mexican').notNullable().defaultTo(false);
      table.boolean('latinAmerican').notNullable().defaultTo(false);
      table.boolean('greekMediterranean').notNullable().defaultTo(false);
      table.boolean('middleEastern').notNullable().defaultTo(false);
      table.boolean('american').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('foodType');
};
