var AllLowCalories;
getAllLowShugar();
function getAllLowShugar() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/lowcalories.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        AllLowCalories = Object.keys(data).map(function(key) {
          var newElement = {
            name: data[key].name,
            image: data[key].image,
            recipe: data[key].recipe,
            description: data[key].description
          };
  
          return newElement;
        });
  
        drawAllLowCaloriesRecipes(AllLowCalories);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllLowCaloriesRecipes(arrayOfLowCalories) {
    arrayOfLowCalories.forEach(function(lowCalories) {
      var card = createCardElement(
        lowCalories.image,
        lowCalories.name,
        lowCalories.recipe,
        lowCalories.description,
      );
  
      document.getElementById("lowcalories").append(card);
    });
  }