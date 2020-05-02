var smothie = localStorage.getItem("smothie");
//console.log(smothie);
var parse = JSON.parse(smothie);
//console.log(parse);
drawEachRecepie(parse)




function drawEachRecepie(data) {
    console.log(data)
    var recipe =
        `
        <div class="mt-3">
        <h3 class="pt-3 offset-2">${data.name}</h3>

        <div class="d-flex  text-justify">
            <div class="col-md-3 ml-3 mt-4">
                <h5>Recepis</h5>
                <p>${data.recipe}</p>
            </div>
            <div class="col-md-6 offset-1 mt-4">
                <h5>Preparation</h5>
                <p>${data.description}</p>
            </div>
        </div>

        </div>

        <div class="col-md-5 mt-3 text-center">
        <img src="${data.image}" class="w-100" alt="">
        </div> 
  `
    document.querySelector(".container").innerHTML = recipe;
}
