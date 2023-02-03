import World from './src/world.js';
import View from './src/view.js';
import Game from './src/game.js';

const cavas = document.querySelector('canvas');

new World();
new View();
new Game({
    world: new World(),
    view: new View (cavas)
});