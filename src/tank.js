export default class Tank {
    direction = 0; 
    x = 67; 
    y = 396;
    animationFrame = 0;
    frames = [
        [0, 0, 27, 26],
        [27, 0, 27, 26],  
        [175, 0, 27, 26],//1
        [204, 0, 27, 26],//2
        [145, 0, 27, 26],//1
        [116, 0, 27, 26],//2
        [85, 0, 27, 26],//1
        [57, 0, 27, 26],//2
    ];

    get sprite() {
        return this.frames[this.direction * 2 + 
            this.animationFrame];
    }

    update(activeKeys){
        if (activeKeys.has('ArrowUp')) {
            this._move(0, 'y', -1);
        } else if (activeKeys.has('ArrowRight')) {
            this._move(1, 'x', 1);
        } else if (activeKeys.has('ArrowDown')) {
            this._move(2, 'y', 1);
        } else if (activeKeys.has('ArrowLeft')) {
            this._move(3, 'x', -1);
        }
    }

    _move(direction, axis, value){
        this.direction = direction;
        this[axis] += value;
        this.animationFrame ^= 1;
}

    
}