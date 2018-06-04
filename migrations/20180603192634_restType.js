
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restType', function(table){
      table.increments();
      table.integer('restUsers_id').notNullable().references('restUsers.id').onDelete('CASCADE');
      table.boolean('counterService').notNullable().defaultTo(false);
      table.boolean('sitDown').notNullable().defaultTo(false);
      table.boolean('cafe').notNullable().defaultTo(false);
      table.boolean('foodTruck').notNullable().defaultTo(false);
      table.boolean('brewery').notNullable().defaultTo(false);
      table.boolean('vineyard').notNullable().defaultTo(false);
      table.boolean('csa').notNullable().defaultTo(false);
      table.boolean('farmersMarket').notNullable().defaultTo(false);
      table.boolean('healthFoodGrocery').notNullable().defaultTo(false);
      table.boolean('fruitVeggieStand').notNullable().defaultTo(false);
      table.boolean('petFood').notNullable().defaultTo(false);
      table.boolean('dispensaryTabacco').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restType');
};
