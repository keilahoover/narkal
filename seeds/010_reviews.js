exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('reviews').insert([{
          id: 1,
          restaurant_id: 1,
          users_id: 1,
          numOfStars: 5,
          review: 'There are always so many interesting people to meet. The oak matured mead and butterbeer are to die for.'
        }])
        .then(function() {
          return knex.raw(`SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`)
        })
      ]);
    });
};
