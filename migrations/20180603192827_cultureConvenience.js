
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cultureConvenience', function(table){
      table.increments();
      table.integer('restUsers_id').notNullable().references('restUsers.id').onDelete('CASCADE');
      table.boolean('handicapAccess').notNullable().defaultTo(false);
      table.boolean('kidFriendly').notNullable().defaultTo(false);
      table.boolean('petFriendly').notNullable().defaultTo(false);
      table.boolean('largePartyAccess').notNullable().defaultTo(false);
      table.boolean('transgenderRestroom').notNullable().defaultTo(false);
      table.boolean('reservations').notNullable().defaultTo(false);
      table.boolean('wifiAvailable').notNullable().defaultTo(false);
      table.boolean('barArea').notNullable().defaultTo(false);
      table.boolean('patioOutdoor').notNullable().defaultTo(false);
      table.boolean('firePits').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cultureConvenience');
};
