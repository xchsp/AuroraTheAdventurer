/* eslint-disable no-undef */
import 'phaser';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Menu from './scenes/title';
import Game from './scenes/game';
import Leader from './scenes/leaderboard';
import './assets/style.scss';
import Data from './data';

const parent = document.createElement('div');
parent.setAttribute('id', 'parentId');
parent.classList = 'parent';

const config = {
  type: Phaser.AUTO,
  parent: 'parentId',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
  },
};

class TheAdventurer extends Phaser.Game {
  constructor() {
    super(config);
    const myData = new Data();
    this.globals = { myData };
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Menu', Menu);
    this.scene.add('Game', Game);
    this.scene.add('LeaderBoard', Leader);
    this.scene.start('Boot');
  }
}

// eslint-disable-next-line no-unused-vars
const game = new TheAdventurer();
document.body.appendChild(parent);