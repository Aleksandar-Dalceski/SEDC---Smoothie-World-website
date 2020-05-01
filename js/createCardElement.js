function createCardElement(imageSrc, imageAlt, name  ) {
    var card = document.createElement("div");
    card.className = "card";
  
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = imageAlt;
    imageElement.className = "card-img-top";
  
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = name;
  
    // var cardText = document.createElement("p");
    // cardText.className = "card-text";
    // cardText.innerText = description;

  
    cardBody.append(cardTitle);
    card.append(imageElement, cardBody);
  
    return card;
  }