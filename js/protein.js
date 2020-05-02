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
            id:key,
            image: data[key].image,
            name: data[key].name
            
          };
  console.log(newElement)
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
        protein.name,
        "../protein.html?id=" + protein.id
      );
      
      document.getElementById("protein").append(card);
    });
  }


var anchor = document.getElementsByClassName("btn-warning");
console.log(anchor)

anchor.onclick= function(){
   location.replace("../protein.html?id=" + protein.id)
}
  
 