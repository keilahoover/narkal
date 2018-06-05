exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rest_type').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('rest_type').insert([{
          id: 1,
          restaurant_id: 1,
          counterService: true,
          sitDown: true,
          cafe: false,
          foodTruck: false,
          brewery: true,
          vineyard: true,
          csa: false,
          farmersMarket: false,
          healthFoodGrocery: false,
          fruitVeggieStand: false,
          petFood: false,
          dispensaryTobacco: true
        }])
        .then(function() {
          return knex.raw(`SELECT setval('rest_type_id_seq', (SELECT MAX(id) FROM rest_type));`)
        })
      ]);
    });
};
