import { AppState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
    this.number = data.number
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.img || data.sprites.front_default
    this.backImg = data.backImg || data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health || data.stats[0].base_stat
    this.defense = data.defense || data.stats[2].base_stat
    this.attack = data.attack || data.stats[1].base_stat
    this.speed = data.speed || data.stats[5].base_stat
    this.types = data.types
  }

  get activeTemplate() {
    return `
    <div>
      <div class="d-flex justify-content-between rounded-grn">
        <h4>${this.name}</h4>
        ${this.catchButton}
      </div>
      <div class="d-flex justify-content-center">
        <img src="${this.img}" alt="${this.name} front">
        <img src="${this.backImg}" alt="${this.name} back">
      </div>
      <div class="rounded-grn">
        <div class="d-flex">
          ${this.typesTemplate}
        </div>
        <div class="d-flex justify-content-between">
          <p>Health:</p>
          <p>${this.health} hp</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Attack:</p>
          <p>${this.attack} ap</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Defense:</p>
          <p>${this.defense} dp</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Speed:</p>
          <p>${this.speed} spd</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Weight:</p>
          <p>${this.weight} hg</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Height:</p>
          <p>${this.height} dm</p>
        </div>
      </div>
    </div>
    `
  }

  get typesTemplate() {
    let typesCont = ''
    this.types.forEach(type => {
      typesCont += `
      <div class="rounded-pill bg-dark border text-center p-1">
        ${type.type.name}
      </div>
      `
    })

    return typesCont
  }

  get catchButton() {
    if (AppState.user == null) return ''

    return `<button onclick="app.SandboxPokemonController.catchPokemon()" class="btn btn-dark-outline text-light">Catch Pokemon</button>`
  }
}



/*
name: String, required
nickName: String, 
img: String, required
backImg: String, 
weight: String, 
height: String, 
health: Number, 
defense: Number, 
attack: Number, 
speed: Number, 
types: undefined, 
creatorId: SchemaObjectId, required
*creator: Object (Virtual Added by Database)
*createdAt: ISO Timestamp (Virtual Added by Database)
*updatedAt: ISO Timestamp (Virtual Added by Database)
*/