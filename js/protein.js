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
      );
  
      document.getElementById("protein").append(card);
    });
  }
  
 var anchor = document.getElementsByTagName("a");
 anchor.onclick = function(){
   location.assign = "proteinrecipe.html";
 }