var smothie = localStorage.getItem("smothie");
//console.log(smothie);
var parse = JSON.parse(smothie);
//console.log(parse);
drawEachRecepie(parse)





function drawEachRecepie(data) {
    console.log(data)
    var recipe = `
<div class="card" style="width: 55% ">
    <img src="${data.image}" class="card-img-top" alt="image">
    <div class="card-body">
    <h1 class="card-title">${data.name}</h1>
    <p class="card-text" style= "font-weight:bold;">${data.recipe}</p>
    <p class="card-text" style="color: orange;">${data.description}</p>
    <img src="${data.image2}" class="card-img-top" alt="image">
    </div>

    
</div>
    `
    document.querySelector(".container-fluid").innerHTML = recipe;
}