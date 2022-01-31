let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const startButton = document.getElementById("start");
let currentPlaying = true;
let numClosedDoors = 3;
// global open door variables
let openDoor1;
let openDoor2;
let openDoor3;
// global variables door path
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  // randomly generate the door that hides the ChoreBot
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    // function code
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    // function code
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    // function code
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
 }


door1.onclick = () => {
  // Function code:
  if(currentPlaying && !isClicked(doorImage1)) {
    door1.src = openDoor1;
    playDoor(door1);    
  }
}

door2.onclick = () => {
  // Function code:
  if(currentPlaying && !isClicked(doorImage2)) {
    door2.src = openDoor2;
  	playDoor(door2);  
  } 
}

door3.onclick = () => {
  // Function code:
  if(currentPlaying && !isClicked(doorImage3)) {
    door3.src = openDoor3;
  	playDoor(door3);
  } 
}

startButton.onclick = () => {
  startRound();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentPlaying = false;
}

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

// Call function 

startRound();

