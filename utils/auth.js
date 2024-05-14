// I started with my model creation then moved to seeds, after that I moved to my log in authentications and helpers//

const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;