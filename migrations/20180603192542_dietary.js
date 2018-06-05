
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dietary', function(table){
      table.increments();
      table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
      table.boolean('allFarmToTable').notNullable().defaultTo(false);
      table.boolean('FarmToTableFocus').notNullable().defaultTo(false);
      table.boolean('allVegan').notNullable().defaultTo(false);
      table.boolean('veganMenuOptions').notNullable().defaultTo(false);
      table.boolean('allVegetarian').notNullable().defaultTo(false);
      table.boolean('vegetarianMenuOptions').notNullable().defaultTo(false);
      table.boolean('allOrganic').notNullable().defaultTo(false);
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
