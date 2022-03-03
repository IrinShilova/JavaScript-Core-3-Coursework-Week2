function getImage (num) {                                                             
    fetch(`https://xkcd.now.sh/?comic=${num}`)
    .then(function (response) {
    return response.json();
    })
    .then(function (imageObject) {

        // adding image
    let someImage = document.getElementById("someImage");
    someImage.innerHTML = "";
    let image = document.createElement("img");
    image.src = imageObject.img;
    someImage.appendChild(image);

        //adding description 
    let imageDescription = document.getElementById("someText");
    imageDescription.innerHTML = "";
    let imageDescriptionText = document.createElement("p");
    imageDescriptionText.innerText = imageObject.title;
    imageDescription.appendChild(imageDescriptionText);

        // adding console.log 
    console.log(`alt is: ${imageObject.alt}`);
    }
    ) 
    .catch((err) => alert(err));
}

window.onload = getImage("latest");

