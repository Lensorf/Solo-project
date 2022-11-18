const searchForm = document.querySelector('.search');
const inputGood = document.querySelector('input');
const animeMainDiv = document.querySelector('.anime-container');

searchForm.addEventListener('submit', async (e) => {
  animeMainDiv.innerHTML = '';
  e.preventDefault();
  try {
    const topic = inputGood.value;
    const url = `https://shikimori.one/api/animes/search?q=${topic}`;

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
      </div>
      <p class="text" id="${article.score}">
      Рейтинг аниме: ${article.score} / 10
      </p>
     <button class="addAnime floating-button" id="btn-like">LIKE</button>
     </div>
       `;
      animeMainDiv.appendChild(animeDiv);
      inputGood.value = '';
    });
  } catch (error) {
    console.error(error);
  }
});
