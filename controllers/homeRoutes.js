const router = require('express').Router();
const { Reservations,Classes,User } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in,
      home: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;