// var allGlows;
// getAllGlowProteins();
// function getAllGlowProteins() {
//     fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/glow.json")
//       .then(function(res) {
//         return res.json();
//       })
//       .then(function(data) {
//         allGlows = Object.keys(data).map(function(key) {
//           var newElement = {
//             name: data[key].name,
//             image: data[key].image           
//           };

//           return newElement;
//         });

//         drawAllGlowRecipes(allGlows);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//   function drawAllGlowRecipes(arrayOfGlow) {
//     arrayOfGlow.forEach(function(glow) {
//       var card = createCardElement(
//         glow.image,
//         glow.name,
//         glow.name        
//       );

//       document.getElementById("glow").append(card);
//     });
//   }


var AllGlow;
getAllglow();

function getAllglow() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/glow.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllGlow = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllGlowRecipes(AllGlow);

        })
        .catch(function(error) {
            console.log(error);
        });
}



function drawAllGlowRecipes(arrayOfGlaw) {
    arrayOfGlaw.forEach(function(glow) {
        var card = document.createElement("div");
        card.className = "card";

        var imageElement = document.createElement("img");
        imageElement.src = glow.image;
        imageElement.className = "card-img-top";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = glow.name;

        var anchor = document.createElement("a");
        anchor.className = "btn btn-warning";

        anchor.innerText = "Show more...";
        anchor.onclick = function() {
            var jsonGlow = JSON.stringify(glow);
            localStorage.setItem("smothie", jsonGlow);
            location.assign("recipe.html")
        }
        cardBody.append(cardTitle, anchor);
        card.append(imageElement, cardBody);


        document.getElementById("glow").append(card);
    });
}