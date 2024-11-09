export const htmlElements = {
    searchButton: document.getElementById('search-button'),
    clearButton: document.getElementById('clear-button'),
    buttonContainer: document.querySelector('.button-container'),
    pokemonInfo: document.getElementById('pokemon-info'),
    searchInput: document.getElementById('pokemon-name')
  };
  
  export const uiHandlers = {
    displayPokemon(pokemon) {
        htmlElements.pokemonInfo.innerHTML = pokemon.getHTMLRepresentation();
        htmlElements.pokemonInfo.style.display = 'block';
        htmlElements.clearButton.style.display = 'inline';
        htmlElements.buttonContainer.classList.add('space-between');
    },
  
    displayError() {
        htmlElements.pokemonInfo.innerHTML = '<p>Pokémon no encontrado.</p>';
        htmlElements.pokemonInfo.style.display = 'block';
    },
  
    clearSearch() {
        htmlElements.searchInput.value = '';
        htmlElements.pokemonInfo.innerHTML = '';
        htmlElements.pokemonInfo.style.display = 'none';
        htmlElements.clearButton.style.display = 'none';
        htmlElements.buttonContainer.classList.remove('space-between');
    }
  };
  
  