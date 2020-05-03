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
                    description: data[key].description,
                    image2:data[key].image2                    
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