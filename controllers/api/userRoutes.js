const router = require('express').Router();
const session = require('express-session');
const { User } = require('../../models');

//Sign up
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login and logout code
router.post('/login', async (req, res) => {
  console.log("POST login", req.body)

  try {
    const userData = await User.findOne({ where: { email: req.body.email }});

    if (!userData) {
      console.log("userData", userData)
      res
        .status(400)
        .json({ message: 'Could not find user with that email; please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    // You got to sign up to have a working user 
    console.log(req.body.password)

    if (!validPassword) {
      console.log("valid password ", validPassword)
      res
        .status(400)
        .json({ message: 'Invalid password; please try again.' });
      return;
    }
    console.log(req.session.user_id)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
       console.log("session ", session)
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log("ERROR: ", err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
