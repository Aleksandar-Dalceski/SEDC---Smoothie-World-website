var allEnergy;
getAllEnergySmoothies();
function getAllEnergySmoothies() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/energy.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        allEnergy = Object.keys(data).map(function(key) {
          var newElement = {
            name: data[key].name,
            image: data[key].image            
          };
  
          return newElement;
        });
  
        drawAllEnergyRecipes(allEnergy);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function drawAllEnergyRecipes(arrayOfEnergy) {
    arrayOfEnergy.forEach(function(energy) {
      var card = createCardElement(
        energy.image,
        energy.name,
        energy.name
      );
  
      document.getElementById("energy").append(card);
    });
  }