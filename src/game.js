export default class Game {
        constructor({ world, view, levels }) {
            this.world = world;
            this.view = view;
            this.levels = levels;
            this.activeKeys = new Set();
            this.isMoving = false;
            this.loop = this.loop.bind(this);
        }

        async init() {
            this.view.init();

            document.addEventListener('keydown', ({ code }) => {
               event.preventDefault();
                switch (event.code) {
                    case 'ArrowUp':
                    case 'ArrowRight':
                    case 'ArrowDown':
                    case 'ArrowLeft': 
                    case 'Space':    
                    case 'Enter':
                        this.activeKeys.add(event.code);
                     
                }
                this.key = event.code;
            });

            document.addEventListener('keyup', ({ code }) => {
                event.preventDefault();
                 switch (event.code) {
                    case 'ArrowUp':
                        case 'ArrowRight':
                        case 'ArrowDown':
                        case 'ArrowLeft': 
                     case 'Space':    
                     case 'Enter':
                        this.activeKeys.delete(event.code);
                 }
                 this.key = '';
             });
             console.log(code);
        }

        start() {
            requestAnimationFrame(this.loop);
        }

        loop() {
            //getInput  
            this.world.update(this.activeKeys);
            this.view.update(this.world);
            

            requestAnimationFrame(this.loop);
        }
}