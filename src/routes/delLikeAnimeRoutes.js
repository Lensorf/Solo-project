const express = require('express');

const router = express.Router();
const { Anime } = require('../../db/models');

router.delete('/', async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    await Anime.destroy({ where: { id } });
    res.json({ destroy: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
