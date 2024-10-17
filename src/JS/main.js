import { dogsObCreator } from './module/generateMap.js'; 
import { moveRoster } from './module/moveRoster.js';
 
const ball = document.getElementById('roster'); 
const map = document.getElementById('map'); 
let position = { x: 0, y: 0 }; 
 
document.addEventListener('keydown', (e) => moveRoster(e, ball, position));
 
dogsObCreator(map, 50)