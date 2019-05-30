// create a variable for a button
let button = document.querySelector('.button');
// console.log(button);

// call API on click on the button 

button.addEventListener("click", function() {
    // configure api request
    let xhr = new XMLHttpRequest();
    let body = document.querySelector('body');

    // get the API data 
    xhr.open(
        "GET",
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*151)}/`,
        true
    );

    xhr.onload = function() {
        let pokeData = JSON.parse(xhr.responseText);
        console.log(pokeData);
        loaded(pokeData);
    }

    xhr.send();
});


function loaded(pokeData) {
    // name
    let name = document.querySelector('.name');
    name.innerHTML = pokeData.species.name;

    // type
    let type = document.querySelector('.type');
    let typeName = pokeData.types['0'].type.name;
    type.innerHTML = `Type: ${typeName} pokemon`;

    // images

    document.querySelector('.image1').src = pokeData.sprites.front_default;
    document.querySelector('.image2').src = pokeData.sprites.back_default;
    document.querySelector('.image3').src = pokeData.sprites.front_shiny;
    document.querySelector('.image4').src = pokeData.sprites.back_shiny;

    // background images

    switch(typeName) {
        case "fire":
            document.body.style.background = "red";
            document.body.style.color = "white";
            break;
        case "water":
            document.body.style.background = "blue";
            document.body.style.color = "white";
            break;
        case "flying":
            document.body.style.background = "orange";
            document.body.style.color = "white";
            break;
        case "poison":
            document.body.style.background = "black";
            document.body.style.color = "white";
            break;
        case "bug":
            document.body.style.background = "green";
            document.body.style.color = "white";
            break;
        case "fairy":
            document.body.style.background = "#6A5ACD";
            document.body.style.color = "white";
            break;
        case "normal":
            document.body.style.background = "#E6E6FA";
            document.body.style.color = "#696969";
            break;
        case "ground":
            document.body.style.background = "#2F4F4F";
            document.body.style.color = "white";
            break;
        case "psychic":
            document.body.style.background = "#008080";
            document.body.style.color = "white";
            break;
        case "electric":
            document.body.style.background = "#FFFF00";
            document.body.style.color = "#696969";
            break;
        case "steel":
            document.body.style.background = "#C0C0C0";
            document.body.style.color = "black";
            break;
        case "fighting":
            document.body.style.background = "#A52A2A";
            document.body.style.color = "white";
            break;
        case "ice":
            document.body.style.background = "#ADD8E6";
            document.body.style.color = "#696969";
            break;
        case "rock":
            document.body.style.background = "#2F4F4F";
            document.body.style.color = "white";
            break;
        case "grass":
            document.body.style.background = "#20B2AA";
            document.body.style.color = "white";
            break;
        case "dragon":
            document.body.style.background = "#800000";
            document.body.style.color = "white";
            break;
    }
}



