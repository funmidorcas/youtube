// Fetch API lesson
//fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")    
.then(response => {
    if(!response.ok){                                                      //incase of error handling in the link
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))

//using async await with fetch
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonname").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;   

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch (error) {
    console.log(error);
  }
}

// fetchData();