const mainDiv = document.querySelector('.anime-container');

mainDiv.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'LIKE') {
    const closestParent = e.target.closest('#card');

    const animeUrl = closestParent.children[0].href;
    const imageUrl = closestParent.children[0].children[0].currentSrc;
    const title = closestParent.children[1].innerText;
    const score = closestParent.children[2].id;

    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title, imageUrl, animeUrl, score,
      }),
    });

    const result = await response.json();
  }
});
