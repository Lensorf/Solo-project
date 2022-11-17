const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Liked = require('../views/Liked');
const { User, Anime } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const id = req.session?.userId;
    const currentUser = await User.findOne({ where: { id } });
    const userId = currentUser.id;
    if (userId === id) {
      const allAnime = await Anime.findAll({ where: { userId }, raw: true });
      renderTemplate(Liked, { userName, allAnime }, res);
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
