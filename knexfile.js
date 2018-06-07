module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://awray:doot@localhost:5433/narkal_dev'
  },

    test: {
      client: 'pg',
      connection: 'postgres://awray:doot@localhost:5433/narkal_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
