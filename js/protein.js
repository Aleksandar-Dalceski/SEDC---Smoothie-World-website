var AllProteins;
getAllProteins();
function getAllProteins() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/protein.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        AllProteins = Object.keys(data).map(function(key) {
          var newElement = {
            image: data[key].image,
            name: data[key].name
            // recipe: data[key].recipe,
            // description: data[key].description
          };
  
          return newElement;
        });
  
        drawAllProteinRecipes(AllProteins);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllProteinRecipes(arrayOfProteins) {
    arrayOfProteins.forEach(function(protein) {
      var card = createCardElement(
        protein.image,
        protein.name,
        protein.name
        // protein.recipe,
        // protein.description,
      );
  
      document.getElementById("protein").append(card);
    });
  }