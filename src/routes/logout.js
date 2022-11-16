const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    if (req.session.username) {
      req.session.destroy();
      res.clearCookie('Session');
      res.redirect('/');
    }
    res.redirect('/');
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
