const { Post } = require('../models');

const postData = [
{
    title: 'Posted by Bob',    
    post_content: 'Hi Everyone, I am bob and this is my first blog post',
    user_id: '1'
},

{
    title: 'Dales post',    
    post_content: 'Hi Everyone, I am Dale and this is my first blog post!, feel free to leave me a comment!',
    user_id: '2'
},

{
    title: 'New post',    
    post_content: 'Welcome to my blog!!',
    user_id: '1'
},

{
    title: 'Another boring Sunday post',    
    post_content: 'Oh what a day!! ',
    user_id: '2'
},


{
    title: 'My second post',    
    post_content: 'Hi Everyone,I am excited to join the blog',
    user_id: '2'
},

{
    title: 'A new post',    
    post_content: 'This is my second post, I am just so excited to join the tech-blog community!!',
    user_id: '1'
}


]

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = seedPosts;