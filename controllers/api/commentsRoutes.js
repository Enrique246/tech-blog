const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE a new comment
router.post('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.status(400).json({message:'Please sign in to create new comment'});
      } else {  
    try {
      const locationData = await Comment.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
}
  });

  module.exports = router;
