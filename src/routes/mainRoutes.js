const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
// const { Twit } = require('../../db/models');

// const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    renderTemplate(Main, { userName }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
