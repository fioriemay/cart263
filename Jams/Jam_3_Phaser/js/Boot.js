class Boot extends Phaser.Scene{

    constructor(){

        super({

            key: 'boot'
        });
    }

    preload(){

        //Loading assets here

        //i drew the bubble myself on piskel!
        this.load.image('bubble', 'assets/images/bubble.png');

        //created the sky myself in after effects
        this.load.image('sky', 'assets/images/sky.png');

        //loading the play scene
        this.load.on('complete', () =>{

            this.scene.start('play');
        })

    }

    create(){

    }

    update(){

        
    }
}
