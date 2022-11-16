const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ userName }) {
  return (
    <Layout userName={userName}>

      <link rel="stylesheet" href="/css/search.css" />
      <script defer src="/js/searchAnime.js" />
      <script defer src="/js/addAnime.js" />

      <h1> Поиск аниме </h1>

      <div className="main-div">

        <div className="input-group mb-3">
          <form className="search">
            <button className="btn btn-outline-secondary btn-search glow-on-hover search" type="submit" id="button-addon1">SEARCH</button>
            <input name="key-word" type="text" className="input" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
          </form>
        </div>

        <div className="anime-container" />

      </div>
    </Layout>
  );
};
