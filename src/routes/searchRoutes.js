const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Search');
// const { Twit } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    renderTemplate(Main, { userName }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
