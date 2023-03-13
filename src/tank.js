import { Direction } from './constants.js';

export default class Tank {
    direction = Direction.UP; 
    x = 67; 
    y = 385;
    width = 27;
    height = 26;
    speed = 1;
    animationFrame = 0;
    frames = [
        [0, 0, 27, 26],
        [29, 0, 27, 26],  
        [175, 0, 27, 26],//1
        [204, 0, 27, 26],//2
        [145, 0, 27, 26],//1
        [116, 0, 27, 26],//2
        [86, 0, 27, 26],//1
        [57, 0, 27, 26],//2
    ];

    get sprite() {
        return this.frames[this.direction * 2 + 
            this.animationFrame];
    }

    update(world, activeKeys){
        if (activeKeys.has('ArrowUp')) {
            this._turn(Direction.UP);

            if (world.canMove(this)) {
                this._move('y', -1);
            }
            
        } else if (activeKeys.has('ArrowRight')) {
             this._turn(Direction.RIGTH);

            if (world.canMove(this)) {
                this._move('x', 1);
        }
        } else if (activeKeys.has('ArrowDown')) {
            this._turn(Direction.DOWN);

            if (world.canMove(this)) {
                this._move('y', 1);
        }
        } else if (activeKeys.has('ArrowLeft')) {
            this._turn(Direction.LEFT);

            if (world.canMove(this)) {
                this._move('x', -1);
        }
        }
    }

    _turn(direction) {
        this.direction = direction;
    }

         _move(axis, value){
            this[axis] += this.speed * value;
            this.animationFrame ^= 1;
    }

    
}