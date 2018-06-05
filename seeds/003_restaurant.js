exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurant').insert([{
          id: 1,
          restusers_id: 1,
          restName: 'Three Broomsticks',
          restemail: 'threebrooms@hogmead.com',
          hoursOperation: 'Mon-Sun 9-5',
          streetAddress: '1000 Universal Studios Plaza',
          city: 'orlando',
          state: 'FL',
          zip: 32819,
          phone: '407-363-8000',
          facebook: 'https://www.facebook.com/The-Wizarding-World-of-Harry-Potter-483912830511/',
          instagram: 'https://www.instagram.com/explore/locations/828759273/the-wizarding-world-of-harry-potter-at-universal-studios-hollywood/?hl=en',
          twitter: 'https://twitter.com/UniversalORL?lang=en',
          profileImg: 'https://cdn.shopify.com/s/files/1/1028/6739/products/The_Three_Broomsticks_Sign_1024x1024.jpg?v=1508825139',
          menuImg: 'https://static1.squarespace.com/static/56b92fd6f8508249cabeff0a/583300553e00be4fe4d06012/58adbb4bc534a5499ae6c519/1487937255220/20170215_181407.jpg',
          expense_1: true,
          expense_2: false,
          expense_3: false,
          expense_4: false
        }])
        .then(function() {
          return knex.raw(`SELECT setval('restaurant_id_seq', (SELECT MAX(id) FROM restaurant));`)
        })
      ]);
    });
};
