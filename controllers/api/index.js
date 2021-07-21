const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/postRoutes', postRoutes);
router.use('/userRoutes', userRoutes);
router.use('/commentsRoutes', commentsRoutes);


module.exports = router;
