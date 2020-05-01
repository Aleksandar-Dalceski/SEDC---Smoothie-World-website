var allGlows;
getAllGlowProteins();
function getAllGlowProteins() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/glow.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        allGlows = Object.keys(data).map(function(key) {
          var newElement = {
            name: data[key].name,
            image: data[key].image           
          };
  
          return newElement;
        });
  
        drawAllGlowRecipes(allGlows);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllGlowRecipes(arrayOfGlow) {
    arrayOfGlow.forEach(function(glow) {
      var card = createCardElement(
        glow.image,
        glow.name,
        glow.name        
      );
  
      document.getElementById("glow").append(card);
    });
  }