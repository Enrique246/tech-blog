const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Get comments
router.get('/', (req, res) => {
    Comment.findAll({})
      .then(commentData => res.json(commentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Create a new comment
router.post('/', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
        res.status(400).json({message:'Please sign in to create new comment'});
      } else {  
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
}
  });

  module.exports = router;
