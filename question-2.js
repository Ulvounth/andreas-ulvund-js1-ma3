const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=024ca8b761fb4a9682936af64523afc3";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const games = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="games">
                                        Title: ${games[i].name}
                                        Rating: ${games[i].rating}
                                        Tags: ${games[i].tags.length}
                                    </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
  }
}

makeApiCall();
