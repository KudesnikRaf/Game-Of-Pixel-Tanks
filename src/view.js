export default class View {
    constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.sprite = sprite;
}

    async init () {
    await this.sprite.load();
}

    update(world) {
        this.renderPlayer1Tank(world.player1Tank);
    }

    renderPlayer1Tank(player1Tank) {
        this.context.drawImage(
            this.sprite.image,
            3, 6, 26, 26,
            3, 6, 26, 26
           );
    }
}