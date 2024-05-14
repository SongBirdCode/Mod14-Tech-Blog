const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "No way!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "First Comment :D",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Um... InSaNe?!",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Nice.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Groundbreaking stuff, you have my undivided attention.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "WhAtEvEr!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Right, you're entitled to your own opinion.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "I would LOVE to know more.",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;