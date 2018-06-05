
exports.up = function(knex, Promise) {
  return knex.schema.createTable('specialties', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
      table.boolean('pizza').notNullable().defaultTo(false);
      table.boolean('burgers').notNullable().defaultTo(false);
      table.boolean('breakfastBrunch').notNullable().defaultTo(false);
      table.boolean('iceCream').notNullable().defaultTo(false);
      table.boolean('juiceSmoothieBar').notNullable().defaultTo(false);
      table.boolean('kombucha').notNullable().defaultTo(false);
      table.boolean('saladBarBuffet').notNullable().defaultTo(false);
      table.boolean('happyHour').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('specialties');
};
