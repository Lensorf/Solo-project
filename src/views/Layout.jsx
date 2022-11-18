const React = require('react');

module.exports = function Layout({ children, userName }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/Layout.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        <title>Document</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">AniList</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            { userName ? (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Главная</a>
                  </li>

                  <li className="nav-item" id="personal">
                    <a className="nav-link" href="/personal">Личный кабинет</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/liked"><ion-icon id="heart" name="heart-outline" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/search"><ion-icon name="search-outline" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout</a>
                  </li>
                </ul>
                <div id="Greetings" className="nav-link" href="/profile">
                  Привет
                  {' '}
                  { userName }
                  {' '}
                  !
                </div>
              </div>
            ) : (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Главная</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/reg">Регистрация</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/log">Авторизация</a>
                  </li>
                </ul>
              </div>
            )}

          </div>
        </nav>
        {children}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
};
