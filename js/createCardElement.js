function createCardElement(imageSrc, imageAlt, name,anchorHref  ) {
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

  var anchor = document.createElement("a");
  anchor.className = "btn btn-warning";
  anchor.href = anchorHref;
  anchor.innerText = "Show more...";  

    cardBody.append(cardTitle,anchor);
    card.append(imageElement, cardBody);
  
    return card;
  }
  
 