const secret = require('./secrets');

module.exports = {
  "development": {
    "username": "eduardo",
    "password": secret.DATABASE_PASSWORD,
    "database": "instarocket_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "eduardo",
    "password": null,
    "database": "instarocket_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "instarocket_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }
}
