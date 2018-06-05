exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('culture_convenience').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('culture_convenience').insert([{
          id: 1,
          restaurant_id: 1,
          handicapAccess: true,
          kidFriendly: true,
          petFriendly: false,
          largePartyAccess: true,
          genderNeutralRestroom: true,
          reservations: false,
          wifiAvailable: false,
          barArea: true,
          patioOutdoor: true,
          firePits: true
        }])
        .then(function() {
          return knex.raw(`SELECT setval('culture_convenience_id_seq', (SELECT MAX(id) FROM culture_convenience));`)
        })
      ]);
    });
};
