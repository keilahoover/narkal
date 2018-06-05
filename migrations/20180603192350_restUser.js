
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restusers', function(table){
    table.increments();
    table.varchar('first_name', 255).notNullable().defaultTo('');
    table.varchar('last_name', 255).notNullable().defaultTo('');
    table.varchar('restuseremail', 255).notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restusers');
};
