import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js";

class PokemonService {

  async selectPokemon(selectedPokemon) {
    const response = await pokeApi.get(`api/v2/pokemon/${selectedPokemon}`);
    const newPokemon = new Pokemon(response.data);

    AppState.activePokemon = newPokemon;
  }

  async getPokemonList() {
    const response = await pokeApi.get('api/v2/pokemon?limit=2000');

    AppState.pokemonList = response.data.results;
    this.selectPokemon('bulbasaur');
  }
}

export const pokemonService = new PokemonService();