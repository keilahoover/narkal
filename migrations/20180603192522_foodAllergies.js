
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_allergies', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
      table.boolean('soy').notNullable().defaultTo(false);
      table.boolean('dairy').notNullable().defaultTo(false);
      table.boolean('peanut').notNullable().defaultTo(false);
      table.boolean('treeNut').notNullable().defaultTo(false);
      table.boolean('gluten').notNullable().defaultTo(false);
      table.boolean('seaFood').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('food_allergies');
};
