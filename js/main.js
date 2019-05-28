// configure api request
let xhr = new XMLHttpRequest();
// get the API data 
xhr.open(
  "GET",
  `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 151)}`,
  true
);
console.log();

xhr.onload = function() {
    let pokeData = JSON.parse(xhr.responseText);
    console.log(pokeData);
    loaded(pokeData);
}

xhr.send();

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
}

