// var AllProteins;
// getAllProteins();
// function getAllProteins() {
//     fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/protein.json")
//       .then(function(res) {
//         return res.json();
//       })
//       .then(function(data) {
//         AllProteins = Object.keys(data).map(function(key) {
//           var newElement = {
//             id:key,
//             image: data[key].image,
//             name: data[key].name

//           };
//   console.log(newElement)
//           return newElement;


//         });

//         drawAllProteinRecipes(AllProteins);

//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//   function drawAllProteinRecipes(arrayOfProteins) {
//     arrayOfProteins.forEach(function(protein) {
//       var card = createCardElement(
//         protein.image,
//         protein.name,
//         protein.name,
//         "../protein.html?id=" + protein.id
//       );

//       document.getElementById("protein").append(card);
//     });
//   }


// var anchor = document.getElementsByClassName("btn-warning");
// console.log(anchor)

// anchor.onclick= function(){
//    location.replace("../protein.html?id=" + protein.id)
// }

var AllProtein;
getAllProtein();

function getAllProtein() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/protein.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllProtein = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllProteinRecipes(AllProtein);

        })
        .catch(function(error) {
            console.log(error);
        });
}



function drawAllProteinRecipes(arrayOfProtein) {
    arrayOfProtein.forEach(function(protein) {
        var card = document.createElement("div");
        card.className = "card";

        var imageElement = document.createElement("img");
        imageElement.src = protein.image;
        imageElement.className = "card-img-top";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = protein.name;

        var anchor = document.createElement("a");
        anchor.className = "btn btn-warning";

        anchor.innerText = "Show more...";
        anchor.onclick = function() {
            var jsonProtein = JSON.stringify(protein);
            localStorage.setItem("smothie", jsonProtein);
            location.assign("recipe.html")
        }
        cardBody.append(cardTitle, anchor);
        card.append(imageElement, cardBody);


        document.getElementById("protein").append(card);
    });
}