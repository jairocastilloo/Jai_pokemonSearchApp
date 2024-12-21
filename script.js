const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const imgDiv = document.querySelector(".imageDiv");
searchButton.addEventListener("click", () => {
  if (searchInput.value != "") {
    fetchData(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`
    );
  }
});

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    showPokemon(data);
  } catch (err) {
    alert("Pokemon not found");
  }
};
const showPokemon = (data) => {
  reset();
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;
  weight.textContent = `Weight: ${data.weight}`;
  height.textContent = `Height: ${data.height}`;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  imgDiv.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" class="img-fluid"/>`;
  const typesArr = data.types;
  typesArr.forEach((data) => {
    console.log("sadas");
    types.innerHTML += `<p>${data.type.name.toUpperCase()}</p>`;
  });
};
const reset = () => {
  pokemonId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  imgDiv.innerHTML = "";
  types.innerHTML = "";
};
