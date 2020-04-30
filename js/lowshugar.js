var AllLowShugar;
getAllLowShugar();
function getAllLowShugar() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/lowshugar.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        AllLowShugar = Object.keys(data).map(function(key) {
          var newElement = {
            name: data[key].name,
            image: data[key].image,
            recipe: data[key].recipe,
            description: data[key].description
          };
  
          return newElement;
        });
  
        drawAllLowShugarRecipes(AllLowShugar);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllLowShugarRecipes(arrayOfLowShugar) {
    arrayOfLowShugar.forEach(function(lowShugar) {
      var card = createCardElement(
        lowShugar.image,
        lowShugar.name,
        lowShugar.recipe,
        lowShugar.description,
      );
  
      document.getElementById("lowshugar").append(card);
    });
  }