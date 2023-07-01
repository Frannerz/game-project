
//PLAYER 1 CONTROLS

const flipPlayer1 = document.getElementById('flip1');
flipPlayer1.addEventListener('click', video);
//flipPlayer1.addEventListener('click', score);

const totalPoints = document.getElementById('total1');
const roundPoints = document.getElementById('round1');
const currentScore = document.getElementById('score1');
const picturePlayer1 = document.getElementById('pic1')


let round= 0;
function video(){
    whoseTurn.style.display = 'none';
    picturePlayer1.src = "./images/IMG_1218.mov";
    setTimeout(score, 1500);
}

function score() {
    let number = Math.floor(Math.random() * 38);
    if (number === 1 || number === 2 || number === 3) {
        round++;
        currentScore.innerHTML = 'Sider! 1 point'
        picturePlayer1.src = "./images/siderNoSpots.jpeg";
    } else if (number === 4 || number === 5 || number === 6) {
        round ++ ;
        currentScore.innerHTML = 'Sider! 1 point'
        picturePlayer1.src = "./images/siderSpots.jpeg";
    } else if (number === 7 || number === 8 || number === 9) {
        round += 5;
        currentScore.innerHTML = 'Trotter! 5 points'
        picturePlayer1.src = "./images/trotterSider.jpg";
    } else if (number === 10 || number === 11 || number === 12) {
        round += 5;
        currentScore.innerHTML = 'Razor Back! 5 points'
        picturePlayer1.src = "./images/razorBackSiderJPG.JPG";
    } else if (number === 13 || number === 14) {
        round += 20;
        currentScore.innerHTML = 'Double Razor Back! 20 points'
        picturePlayer1.src = "./images/doubleRazorBack.jpeg";
    } else if (number === 15 || number === 16) {
        round += 20;
        currentScore.innerHTML = 'Double Trotter! 20 points'
        picturePlayer1.src = "./images/doubleTrotter.jpeg";
    } else if (number === 17 || number === 18) {
        round += 10;
        currentScore.innerHTML = 'Trotter + Razor Back! 10 points'
        picturePlayer1.src = "./images/trotterRazorBackJPG.JPG";
    } else if (number === 19 || number === 20) {
        round += 10;
        currentScore.innerHTML = 'Snouter! 10 Points'
        picturePlayer1.src = "./images/snouterSider.jpeg";
    } else if (number === 21 || number === 22) {
        round += 15;
        currentScore.innerHTML = 'Snouter + Razor Back! 15 points'
        picturePlayer1.src = "./images/snouterRazorback.jpeg";
    } else if (number === 23 || number === 24) {
        round += 15;
        currentScore.innerHTML = 'Snouter + Trotter! 15 points'
        picturePlayer1.src = "./images/snouterTrotter.JPG";
    } else if (number === 25 || number === 26) {
        round += 15;
        currentScore.innerHTML = 'Leaning Jowler! 15 points'
        picturePlayer1.src = "./images/leaningJowlerSider.jpeg";
    } else if (number === 27 || number === 28) {
        round += 20;
        currentScore.innerHTML = 'Leaning Jowler + Razor Back! 20 points'
        picturePlayer1.src = "./images/leaningJowlerRazorBackJPG.JPG";
    } else if (number === 29 || number === 30) {
        round += 20;
        currentScore.innerHTML = 'Leaning Jowler + Trotter! 20 points'
        picturePlayer1.src = "./images/leaningJowlerTrotter.jpeg";
    } else if (number === 31) {
        round += 60;
        currentScore.innerHTML = 'Double Leaning Jowler!!! 60 points'
        picturePlayer1.src = "./images/doubleLeaningJowler.jpeg";
    } else if (number === 32) {
        round += 40;
        currentScore.innerHTML = 'Double Snouter!!! 40 points'
        picturePlayer1.src = "./images/doubleSnouter.jpeg";
    } else if (number === 33 || number === 34 || number === 35) {
        round = 0;
        currentScore.innerHTML = 'Pig Out!!! 0 points'
        picturePlayer1.src = "./images/pigOut.jpeg";
        whoseTurn.style.display = 'block';
        arrow.src = "./images/player2.png"
    } else if (number === 36 || number === 37 || number === 38) {
        round = 0;
        totalPoints.innerHTML = 0;
        currentScore.innerHTML = "Oh No! Makin' Bacon! Lose all your points!!";
        picturePlayer1.src = "./images/makinBacon.JPG";
        whoseTurn.style.display = 'block';
        arrow.src = "./images/player2.png"
    }
    roundPoints.innerHTML = round;
} 


const stickPlayer1 = document.getElementById('stick1');
stickPlayer1.addEventListener('click', stick)
let whoseTurn = document.getElementById('playerTurn')
let arrow = document.getElementById('playerArrow')


let totalPlayer1 = 0

function stick () {
    totalPoints.innerHTML = totalPlayer1+=round;
    round = 0;
    roundPoints.innerHTML = 0;
    currentScore.innerHTML = 0;
    whoseTurn.style.display = 'block';
    arrow.src = "./images/player2.png";
    flipPlayer1.removeEventListener('click', video);
    flipPlayer2.addEventListener('click', video2);
}


//PLAYER 2 CONTROLS

const flipPlayer2 = document.getElementById('flip2');
//flipPlayer2.addEventListener('click', video2);


const totalPoints2 = document.getElementById('total2');
const roundPoints2 = document.getElementById('round2');
const picturePlayer2 = document.getElementById('pic2')

function video2(){
    whoseTurn.style.display = 'none';
    picturePlayer1.src = "./images/IMG_1218.mov";
    setTimeout(scorePlayer2, 1500);
}

let round2= 0;


function scorePlayer2() {
    let number2 = Math.floor(Math.random() * 38);
    if (number2 === 1 || number2 === 2 || number2 === 3) {
        round2++;
        currentScore.innerHTML = 'Sider! 1 point'
        picturePlayer1.src = "./images/siderNoSpots.jpeg";
    } else if (number2 === 4 || number2 === 5 || number2 === 6) {
        round2 ++ ;
        currentScore.innerHTML = 'Sider! 1 point'
        picturePlayer1.src = "./images/siderSpots.jpeg";
    } else if (number2 === 7 || number2 === 8 || number2 === 9) {
        round2 += 5;
        currentScore.innerHTML = 'Trotter! 5 points'
        picturePlayer1.src = "./images/trotterSider.jpg";
    } else if (number2 === 10 || number2 === 11 || number2 === 12) {
        round2 += 5;
        currentScore.innerHTML = 'Razor Back! 5 points'
        picturePlayer1.src = "./images/razorBackSiderJPG.JPG";
    } else if (number2 === 13 || number2 === 14) {
        round2 += 20;
        currentScore.innerHTML = 'Double Razor Back! 20 points'
        picturePlayer1.src = "./images/doubleRazorBack.jpeg";
    } else if (number2 === 15 || number2 === 16) {
        round2 += 20;
        currentScore.innerHTML = 'Double Trotter! 20 points'
        picturePlayer1.src = "./images/doubleTrotter.jpeg";
    } else if (number2 === 17 || number2 === 18) {
        round2 += 10;
        currentScore.innerHTML = 'Trotter + Razor Back! 10 points'
        picturePlayer1.src = "./images/trotterRazorBackJPG.JPG";
    } else if (number2 === 19 || number2 === 20) {
        round2 += 10;
        currentScore.innerHTML = 'Snouter! 10 Points'
        picturePlayer1.src = "./images/snouterSider.jpeg";
    } else if (number2 === 21 || number2 === 22) {
        round2 += 15;
        currentScore.innerHTML = 'Snouter + Razor Back! 15 points'
        picturePlayer1.src = "./images/snouterRazorback.jpeg";
    } else if (number2 === 23 || number2 === 24) {
        round2 += 15;
        currentScore.innerHTML = 'Snouter + Trotter! 15 points'
        picturePlayer1.src = "./images/snouterTrotter.JPG";
    } else if (number2 === 25 || number2 === 26) {
        round2 += 15;
        currentScore.innerHTML = 'Leaning Jowler! 15 points'
        picturePlayer1.src = "./images/leaningJowlerSider.jpeg";
    } else if (number2 === 27 || number2 === 28) {
        round2 += 20;
        currentScore.innerHTML = 'Leaning Jowler + Razor Back! 20 points'
        picturePlayer1.src = "./images/leaningJowlerRazorBackJPG.JPG";
    } else if (number2 === 29 || number2 === 30) {
        round2 += 20;
        currentScore.innerHTML = 'Leaning Jowler + Trotter! 20 points'
        picturePlayer1.src = "./images/leaningJowlerTrotter.jpeg";
    } else if (number2 === 31) {
        round2 += 60;
        currentScore.innerHTML = 'Double Leaning Jowler!!! 60 points'
        picturePlayer1.src = "./images/doubleLeaningJowler.jpeg";
    } else if (number2 === 32) {
        round2 += 40;
        currentScore.innerHTML = 'Double Snouter!!! 40 points'
        picturePlayer1.src = "./images/doubleSnouter.jpeg";
    } else if (number2 === 33 || number2 === 34 || number2 === 35) {
        round2 = 0;
        currentScore.innerHTML = 'Pig Out!!! 0 points'
        picturePlayer1.src = "./images/pigOut.jpeg";
        whoseTurn.style.display = 'block';
        arrow.src = "./images/player1.png"
    } else if (number2 === 36 || number2 === 37 || number2 === 38) {
        round2 = 0;
        totalPoints2.innerHTML = 0;
        currentScore.innerHTML = "Oh No! Makin' Bacon! Lose all your points!!";
        picturePlayer1.src = "./images/makinBacon.JPG";
        whoseTurn.style.display = 'block';
        arrow.src = "./images/player1.png"
    }
    roundPoints2.innerHTML = round2;
} 


const stickPlayer2 = document.getElementById('stick2');
stickPlayer2.addEventListener('click', stick2)


let totalPlayer2 = 0

function stick2 () {
    totalPoints2.innerHTML = totalPlayer2+=round2;
    round = 0;
    roundPoints2.innerHTML = 0;
    currentScore.innerHTML = 0;
    whoseTurn.style.display = 'block';
    arrow.src = "./images/player1.png";
    flipPlayer2.removeEventListener('click', video2);
    flipPlayer1.addEventListener('click', video);
}


/*function gameEnds (){
    if (totalPoints1 >= 10){
        window.alert("Player 1 wins! Press OK to play again!")
    } else if (totalPoints2 >=10){
        window.alert("Player 2 wins! Press OK to play again!")
    };
   totalPoints1 = 0;
    totalPoints2 = 0;
    roundPoints1 = 0;
    roundPoints2 = 0;
    currentScore = 0;
}*/