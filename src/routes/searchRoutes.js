const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Search = require('../views/Search');
// const { Twit } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    renderTemplate(Search, { userName }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
