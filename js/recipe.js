var smothie = localStorage.getItem("smothie");
//console.log(smothie);
var parse = JSON.parse(smothie);
//console.log(parse);
drawEachRecepie(parse)





function drawEachRecepie(data) {
    console.log(data)
    var recipe = `
<div class="card" style="width: 60% ">
    <img src="${data.image}" class="card-img-top" alt="image">
    <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.recipe}</p>
    <p class="card-text" style="color: orange;">${data.description}</p>
     </div>
</div>
    `


    document.querySelector(".container-fluid").innerHTML = recipe;
}