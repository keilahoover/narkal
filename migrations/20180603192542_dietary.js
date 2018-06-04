
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dietary', function(table){
      table.increments();
      table.integer('restUsers_id').notNullable().references('restUsers.id').onDelete('CASCADE');
      table.boolean('100FarmToTable').notNullable().defaultTo(false);
      table.boolean('FarmToTableFocus').notNullable().defaultTo(false);
      table.boolean('100Vegan').notNullable().defaultTo(false);
      table.boolean('veganMenuOptions').notNullable().defaultTo(false);
      table.boolean('100Vegetarian').notNullable().defaultTo(false);
      table.boolean('vegetarianMenuOptions').notNullable().defaultTo(false);
      table.boolean('100Organic').notNullable().defaultTo(false);
      table.boolean('organicMenuOptions').notNullable().defaultTo(false);
      table.boolean('gfMenu').notNullable().defaultTo(false);
      table.boolean('paleoMenu').notNullable().defaultTo(false);
      table.boolean('markedOnMenu').notNullable().defaultTo(false);
      table.boolean('kosher').notNullable().defaultTo(false);
      table.boolean('grassFed').notNullable().defaultTo(false);
      table.boolean('localMeat').notNullable().defaultTo(false);
      table.boolean('hormoneFree').notNullable().defaultTo(false);
      table.boolean('serveAlcohol').notNullable().defaultTo(false);
      table.boolean('byob').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dietary');
};
