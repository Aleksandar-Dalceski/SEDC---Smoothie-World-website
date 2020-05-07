var allSmoothies = [];

fetch(
  "https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/searchSmooties.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allSmoothies = data;
    drawSmoothiesInHtml(allSmoothies);
  })
  .catch(function (error) {
    console.log(error);
  });


  function drawSmoothiesInHtml(arrayOfSmoothies) {
    const smoothiesDiv = document.querySelector("#smoothies");
    smoothiesDiv.innerHTML = "";
  
    arrayOfSmoothies.forEach(function (smoothie) {
      smoothiesDiv.innerHTML += `
        <div class="card">
          <img src="${smoothie.image}" class="card-img-top">
          <div class="card-body">
            <h2>${smoothie.name}</h2>
            <p class="card-text">${smoothie.recipe}</p>
          </div>
        </div>
      `;
    });
  }

  function searchSmoothies() {
    //   location.assign("search.html");
    const searchInputValue = document
      .getElementById("search-input")
      .value.toLowerCase()
      .trim();
  
    const filteredArrayOfSmoothies = allSmoothies.filter(function (smoothie) {
      return smoothie.recipe.toLowerCase().indexOf(searchInputValue) >= 0;
    });
  
    drawSmoothiesInHtml(filteredArrayOfSmoothies);
  }
  