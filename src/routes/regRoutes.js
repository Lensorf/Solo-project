const router = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Reg = require('../views/Registration');

const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    renderTemplate(Reg, null, res);
  } catch (error) {
    console.log('Ошибка', error);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      name, password, email,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      const newUser = await User.create({
        name, password: hashedPassword, email,
      });
      req.session.userEmail = newUser.email;
      req.session.username = newUser.name;
      req.session.userId = newUser.id;
      res.redirect('/');
    } else {
      res.send('Пользователь с такой почтой уже существует');
    }
  } catch (error) {
    console.log('Ошибка', error);
  }
});

module.exports = router;
