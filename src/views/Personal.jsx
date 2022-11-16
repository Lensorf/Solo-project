const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal({ userName }) {
  return (
    <Layout userName={userName}>
        <h2> Личный кабинет тут будет информация о пользователе </h2>
    </Layout>
  );
};
