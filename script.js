console.log("Welcome to Tic Tac Toe");
let clickAudio = new Audio('click.wav');
let gameOver = new Audio('gameover.wav');
let turn = "X";
let endGame = false;

// FUNCTION TO CHANGE TURN
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X";
}

// FUNCTION TO CHECK WIN
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let boxes = document.querySelectorAll(".box");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    // console.log(boxes);
    wins.forEach((e) => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText) !== ""){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " Won!!!";
            gameOver.play();
            endGame = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "56px";
            
            for(let i=0; i<3; i++){
                boxes[e[i]].style.backgroundColor = "violet";
            }
        }
    });

    
    if(!endGame) document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;

    let filledBoxes = 0;
    Array.from(boxtext).forEach((box) => {
        if(box.innerText !== "") filledBoxes++;
    });
    console.log(filledBoxes);
    console.log("End Game" + endGame);

    if(endGame === false && filledBoxes === 9){
        console.log("INside endgame block");
        document.querySelector('.info').innerText = "Game Tied!";
    }

}

// GAME LOGIC
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            clickAudio.play();
            checkWin();
        }
    })
});

// ADD ONCLICK LISTENER TO RESET BUTTON
let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');

    Array.from(boxes).forEach((ele) => {
        ele.style.backgroundColor = "transparent";
    });

    Array.from(boxtext).forEach((e) => {
        e.innerText = "";
    })
    turn = "X";
    endGame = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";

})

let theme = document.getElementById('icon');
let darkMode = false;
let body = document.body;
let gameContainer = document.querySelector('.gameContainer');
let nav = document.getElementsByTagName('nav');

theme.addEventListener('click', ()=>{
    if(!darkMode){
        body.classList.add('darkmode');
        gameContainer.classList.add('darkmode');
        reset.classList.add('darkmode');
        Array.from(boxes).forEach((element)=>{
            element.classList.add('darkmode');
        })
        nav[0].classList.add('darkmode');
        darkMode = !darkMode;
    }
    else{
        body.classList.remove('darkmode');
        gameContainer.classList.remove('darkmode');
        reset.classList.remove('darkmode');
        Array.from(boxes).forEach((element)=>{
            element.classList.remove('darkmode');
        });
        nav[0].classList.remove('darkmode');
        darkMode = !darkMode;
    }
})