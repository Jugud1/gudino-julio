import { htmlElements, uiHandlers } from './ui.js';
import { PokemonService } from './pokemonService.js';
import { Pokemon } from './pokemon.js';

const init = () => {
  bindEvents();
};

const bindEvents = () => {
  htmlElements.searchButton.addEventListener('click', handlers.searchPokemon);
  htmlElements.clearButton.addEventListener('click', uiHandlers.clearSearch);
};

const handlers = {
  searchPokemon: async (event) => {
    event.preventDefault();
    const searchTerm = htmlElements.searchInput.value.trim();
    if (!searchTerm) return;

    try {
      // Verificar si el término es un número o nombre
      const pokemonData = await PokemonService.fetchPokemonData(searchTerm);
      const pokemon = new Pokemon(
        pokemonData.name,
        pokemonData.id,
        pokemonData.sprites.front_default,
        pokemonData.weight,
        pokemonData.height
      );
      uiHandlers.displayPokemon(pokemon);
    } catch (error) {
      if (error.message === 'Pokémon no encontrado') {
        uiHandlers.displayError();
      } else {
        uiHandlers.displayError();
      }
    }
  }
};

// Llamada a la función de inicialización
init();