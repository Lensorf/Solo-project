const React = require('react');
const Layout = require('./Layout');

module.exports = function Personal({ userName, allAnime }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/css/liked.css" />
      <h2> Здесь будут все аниме которые добавлены в список понравившихся и кнопки для переключение между списками типо посмотрел, смотрю, буду смотреть, забросил </h2>
      <div className="anime-container">
        {allAnime?.map((anime) => (
          <div id={`${anime.id}`} className="anime">
            <ul className="mylists-switch">
              <li data-id="1">
                <span className="animedone">
                  {/* <ion-icon name="heart-outline" /> */}
                  <ion-icon name="checkbox-outline" />
                  {/* Просмотренное Аниме */}
                </span>
              </li>

              <li data-id="2">
                <span className="animecurrent">
                  <ion-icon name="add-outline" />
                </span>
              </li>

              <li data-id="3">
                <span className="animefuture">
                  <ion-icon name="star-outline" />
                </span>
              </li>

              <li data-id="4">
                <span className="animefail">
                  <ion-icon name="sad-outline" />
                </span>
              </li>

            </ul>
            <a href={`${anime.animeUrl}`}>
              <img src={`${anime.imageUrl}`} alt="photo loaded" />
            </a>
            <div className="title">
              <a href={`${anime.animeUrl}`}>
                <span>
                  {anime.title}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js" />
    </Layout>
  );
};
