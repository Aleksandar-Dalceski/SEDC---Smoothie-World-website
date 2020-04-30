var AllCalm;
getAllcalm();
function getAllcalm() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/calm.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        AllCalm = Object.keys(data).map(function(key) {
          var newElement = {
            name: data[key].name,
            image: data[key].image,
            recipe: data[key].recipe,
            description: data[key].description
          };
  
          return newElement;
        });
  
        drawAllCalmRecipes(AllCalm);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllCalmRecipes(arrayOfCalm) {
    arrayOfCalm.forEach(function(calm) {
      var card = createCardElement(
        calm.image,
        calm.name,
        calm.recipe,
        calm.description,
      );
  
      document.getElementById("calm").append(card);
    });
  }