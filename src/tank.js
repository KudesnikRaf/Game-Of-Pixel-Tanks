export default class Tank {
    direction = 0; 
    x = 100; 
    y = 100;
    animationFrame = 0;
    frames = [
        [0, 0, 27, 26],
        [28, 0, 27, 26],  
        [175, 0, 27, 26],//1
        [204, 0, 27, 26],//2
        [145, 0, 27, 26],//1
        [116, 0, 27, 26],//2
        [85, 0, 27, 26],//1
        [55, 0, 27, 26],//2
    ];

    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    }


    
}