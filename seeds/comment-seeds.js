const { Comment } = require('../models');

const commentData = [
{
    comment_text: 'Hi I am Bob',    
    post_id: '2',
    user_id: '1'
},

{
    comment_text: 'Hey Bob, I am Dale',    
    post_id: '1',
    user_id: '2'
},

{
    comment_text: 'Hey!!',    
    post_id: '5',
    user_id: '2'
},
{
    comment_text: 'Hey guys!!',    
    post_id: '4',
    user_id: '1'
},
{
    comment_text: 'If you are bob then who is Dale?',    
    post_id: '4',
    user_id: '1'
},
{
    comment_text: 'LOL!!',    
    post_id: '5',
    user_id: '1'
},
{
    comment_text: 'Wow!!',    
    post_id: '2',
    user_id: '1'
}

]

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;