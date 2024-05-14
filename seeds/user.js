//After models are completed I moved into making proper seed files. I ensured they are labeled with lowercased format; This helps to load examples into the database//

const { User } = require('../models');

const userData =
[
  {
    "username": "gina",
    "email": "gina@gmail.com",
    "password": "admin12345"
  },
  {
    "username": "charlie",
    "email": "checkpoint@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Steve",
    "email": "stevesmith@gmail.com",
    "password": "password"
  },
  {
    "username": "Jack",
    "email": "JacktheMack@yahoo.com",
    "password": "password12345"
  },
  {
    "username": "Jill",
    "email": "onahill0@gmail.com",
    "password": "codingrox123"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;