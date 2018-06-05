exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restusers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restusers').insert([{
          id: 1,
          first_name: 'Madam',
          last_name: 'Rosmerta',
          email: 'rosmertabrooms@gmail.com',
          hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'  // youreawizard
        }])
        .then(function() {
          return knex.raw(`SELECT setval('restusers_id_seq', (SELECT MAX(id) FROM restusers));`)
        })
      ]);
    });
};
