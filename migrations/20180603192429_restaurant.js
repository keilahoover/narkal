
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table){
      table.increments();
      table.integer('restUsers_id').notNullable().references('restUsers.id').onDelete('CASCADE');
      table.varchar('email', 255).notNullable().unique();
      table.varchar('hoursOperation', 255).notNullable().unique();
      table.varchar('streetAddress', 255).notNullable().defaultTo('');
      table.varchar('city', 255).notNullable().defaultTo('');
      table.varchar('state', 255).notNullable().defaultTo('');
      table.integer('zip').unsigned();
      table.integer('phone').unsigned();
      table.varchar('facebook', 255).notNullable().defaultTo('');
      table.varchar('instagram', 255).notNullable().defaultTo('');
      table.varchar('twitter', 255).notNullable().defaultTo('');
      table.integer('expenseLevel').unsigned();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
