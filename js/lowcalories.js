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
            image: data[key].image
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
        lowCalories.name
      );
  
      document.getElementById("lowcalories").append(card);
    });
  }