import { CELL_SIZE, Direction } from './constants.js'
import Tank from './Tank.js';



export default class World {
    level = null;
    player1Tank = new Tank(); 
    player2Tank = null;
    enemyTanks = [];
    
    get size() {
       return this.level[0].length * CELL_SIZE;
    }

    setLevel(data) {
            this.level = data.map((blocks, y) => {
                return blocks.map((block, x) => {
                    return {
                        x: x * CELL_SIZE,
                        y: y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        sprite: block 
                    };
                });
             });
    }
    


    update(activeKeys) {
       this.player1Tank.update(this, activeKeys);
            
        }
        
        canMove(object) {
            const {direction, x, y, width, height, speed} = object;
                
                if (direction === Direction.UP){ 
                    const nextY = y - speed;

                    const objectOnPath = this.level
                    .reduce((result, blocks) => result.concat(...blocks), [])
                    .find(block => 
                        block.sprite > 0 &&
                            nextY <= (block.y + block.height) && 
                            (
                                object.x > block.x &&
                                (object.x < block.x + block.width)
                            )
                            //вынести метод
                        );
                    
            if (objectOnPath) {
                this.objectOnPath = objectOnPath;
            }

                if (objectOnPath || nextY <= 0) {
                        return false;
                    } else {
                       return true;
                    }
             } else if (direction === Direction.RIGTH){
                const nextX = x + width + speed;

                if (nextX >= this.size) {
                    return false;
                } else {
                    return true;
                    }
                    
            } else if (direction === Direction.DOWN){
                const nextY = y + height + speed;

                if (nextY >= this.size) {
                    return false;
                } else {
                    return true;
                    }
                    
            } else if (direction === Direction.LEFT){
                const nextX = x + speed;
                
                if (nextX <= 0) {
                    return false;
                } else {
                    return true;
                    }
                    
            }
             
      }
}
