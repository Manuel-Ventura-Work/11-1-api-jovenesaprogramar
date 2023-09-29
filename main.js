


function callpoke() {
  const pokemonid = document.getElementById("idpoke").value; 
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonid}/`;

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    const pokearray = data
    let content = `<img src="${pokearray.sprites.front_default}"></img>`;
    document.getElementById("pokecontainer").innerHTML = content
  })
  
  .catch((error) => {
    console.error("error:", error);
  });

};
