const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ userName }) {
  return (
    <Layout userName={userName}>

      <link rel="stylesheet" href="/css/search.css" />
      <script defer src="/js/searchAnime.js" />
      <script defer src="/js/addAnime.js" />

      <div className="main-div">

        <div className="search mb-3">
          <form className="search">
            <button className="floating-button" type="submit">SEARCH</button>
            <input name="key-word" type="text" className="vvod" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
          </form>
        </div>

        <div className="anime-container" />

      </div>
    </Layout>
  );
};
