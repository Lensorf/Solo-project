const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal({ userName, allAnime }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/css/liked.css" />
      <script defer src="/js/deleteLikedAnime.js" />
      <div className="anime-container">
        {allAnime?.map((anime) => (
          <div id={`${anime.id}`} className="anime">
            <ul className="mylists-switch">
              <li data-id="1">
                <span className="animedone">
                  <ion-icon id="icons" name="checkbox-outline" />
                  {/* Просмотренное Аниме */}
                </span>
              </li>

              <li data-id="2">
                <span className="animecurrent">
                  <ion-icon id="icons" name="add-circle-outline" />
                </span>
              </li>

              <li data-id="3">
                <span className="animefuture">
                  <ion-icon id="icons" name="star-outline" />
                </span>
              </li>

              <li data-id="4">
                <span className="animefail">
                  <ion-icon id="icons" name="sad-outline" />
                </span>
              </li>

            </ul>

            <div>
              <a className="liked" href={`${anime.animeUrl}`}>
                <img src={`${anime.imageUrl}`} alt="photo loaded" />
              </a>
              <a className="liked" href={`${anime.animeUrl}`}>
                <p className="title">
                  {anime.title}
                </p>
              </a>

              <p className="text">
                Рейтинг аниме:
                {anime.score}
                {' '}
                / 10
              </p>
            </div>
            <form action="/delete" method="DELETE">
              <button className="floating-button" type="button" id="btn-like">Удалить</button>
            </form>
          </div>
        ))}
      </div>
      <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js" />
    </Layout>
  );
};
