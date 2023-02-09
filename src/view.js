export default class View {
constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.sprite = sprite;
}

async init () {
    await this.sprite.load();
}

update() {

    }
}