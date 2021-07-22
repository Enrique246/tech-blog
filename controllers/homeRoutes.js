const router = require('express').Router();
const { Comment,Post,User } = require('../models');

//Homepage
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      attributes: {
        exclude: ["user_id", "createdAt"],
      },
      include: [
        {
          model: Comment,
          attributes: {
            exclude: ["id", "user_id", "createdAt"],
          },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["id, email, password"],
          },
        },
      ],
    }
  ]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    
    res.render('homepage', {
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.get('/login', (req, res) => {
  res.render('login',{
    loggedIn: req.session.logged_in,
    login: true
  });
});


module.exports = router;