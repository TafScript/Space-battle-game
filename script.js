/* 
    To run this file, you will need to install Node.js (https://nodejs.org/en)
    Once installed, open up the terminal in VSCode and type: node script
*/

// wait returns a promise and can be handled with async/await
import { wait } from "./util.js";
import setup from "prompt-sync";

const prompt = setup();

// async function start() {

//     // an example of how to get started
//     let nameOfShip = prompt('What is the name of your ship? ')
//     await wait(1000)
//     console.log(`Your ship name is: ${nameOfShip}`)

//     const player = new Ship(20, 5, 0.7);
//     const testAlienShip = new AlienFleet()

//     //let isGameOver = false;
//     // increments through array elements (ships).
//     let shipCounter = 0;
//     //game continues while player ship isn't destroyed & the ship
//     //counter hasn't reached the last element of ships array.
//     while (!player.isDestroyed() && shipCounter < testAlienShip.ships.length) {
//         const currentAlienShip = testAlienShip.ships[shipCounter];
//         //player attacks first by requirement.
//         console.log("Player attacks first");
//         player.attack(currentAlienShip);

//         // checks if hull value is greater than 0 after turn.
//         if (currentAlienShip.isDestroyed()) {
//             console.log(`${currentAlienShip} defeated.`)
//             //increment counter to next array element.
//             shipCounter++;
//             continue;
//         }

//         //npc turn in loop.
//         currentAlienShip.attack(player);

//         if (!player.isDestroyed()) {
//             console.log(`${player} you won! You killed all Invaders.`)
//             break;
//         } else {
//             console.log("Game over you lost.")
//             break;
//         }

//         //while loops continues until condition met.

//     }

// }

class Ship {
  constructor(hull, firepower, accuracy, isGameOver) {
    //isGameOver) {
    Object.assign(this, { hull, firepower, accuracy, isGameOver });
  }

  attack(target) {
    if (Math.random() < this.accuracy) {
      console.log("========================")
      console.log(`Current hull integrity: ${target.hull}`)
      console.log("========================")
      target.hull -= this.firepower;
      console.log(`Damage: ${this.firepower}`)
      console.log(`Hit! Target hull integrity after damage: ${target.hull}`);

    } else {
      console.log("Miss!");
    }
  }

  //returns true or false when called for hull value condition.
  isDestroyed() {
    return this.hull <= 0;
  }

  retreatFunction() {
    console.log("You've retreated, Game Over!");
    this.isGameOver = true;
  }
}

class AlienFleet {
  //fleet size
  constructor() {
    
    this.size = 6;
    this.ships = [];
    const shipFleet = this.ships;
    for (let i = 0; i < this.size; i++) {
      const hull = Math.floor(Math.random() * 4 + 3);
      const firepower = Math.floor(Math.max(Math.random() * 5, 2));
      const accuracy = Math.random() * 0.2 + 0.6;
      this.ships.push(new Ship(hull, firepower, accuracy));
    }
    return shipFleet;
  }
}

class Game {
  constructor() {
    this.isGameOver = false;
  }

  retreatFunction() {
    this.isGameOver = true;
    console.log("Game over. You retreated.");
  }

  start() {
    // an example of how to get started
    let nameOfShip = prompt("What is the name of your ship? ");
    //await wait(1000)
    console.log(`Your ship name is: ${nameOfShip}`);

    const player = new Ship(20, 5, 0.7);
    const AlienInvasion = new AlienFleet();

    //let isGameOver = false;
    // increments through array elements (ships).
    let shipCounter = 0;
    let shipsDefeated = 0;
    //game continues while player ship isn't destroyed & the ship
    //counter hasn't reached the last element of ships array.

    console.log(AlienInvasion)
    while (!player.isDestroyed() && shipCounter < AlienInvasion.length) {
      const currentAlienShip = AlienInvasion[shipCounter];

      console.log("=== NEW TURN ===")

      //player attacks first by requirement.
      console.log("Player attacks");
      player.attack(currentAlienShip);

      // checks if ship has been destroyed, returns this.hull <= 0;
      if (currentAlienShip.isDestroyed()) {
        console.log(`Alien ship defeated.`);
        //increment counter to next array element.
        shipCounter++;
        shipsDefeated++;
        continue;
      }

      //npc turn in loop.
      console.log("alien attacks")
      currentAlienShip.attack(player);

      if (player.isDestroyed()) {
        console.log("You've been defeated: Game Over!")
        break;
      }

      if (!player.isDestroyed() && shipsDefeated === AlienInvasion.length) {
        console.log("You've won!")
        break;
      }

    

    }
  }
}

//const alien = new Ship(6, 3, 0.6);

//ussAssembly.attack(alien);
//alien.attack(ussAssembly);

//console.log(AlienFleet.shipFleet)

const game1 = new Game();
game1.start();

//console.log(testAlienShip);
