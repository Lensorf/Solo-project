const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ userName }) {
  return (
    <Layout userName={userName}>
      <script defer src="/js/main.js" />
      <link rel="stylesheet" href="/css/main.css" />

      <div className="main-div">
        
        <div className="anime-container" />

      </div>
    </Layout>
  );
};
