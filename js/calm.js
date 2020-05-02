var AllCalm;
getAllcalm();

function getAllcalm() {

    fetch("https://raw.githubusercontent.com/Aleksandar-Dalceski/SEDC---Smoothie-World-website/master/data/calm.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            AllCalm = Object.keys(data).map(function(key) {
                var newElement = {
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    recipe: data[key].recipe,
                    description: data[key].description
                };

                return newElement;
            });
            drawAllCalmRecipes(AllCalm);

        })
        .catch(function(error) {
            console.log(error);
        });



    function drawAllCalmRecipes(arrayOfCalm) {
        arrayOfCalm.forEach(function(calm) {
            var card = document.createElement("div");
            card.className = "card";

            var imageElement = document.createElement("img");
            imageElement.src = calm.image;
            imageElement.className = "card-img-top";

            var cardBody = document.createElement("div");
            cardBody.className = "card-body";

            var cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.innerText = calm.name;

            var anchor = document.createElement("a");
            anchor.className = "btn btn-warning";

            anchor.innerText = "Show more...";
            anchor.onclick = function() {
                var jsonCalm = JSON.stringify(calm);
                localStorage.setItem("smothie", jsonCalm);
                location.assign("recipe.html")
            }
            cardBody.append(cardTitle, anchor);
            card.append(imageElement, cardBody);


            document.getElementById("calm").append(card);
        });
    }
}