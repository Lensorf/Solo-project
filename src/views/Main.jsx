const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ userName }) {
  return (
    <Layout userName={userName}>

      <div className="main-div">

        <div className="anime-container" />

      </div>
    </Layout>
  );
};
