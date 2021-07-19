const router = require('express').Router();
const { Post } = require('../../models');

// Get post
router.get("/:id", async (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      try {
        const PostData = await Post.findOne({
          where: {
            id: req.params.id,
          },
          attributes: ["title", "body"],
        });
        res.status(200).json(PostData);
      } catch (err) {
        res.status(401).json(err);
      };
    };
  });
  
  // Creating post
  router.post("/", async (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      try {
        const requireBody = req.body;
        requireBody.user_id = req.session.user_id;
        const PostData = await Post.create(requireBody);
        res.status(200).json(PostData);
      } catch (err) {
        res.status(400).json(err);
      }
    }
  });
// UPDATE a user
router.put('/update', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
      } 
      else {
    try {
      const postData = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!postData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
}
  });
  
  // DELETE a user
  router.delete('/delete', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
      } 
      else {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!postData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
}
  });


module.exports = router;
