const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal({ userName }) {
  return (
    <Layout userName={userName}>
      <h2> Здесь будут все аниме которые добавлены в список понравившихся и кнопки для переключение между списками типо посмотрел, смотрю, буду смотреть, забросил </h2>
    </Layout>
  );
};
