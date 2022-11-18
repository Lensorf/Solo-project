const searchForm = document.querySelector('.search');
const inputGood = document.querySelector('input');
const animeMainDiv = document.querySelector('.anime-container');

const req = async () => {
  try {
    const url = 'https://shikimori.one/api/animes?limit=100&score=9';

    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    result.forEach((article) => {
      const animeDiv = document.createElement('div');
      animeDiv.setAttribute('className', 'animeDiv');

      animeDiv.innerHTML = `
      <div id="card" class="anime" >
      <a class="liked" href="https://shikimori.one/${article.url}">
         <img src="https://nyaa.shikimori.one/${article.image.original}" class="card-img-main" alt="picture">
      </a>
      <div class="title">
      <a class="liked" href="https://shikimori.one/${article.url}" className="title">
      ${article.russian}
      </a>
      <p class="text" score="${article.score}">
      Рейтинг аниме: ${article.score} / 10
      </p>
      </div>
     </div>
       `;
      animeMainDiv.appendChild(animeDiv);
    });
  } catch (error) {
    console.error(error);
  }
};

req();
