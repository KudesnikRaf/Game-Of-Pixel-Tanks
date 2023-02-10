export default class Game {
        constructor({ world, view, levels }) {
            this.world = world;
            this.view = view;
            this.levels = levels;

            this.loop = this.loop.bind(this)
        }

        async init() {
            this.view.init();
        }

        start() {
            requestAnimationFrame(this.loop);
        }

        loop() {
            //getInput  
            this.world.update();
            this.view.update(this.world);
            

            requestAnimationFrame(this.loop);
        }
}