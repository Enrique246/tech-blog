const router = require('express').Router();
const { Comment,Post,User } = require('../models');

//Homepage
// router.get('/', async (req, res) => {
//   try {
//     res.render('homepage', {
//       loggedIn: req.session.logged_in,
//       home: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      attributes: {
        exclude: ["user_id", "createdAt"],
      },
      include: [
        {
          model: Post,
          attributes: {
            exclude: ["id"],
          },
        },
        
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

module.exports = router;