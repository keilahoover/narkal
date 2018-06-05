exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dietary').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('dietary').insert([{
          id: 1,
          restaurant_id: 1,
          allFarmToTable: false,
          FarmToTableFocus: true,
          allVegan: false,
          veganMenuOptions: true,
          allVegetarian: false,
          vegetarianMenuOptions: true,
          allOrganic: false,
          organicMenuOptions: true,
          gfMenu: true,
          paleoMenu: true,
          markedOnMenu: true,
          kosher: false,
          grassFed: true,
          localMeat: true,
          hormoneFree: true,
          serveAlcohol: true,
          byob: false
        }])
        .then(function() {
          return knex.raw(`SELECT setval('dietary_id_seq', (SELECT MAX(id) FROM dietary));`)
        })
      ]);
    });
};
