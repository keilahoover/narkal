module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/narkal_dev'
  },

    test: {
      client: 'pg',
      connection: 'postgres://@localhost/narkal_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
