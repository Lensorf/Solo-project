const express = require('express');

const router = express.Router();

const { User, Anime } = require('../../db/models');

router.post('/', async (req, res) => {
  const { title, imageUrl, animeUrl, score } = req.body;
  console.log(score);
  try {
    const email = req.session.userEmail;
    const currentUserId = await User.findOne({ where: { email } });
    const userId = currentUserId.id;
    if (userId === req.session.userId) {
      const newAnimeFollower = await Anime.create({
        title, imageUrl, animeUrl, userId, score,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
