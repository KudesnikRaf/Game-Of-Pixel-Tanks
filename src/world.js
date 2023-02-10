import Tank from './Tank.js';

export default class World {

    grid = [];
    player1Tank = new Tank(); 
    player2Tank = null;
    enemyTanks = [];

    update(activeKeys) {
       
            if (activeKeys.has('ArrowUp')) {
                this.player1Tank.y -= 1
            } else if (activeKeys.has('ArrowDown')) {this.player1Tank.y +=1}
            else if (activeKeys.has('ArrowRight')) {this.player1Tank.x +=1}
            else if (activeKeys.has('ArrowLeft')) {this.player1Tank.x -=1}

         }

    
}
