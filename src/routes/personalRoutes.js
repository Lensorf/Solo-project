const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Personal');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const email = req.session?.userEmail;
    const user = await User.findOne({ where: { email }, raw: true });
    renderTemplate(Main, { userName, user }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
