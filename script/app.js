heading.innerHTML = 'SALAM DONYA'

let xOldLocation = defaultXLocation;
let yOldLocation = defaultYLocation;

myBall.style.left = defaultXLocation + 'px';
myBall.style.bottom = defaultYLocation + 'px';


function moveBall(direction) {
    let xMovement = xOldLocation;
    let yMovement = yOldLocation;
    if (direction == 'left') {
        xMovement = xOldLocation - steps;
    } else if (direction == 'right') {
        xMovement = xOldLocation + steps;
    } else if (direction == 'up') {
        yMovement = yOldLocation + steps;
    } else if (direction == 'down') {
        yMovement = yOldLocation - steps;
    }
    if (xMovement < 600) {
        myBall.style.left = xMovement + 'px';
        xOldLocation = xMovement;
    } else {
        console.log('X-Out of game board!')
    }
    if (yMovement < 300) {
        myBall.style.bottom = yMovement + 'px';
        yOldLocation = yMovement;
    } else {
        console.log('Y-Out of game board!')

    }
    console.log('XOL:' + xOldLocation + ' | YOL:' + yOldLocation);
    console.log('XMove:' + xMovement + ' | YMove:' + yMovement);
}