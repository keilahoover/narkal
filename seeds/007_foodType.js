exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_type').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('food_type').insert([{
          id: 1,
          restaurant_id: 1,
          chinese: false,
          japanese: false,
          thai: false,
          indian: false,
          vietnamese: false,
          italian: true,
          mexican: false,
          latinAmerican: true,
          greekMediterranean: true,
          middleEastern: true,
          american: false
        }])
        .then(function() {
          return knex.raw(`SELECT setval('food_type_id_seq', (SELECT MAX(id) FROM food_type));`)
        })
      ]);
    });
};
