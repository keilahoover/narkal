
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rest_type', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
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
      table.boolean('dispensaryTobacco').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rest_type');
};
