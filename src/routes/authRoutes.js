const router = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Auth = require('../views/Auth');

const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    renderTemplate(Auth, null, res);
  } catch (error) {
    console.log('Ошибка', error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { password, email } = req.body;
    let user = null;
    if (req.body.email) {
      user = await User.findOne({ where: { email } });
    }
    if (user) {
      const isUserAuth = await bcrypt.compare(password, user.password);
      if (isUserAuth) {
        req.session.userEmail = user.email;
        req.session.username = user.name;
        req.session.userId = user.id;
        res.redirect('/');
      } else {
        res.send({ error: 'Неправильный пароль' });
      }
    } else {
      res.send({ error: 'Нет такого email' });
    }
  } catch (error) {
    console.log('Ошибка', error);
  }
});

module.exports = router;
