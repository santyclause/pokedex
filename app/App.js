import { AuthController } from './controllers/AuthController.js';
import { PokemonController } from './controllers/PokemonController.js';
import { SandboxPokemonController } from './controllers/SandboxPokemonController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  PokemonController = new PokemonController()
  SandboxPokemonController = new SandboxPokemonController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
