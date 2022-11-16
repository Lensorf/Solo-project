const express = require('express');

const router = express.Router();

const { User, Anime } = require('../../db/models');

router.post('/', async (req, res) => {
  const { title, imageUrl, animeUrl } = req.body;
  try {
    const email = req.session.userEmail;
    const currentUserId = await User.findOne({ where: { email } });
    const userId = currentUserId.id;
    if (userId === req.session.userId) {
      const newAnimeFollower = await Anime.create({
        title, imageUrl, animeUrl, userId,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
