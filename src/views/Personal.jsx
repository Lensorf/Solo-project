const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal({ userName, user }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/css/personal.css" />
      <div className='personal'>
        <h2 className='title'> Личная информация пользователя </h2>
        <p> Имя профиля: {user.name}</p>
        <p> Почтовый ящик: {user.email}</p>
        <p> Дата регистрации: {user.createdAt.toLocaleDateString()}</p>
      </div>
    </Layout>
  );
};
