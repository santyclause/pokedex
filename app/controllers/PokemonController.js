import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokemonController {
  constructor() {
    AppState.on('activePokemon', this.drawActivePokemon);
    AppState.on('pokemonList', this.drawPokemonList);
    AppState.on('user', this.drawActivePokemon);
    this.getPokemonList();
  }

  drawPokemonList() {
    const pokemonList = AppState.pokemonList;
    let listCont = '';

    pokemonList.forEach((pokemon) => {
      listCont += `
      <div onclick="app.PokemonController.selectPokemon('${pokemon.name}')" class="p-3 text-center" role="button">
        <h4>${pokemon.name}</h4>
      </div>
      `
    })

    setHTML('gen-pokemon-list', listCont);
  }

  drawActivePokemon() {
    let activePokemon = AppState.activePokemon;
    setHTML('active-pokemon', activePokemon.activeTemplate)
  }

  async selectPokemon(selectedPokemon) {
    await pokemonService.selectPokemon(selectedPokemon);
  }

  async getPokemonList() {
    try {
      await pokemonService.getPokemonList();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }
}