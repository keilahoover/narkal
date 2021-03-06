
exports.up = function(knex, Promise) {
  return knex.schema.createTable('culture_convenience', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
      table.boolean('handicapAccess').notNullable().defaultTo(false);
      table.boolean('kidFriendly').notNullable().defaultTo(false);
      table.boolean('petFriendly').notNullable().defaultTo(false);
      table.boolean('largePartyAccess').notNullable().defaultTo(false);
      table.boolean('genderNeutralRestroom').notNullable().defaultTo(false);
      table.boolean('reservations').notNullable().defaultTo(false);
      table.boolean('wifiAvailable').notNullable().defaultTo(false);
      table.boolean('barArea').notNullable().defaultTo(false);
      table.boolean('patioOutdoor').notNullable().defaultTo(false);
      table.boolean('firePits').notNullable().defaultTo(false);
      table.boolean('toGo').notNullable().defaultTo(false);
      table.boolean('delivery').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('culture_convenience');
};
