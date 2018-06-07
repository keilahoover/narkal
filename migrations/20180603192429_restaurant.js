
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table){
      table.increments();
      table.integer('restusers_id').notNullable().references('restusers.id').onDelete('CASCADE');
      table.varchar('restName').notNullable().defaultTo('');
      table.varchar('email', 255).notNullable().unique();
      table.varchar('hoursOperation', 255).notNullable().unique();
      table.varchar('streetAddress', 255).notNullable().defaultTo('');
      table.varchar('city', 255).notNullable().defaultTo('');
      table.varchar('state', 255).notNullable().defaultTo('');
      table.integer('zip').unsigned();
      table.varchar('phone', 12).notNullable().defaultTo('');
      table.varchar('facebook', 255).notNullable().defaultTo('');
      table.varchar('instagram', 255).notNullable().defaultTo('');
      table.varchar('twitter', 255).notNullable().defaultTo('');
      table.varchar('profileImg', 255).notNullable().defaultTo('');
      table.varchar('menuImg', 255).notNullable().defaultTo('');
      table.boolean('expense_1').notNullable().defaultTo(false);
      table.boolean('expense_2').notNullable().defaultTo(false);
      table.boolean('expense_3').notNullable().defaultTo(false);
      table.boolean('expense_4').notNullable().defaultTo(false);
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
