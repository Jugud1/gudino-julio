export class PokemonService {
  static async fetchPokemonData(nameOrId) {
    try {
      // Verificar si el término es un número o nombre
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon no encontrado');
      const pokemonData = await response.json();

      return {
        ...pokemonData
      };
    } catch (error) {
      console.error('Error al obtener datos del Pokémon:', error);
      throw error;
    }
  }
}