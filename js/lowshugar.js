var AllLowshugar;
getAllLowshugar();

function getAllLowshugar() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/lowshugar.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllLowshugar = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllLowshugarRecipes(AllLowshugar);

        })
        .catch(function(error) {
            console.log(error);
        });
}



function drawAllLowshugarRecipes(arrayOfLowshugar) {
    arrayOfLowshugar.forEach(function(lowshugar) {
        var card = document.createElement("div");
        card.className = "card";

        var imageElement = document.createElement("img");
        imageElement.src = lowshugar.image;
        imageElement.className = "card-img-top";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = lowshugar.name;

        var anchor = document.createElement("a");
        anchor.className = "btn btn-warning";

        anchor.innerText = "Show more...";
        anchor.onclick = function() {
            var jsonLowshugar = JSON.stringify(lowshugar);
            localStorage.setItem("smothie", jsonLowshugar);
            location.assign("recipe.html")
        }
        cardBody.append(cardTitle, anchor);
        card.append(imageElement, cardBody);


        document.getElementById("lowshugar").append(card);
    });
}