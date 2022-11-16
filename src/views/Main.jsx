const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ userName }) {
  return (
    <Layout userName={userName}>
      <h1> Hello world! </h1>
    </Layout>
  );
};
