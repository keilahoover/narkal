exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('specialties').insert([{
          id: 1,
          restaurant_id: 1,
          pizza: false,
          burgers: false,
          breakfastBrunch: true,
          iceCream: true,
          juiceSmoothieBar: false,
          kombucha: false,
          saladBarBuffet: false,
          happyHour: true
        }])
        .then(function() {
          return knex.raw(`SELECT setval('specialties_id_seq', (SELECT MAX(id) FROM specialties));`)
        })
      ]);
    });
};
