exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_allergies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('food_allergies').insert([{
          id: 1,
          restaurant_id: 1,
          soy: false,
          dairy: true,
          peanut: true,
          treeNut: false,
          gluten: true,
          seaFood: true
        }])
        .then(function() {
          return knex.raw(`SELECT setval('food_allergies_id_seq', (SELECT MAX(id) FROM food_allergies));`)
        })
      ]);
    });
};
