
function addRandomImage () {
fetch("https://dog.ceo/api/breeds/image/random")
.then(function (response) {
  return response.json();
})
.then(function (imageObject) {


    
    let divWithImage = document.getElementById("ulWithImg");
    divWithImage.innerHTML = "";
    let image = document.createElement("img");
    image.src = imageObject.message;
    divWithImage.appendChild(image);
});
}






let button = document.getElementById("ourButton");
let buttonCreate = document.createElement("button");
buttonCreate.innerText = "Change Picture";
button.appendChild(buttonCreate);
button.addEventListener("click", addRandomImage);


window.onload = addRandomImage;