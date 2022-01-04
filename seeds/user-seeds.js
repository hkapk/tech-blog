const { User } = require('../models');

const userData = [
{
    username: 'Bob',    
    email: 'bob@gmail.com',
    password: 'password'
},

{
    username: 'Dale',    
    email: 'dale@gmail.com',
    password: 'password'
}

]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;