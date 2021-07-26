const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


// Get post
router.get("/", async (req, res) => {
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

//Get post by id
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'body'
      ],
      include: [
        // include the Comment model here:
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'text_comment', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username',]
          }
        }
      ]
    })
      .then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
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



router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        body: req.body.body
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// // UPDATE a user
// router.put('/update', async (req, res) => {
//     if (!req.session.loggedIn) {
//         res.redirect("/login");
//       } 
//       else {
//     try {
//       const postData = await Post.update(req.body, {
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (!postData[0]) {
//         res.status(404).json({ message: 'No user with this id!' });
//         return;
//       }
//       res.status(200).json(postData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// }
//   });
  
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
