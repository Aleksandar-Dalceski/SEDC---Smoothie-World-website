// var AllLowCalories;
// getAllLowShugar();
// function getAllLowShugar() {
//     fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/lowcalories.json")
//       .then(function(res) {
//         return res.json();
//       })
//       .then(function(data) {
//         AllLowCalories = Object.keys(data).map(function(key) {
//           var newElement = {
//             name: data[key].name,
//             image: data[key].image
//           };

//           return newElement;
//         });

//         drawAllLowCaloriesRecipes(AllLowCalories);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//   function drawAllLowCaloriesRecipes(arrayOfLowCalories) {
//     arrayOfLowCalories.forEach(function(lowCalories) {
//       var card = createCardElement(
//         lowCalories.image,
//         lowCalories.name,
//         lowCalories.name
//       );

//       document.getElementById("lowcalories").append(card);
//     });
//   }


var AllLowcalories;
getAllLowcalories();

function getAllLowcalories() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/lowcalories.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllLowcalories = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllLowcaloriesRecipes(AllLowcalories);

        })
        .catch(function(error) {
            console.log(error);
        });
}



function drawAllLowcaloriesRecipes(arrayOfLowcalories) {
    arrayOfLowcalories.forEach(function(lowcalories) {
        var card = document.createElement("div");
        card.className = "card";

        var imageElement = document.createElement("img");
        imageElement.src = lowcalories.image;
        imageElement.className = "card-img-top";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = lowcalories.name;

        var anchor = document.createElement("a");
        anchor.className = "btn btn-warning";

        anchor.innerText = "Show more...";
        anchor.onclick = function() {
            var jsonLowcalories = JSON.stringify(lowcalories);
            localStorage.setItem("smothie", jsonLowcalories);
            location.assign("recipe.html")
        }
        cardBody.append(cardTitle, anchor);
        card.append(imageElement, cardBody);


        document.getElementById("lowcalories").append(card);
    });
}