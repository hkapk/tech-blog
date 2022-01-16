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
},

{
    username: 'Claire',    
    email: 'claire@gmail.com',
    password: 'password'
},

{
    username: 'Diane',    
    email: 'diane@gmail.com',
    password: 'password'
},

{
    username: 'Margo',    
    email: 'margo@gmail.com',
    password: 'password'
},

{
    username: 'Todd',    
    email: 'todd@gmail.com',
    password: 'password'
}

]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;