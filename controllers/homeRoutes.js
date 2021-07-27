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
      home: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get post by id
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'createdAt',
      'body'
    ],
    include: [
      // include the Comment model here:
      {
        model: User,
        attributes: ['name']
      },
      {
        model: Comment,
        attributes: ['id', 'text_comment', 'post_id', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['name']
        }
      }
    ]
  })

  
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = postData.get({ plain: true });
      console.log(postData)
      res.render('onepost', {
        posts:post,
        loggedIn: req.session.logged_in,
        home: true
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Login
router.get('/login', (req, res) => {
  res.render('login',{
    loggedIn: req.session.logged_in,
    login: true
  });
});


module.exports = router;