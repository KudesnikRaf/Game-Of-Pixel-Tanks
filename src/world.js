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
                        width: 32,
                        height: 32,
                        sprite: block 
                    };
                });
             });
    }
    


    update(activeKeys) {
       this.player1Tank.update(this, activeKeys);
            
        }
        
        canMove(object) {
            const {direction, x, y, width, height} = object;
            
            

            if (direction === Direction.UP){ 
                const nextY = y - 1;

                const objectOnPath = this._getObjectOnY(object, nextY);

                if (objectOnPath) {
                    this.objectOnPath = objectOnPath;
                    return false;
                 }
                if (nextY <= 0) {
                        return false;
                    } else {
                       return true;
                    }
                    
             } else if (direction === Direction.RIGTH){
                const nextX = x + 1;

                const objectOnPath = this._getObjectOnX(object, nextX);

                if (objectOnPath) {
                    this.objectOnPath = objectOnPath;
                    return false;
                 }

                if ((nextX + width) >= this.size) {
                    return false;
                } else {
                    return true;
                    }
                    
            } else if (direction === Direction.DOWN){
                const nextY = y + 1;
                
                const objectOnPath = this._getObjectOnY(object, nextY);

                if (objectOnPath) {
                    this.objectOnPath = objectOnPath;
                    return false;
                 }

                if ((nextY + height)>= this.size) {
                    return false;
                } else {
                    return true;
                    }
                    
            } else if (direction === Direction.LEFT){
                const nextX = x - 1;
                
                const objectOnPath = this._getObjectOnX(object, nextX);

                if (objectOnPath) {
                    this.objectOnPath = objectOnPath;
                    return false;
                 }

                if (nextX <= 0) {
                    return false;
                } else {
                    return true;
                    }
                    
            }
             
      }
        _getObjectOnX(object, nextX) {
    
            return this.level
            .reduce((result, blocks) => result.concat(...blocks), [])
            .find(block => 
                block.sprite > 0 &&
                (
                    isSame(object.y, block.y) ||
                    isBetween(object.y, block.y, block.y + block.height) ||
                    isBetween(object.y + object.height, block.y, block.y + block.height)
                )
                &&
                (
                    isSame(nextX, block.x) ||
                    isBetween(nextX, block.x + block.width) ||
                    isBetween(nextX + object.width, block.x, block.x + block.width)
                )
                //?????????????? ??????????
            );
      }

      _getObjectOnY(object, nextY) {

            return this.level
        .reduce((result, blocks) => result.concat(...blocks), [])
        .find(block => 
            block.sprite > 0 &&
            (
                isSame(nextY, block.y) ||
                isBetween(nextY, block.y, block.y + block.height) ||
                isBetween(nextY + object.height, block.y, block.y + block.height)
            )
            &&
            (
                isSame(object.x, block.x) ||
                isBetween(object.x, block.x + block.width) ||
                isBetween(object.x + object.width, block.x, block.x + block.width)
            )
            //?????????????? ??????????
        );
  }
      
}

function isBetween(p, p1, p2) {
    return p > p1 && p > p2;
}

function isSame(p1, p2) {
    return p1 === p2;
}