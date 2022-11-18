const mainDiv = document.querySelector('.anime-container');
mainDiv.addEventListener('click', async (e) => {
  if (e.target.id === 'btn-like') {
    const { id } = e.target.parentNode.parentNode;
    const response = await fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    if (result.destroy === 'OK') {
      mainDiv.removeChild(e.target.parentNode.parentNode);
    }
  }
});
