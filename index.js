//we are building the grid in javascript by declaring classes here and styling them in css //


const width = 28

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
let squares = []
let score = 0

// LAYOUT //;

//28 * 28 = 784 in our array to symbolize a square in our grid div. 
//decide what each item in the array is going to symbolize.0-4//
 //0 - pac dots
 //1- wall
 //2-ghost-lair
 //3-power-pellet
 //4-empty

// pacman grid // -------------------------------------------------/
const layout = [
    
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

// end of pacman grid // --------------------------------------------/


//create board//

function createBoard() {
    for(let i = 0; i < layout.length; i++){
        //create a square
       const square = document.createElement("div")
        //put square in grid
        grid.appendChild(square)
        //each time it loops it adds a square. 
        //put square in squares array
        squares.push(square)



        //go into the layout and grab the first item of the array //
        if (layout[i] === 0 ){
            squares[i].classList.add("pac-dot")
          
            //added all the classes of pac-dot to any element in the array that is = 0//
        }else if(layout[i] === 1 ){
            squares[i].classList.add("wall")
        } else if (layout[i] ===2 ){
            squares[i].classList.add('ghost-lair')
        }else if(layout[i] === 3){
            squares[i].classList.add("power-pellet")
        }

            
        
            
    } 
    
    
}
//use a for loop to create squares for our grid //

createBoard();

//starting position of pacman//
//pacman current index//

let pacmanCurrentIndex = 490;

squares[pacmanCurrentIndex].classList.add("pacman")

// moving pacman with the keys and eventlisteners //

//key codes are depricated//

//use switch statements //

function control(e){
    squares[pacmanCurrentIndex].classList.remove("pacman")

    switch (e.keyCode){
        case 40:
        console.log("pressed down")
        //we need to keep pacman from running into walls//
        if
        (   !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
            !squares[pacmanCurrentIndex + width].classList.contains("wall") && 
            pacmanCurrentIndex + width < width * width
            )
        pacmanCurrentIndex += width

        //implement pacmans shortcut using indexes //
        break
        case 39:
        console.log("pressed right")
        if
            (!squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
            !squares[pacmanCurrentIndex +1].classList.contains("wall") &&
            pacmanCurrentIndex % width < width - 1
            )
            pacmanCurrentIndex +=1
            if(pacmanCurrentIndex === 391){
                pacmanCurrentIndex = 364
            }
        break
        case 38:
        console.log("pressed up") 
        if(
            !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
            !squares[pacmanCurrentIndex - width].classList.contains("wall")&&
            pacmanCurrentIndex - width >=0
            )
            pacmanCurrentIndex -=width
        break
        case 37:
        console.log("pressed left")
        if (
            !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")&&
            !squares[pacmanCurrentIndex -1].classList.contains("wall") &&
            pacmanCurrentIndex % width !== 0) 
            pacmanCurrentIndex -=1
            if(pacmanCurrentIndex === 364){
                pacmanCurrentIndex = 391
            }
        break
    }
    //add pacman to its new location//
    squares[pacmanCurrentIndex].classList.add("pacman")
    pacDotEaten()
    powerPelletEaten()
    checkForWin()
    checkForGameOver()

}
  
//keep pacman from hitting the walls//

//Move left: 
//490 - 1
//as long as 490%28!==0

//Move right:
//490 +1 
//As long as 490%28 < 28-1

//503%28 is NOT smaller than 28-1 it is 27 exactly. 

//Move up:
//490-28 
//As long as: 490 - 28 >=0
//14 -28 is NOT larger than 0 we cant move up anymore. //

//move down:
//490 +28 
//As long as 490 +28<28 *28

//use classList to add and remove classes to move the pacman around the board//


document.addEventListener("keyup", control)


function pacDotEaten() {
    if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
        score ++
        scoreDisplay.innerHTML= score
    }
    
}
function powerPelletEaten(){
    // if square pacman is in contains a power pellet
    // add a score of 10
    //change each of the four ghosts to isScared
    if(squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
        squares[pacmanCurrentIndex].classList.remove("power-pellet")
        score +=10
        ghosts.forEach(ghost => ghost.isScared = true )
        //use setTimeout to unscare ghosts after 10 secs
        setTimeout(unScareGhosts, 10000)
    }
}
function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)

}
class Ghost {
    constructor(className, startIndex,speed){
        this.className = className,
        this.startIndex = startIndex,
        this.speed = speed,
        this.currentIndex = startIndex,
        this.isScared = false,
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500)
]

//draw ghosts on to the grid//


ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className )
    squares[ghost.currentIndex].classList.add("ghost")
});


//move the ghosts 
ghosts.forEach(ghost => moveGhost(ghost))


//figure out a direction where the ghosts need to go and put in an array //
//randomly generate a direction for the ghosts//


function moveGhost(ghost){
    console.log('moved ghost')
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)


    
    ghost.timerId = setInterval(function(){
        
        // use setInterval to move the ghosts at certain speeds //
        //if the next square does NOT contain a wall and does not contain a ghost
        //remove any ghost
        if (
            !squares[ghost.currentIndex + direction].classList.contains("wall") &&
            !squares[ghost.currentIndex + direction].classList.contains("ghost")
        ) {

    
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove("ghost","scared-ghost")
        //add direction to current index
        ghost.currentIndex += direction
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        }else direction = directions[Math.floor(Math.random() * directions.length)]
        //if ghost is currently scared give a new class of another color
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }

        //if pacman eats a scared ghost AND pacman is on it
        //remove classnames - ghost.className, "ghost", "scaredGhost"

        //change ghosts current index back to its start index. 
        //add a score of 20
        //re-add the className of the ghost.className and "ghost " new position//

        if(
            ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")){
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.startIndex
                score += 30
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                
            }
            checkForGameOver()
        }, ghost.speed)

}

//check for game over 

function checkForGameOver() {
    //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost.
    if (
        squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {

    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    //for each ghost- we need to stop it moving

    //remove evenlistener from our control function
    document.removeEventListener("keyup", control)
    //alert user Game is over
    scoreDisplay.innerHTML = "You LOSE"
    }



}

//check for Win

function checkForWin(){
    if(score === 238)
        {
    //stop ghosts from moving //
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener("keyup", control)

        scoreDisplay.innerHTML = "You WON!"
         }

}
