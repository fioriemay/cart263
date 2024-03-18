class Boot extends Phaser.Scene{

    constructor(){

        super({

            key: 'boot'
        });
    }

    preload(){

        //Loading assets here

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
