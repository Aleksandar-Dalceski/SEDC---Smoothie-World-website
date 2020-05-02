var AllEnergy;
getAllenergy();

function getAllenergy() {
    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/energy.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllEnergy = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllEnergyRecipes(AllEnergy);

        })
        .catch(function(error) {
            console.log(error);
        });
}



function drawAllEnergyRecipes(arrayOfEnergy) {
    arrayOfEnergy.forEach(function(energy) {
        var card = document.createElement("div");
        card.className = "card";

        var imageElement = document.createElement("img");
        imageElement.src = energy.image;
        imageElement.className = "card-img-top";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = energy.name;

        var anchor = document.createElement("a");
        anchor.className = "btn btn-warning";

        anchor.innerText = "Show more...";
        anchor.onclick = function() {
            var jsonEnergy = JSON.stringify(energy);
            localStorage.setItem("smothie", jsonEnergy);
            location.assign("recipe.html")
        }
        cardBody.append(cardTitle, anchor);
        card.append(imageElement, cardBody);


        document.getElementById("energy").append(card);
    });
}