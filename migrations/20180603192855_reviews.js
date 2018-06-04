
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
      table.integer('users_id').notNullable().references('users.id').onDelete('CASCADE');
      table.integer('numOfStars').unsigned();
      table.varchar('review', 300).notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reviews');
};
