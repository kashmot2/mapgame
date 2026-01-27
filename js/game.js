// MapGame - Phaser 3 Setup
// This will load LDtk maps once Alex creates them!

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#2d2d44',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let cursors;
let mapLoaded = false;

function preload() {
    // Will load map and tileset here once Alex creates them
    console.log('🗺️ MapGame ready! Waiting for maps from Alex...');
}

function create() {
    // Placeholder player (will be positioned by map later)
    player = this.add.rectangle(400, 300, 32, 48, 0x4ecdc4);
    this.physics.add.existing(player);
    player.body.setCollideWorldBounds(true);
    
    // Controls
    cursors = this.input.keyboard.createCursorKeys();
    
    // Instructions
    this.add.text(400, 50, '🗺️ MapGame', { 
        fontSize: '32px', 
        fill: '#fff' 
    }).setOrigin(0.5);
    
    this.add.text(400, 550, 'Arrow keys to move | Waiting for Alex\'s maps!', { 
        fontSize: '16px', 
        fill: '#888' 
    }).setOrigin(0.5);
}

function update() {
    // Basic movement
    if (cursors.left.isDown) {
        player.body.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.body.setVelocityX(200);
    } else {
        player.body.setVelocityX(0);
    }
    
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.setVelocityY(-400);
    }
}

// Start the game
const game = new Phaser.Game(config);
console.log('🎮 Game initialized! Add maps to /maps folder.');
