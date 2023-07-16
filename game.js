
//PLAYER 1 

const flipPlayer1 = document.getElementById('flip1');
flipPlayer1.addEventListener('click', video);

//Variables player 1
const totalPoints = document.getElementById('total1');
const roundPoints = document.getElementById('round1');
const currentScore = document.getElementById('score1');
const picturePlayer1 = document.getElementById('pic1')



//Function makes video play and then calls scoring function after 1.5 seconds
function video(){
    whoseTurn.style.display = 'none';
    picturePlayer1.src = "./images/IMG_1218.mov";
    setTimeout(score, 1500);
}

const currentGo = document.getElementById('currentGo')

//Player 1 scoring function. Generates a random number between 1 and 200. Each number assigned to different
//score, image and message. Some have higher probability than others.
let round= 0;

function score() {
    let number = Math.ceil(Math.random() * 200);
    let scoreMessage = "";
    let imageSource = "";
    console.log(number);
    switch (number) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:    
        case 6:
        case 7:
        case 54:
        case 79:
        case 80:
        case 81:
        case 82:
        case 84:
        case 139:
        case 140:
        case 156:
        case 157:
        case 158:
        case 159:
        case 170:
        case 171:
        case 172:
        case 173:
        case 174:
        case 175:
            round++;
            scoreMessage = 'Sider! 1 point';
            imageSource = "./images/siderNoSpots.jpeg";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 138:
        case 141:
        case 160:
        case 161:
        case 162:
        case 163:
        case 176:
        case 177:
        case 178:
        case 179:
        case 180:
        case 181:
            round++;
            scoreMessage = 'Sider! 1 point';
            imageSource = "./images/siderSpots.jpeg";
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 137:
        case 142:
        case 164:
        case 165:
        case 166:
        case 182:
        case 183:
        case 184:
        case 185:
        case 186:
        case 187:
            round += 5;
            scoreMessage = 'Trotter! 5 points';
            imageSource = "./images/trotterSider.jpg";
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 136:
        case 143:
        case 167:
        case 168:
        case 169:
        case 188:
        case 189:
        case 190:
        case 191:
        case 192:
        case 193:
            round += 5;
            scoreMessage = 'Razor Back! 5 points';
            imageSource = "./images/razorBackSiderJPG.JPG";
            break;
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 135:
        case 144:
            round += 10;
            scoreMessage = 'Trotter + Razor Back! 10 points';
            imageSource = "./images/trotterRazorBackJPG.JPG";
            break;
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 134:
        case 145:
            round += 10;
            scoreMessage = 'Snouter! 10 Points';
            imageSource = "./images/snouterSider.jpeg";
            break;
        case 36:
        case 37:
        case 38:
        case 39:
        case 110:
        case 111:
        case 133:
        case 146:
            round += 15;
            scoreMessage = 'Snouter + Razor Back! 15 points';
            imageSource = "./images/snouterRazorback.jpeg";
            break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 112:
        case 113:
        case 132:
        case 147:
            round += 15;
            scoreMessage = 'Snouter + Trotter! 15 points';
            imageSource = "./images/snouterTrotter.JPG";
            break;
        case 44:
        case 45:
        case 46:
        case 47:
        case 114:
        case 115:
        case 127:
        case 148:
            round += 15;
            scoreMessage = 'Leaning Jowler! 15 points';
            imageSource = "./images/leaningJowlerSider.jpeg";
            break;
        case 48:
        case 49:
        case 50:
        case 128:
        case 149:
            round += 20;
            scoreMessage = 'Double Razor Back! 20 points';
            imageSource = "./images/doubleRazorBack.jpeg";
            break;
        case 51:
        case 52:
        case 53:
        case 129:
        case 150:
            round += 20;
            scoreMessage = 'Double Trotter! 20 points';
            imageSource = "./images/doubleTrotter.jpeg";
            break;
        case 55:
        case 56:
        case 57:
        case 130:
        case 151:
            round += 20;
            scoreMessage = 'Leaning Jowler + Razor Back! 20 points';
            imageSource = "./images/leaningJowlerRazorBackJPG.JPG";
            break;
        case 58:
        case 59:
        case 60:
        case 131:
        case 152:
            round += 20;
            scoreMessage = 'Leaning Jowler + Trotter! 20 points';
            imageSource = "./images/leaningJowlerTrotter.jpeg";
            break;
        case 61:
            round += 60;
            scoreMessage = 'Double Leaning Jowler!!! 60 points';
            imageSource = "./images/doubleLeaningJowler.jpeg";
            break;
        case 62:
        case 63:
            round += 40;
            scoreMessage = 'Double Snouter!!! 40 points';
            imageSource = "./images/doubleSnouter.jpeg";
            break;
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
        case 123:
        case 153:
        case 154:
        case 155:
        case 194:
        case 195:
        case 196:
        case 197:
        case 198:
        case 199:
        case 200:
            round = 0;
            scoreMessage = 'Pig Out!!! 0 points';
            imageSource = "./images/pigOut.jpeg";
            whoseTurn.style.display = 'block';
            arrow.src = "./images/player2.png";
            flipPlayer1.removeEventListener('click', video);
            flipPlayer2.addEventListener('click', video2);
            break;
        case 76:
        case 77:
        case 78:
        case 124:
        case 125:
        case 126:
            round = 0;
            totalPoints.innerHTML = 0;
            scoreMessage = "Oh No! Makin' Bacon! Lose all your points!!";
            imageSource = "./images/makinBacon.JPG";
            whoseTurn.style.display = 'block';
            arrow.src = "./images/player2.png";
            flipPlayer1.removeEventListener('click', video);
            flipPlayer2.addEventListener('click', video2);
            break;
    };
    console.log(round);
    currentScore.innerHTML = scoreMessage;
    picturePlayer1.src = imageSource;
    roundPoints.innerHTML = round;
}



//Player 1 stick
const stickPlayer1 = document.getElementById('stick1');
stickPlayer1.addEventListener('click', stick);
let whoseTurn = document.getElementById('playerTurn');
let arrow = document.getElementById('playerArrow');
const player1Wins = document.getElementById('winner1');

//Variable to score total points 
let totalPlayer1 = 0

//Function for 'stick' adds round score to total score. If score is over 100, you win
function stick () {
    totalPoints.innerHTML = totalPlayer1+=round;
    round = 0;
    roundPoints.innerHTML = 0;
    currentScore.innerHTML = 0;
    if (totalPlayer1>=100){
        player1Wins.style.display = 'block';
        hideAtEnd.style.display = 'none';
        currentGo.style.display = 'none';
    } else {
        whoseTurn.style.display = 'block';
        arrow.src = "./images/player2.png";
        flipPlayer1.removeEventListener('click', video);
        flipPlayer2.addEventListener('click', video2);
    }
   
}


//PLAYER 2 

//Player 2 variables
const flipPlayer2 = document.getElementById('flip2');
const totalPoints2 = document.getElementById('total2');
const roundPoints2 = document.getElementById('round2');
const picturePlayer2 = document.getElementById('pic2');
const hideAtEnd = document.getElementById('hideAtWinner')


//Function makes video play and then calls scoring function after 1.5 seconds
function video2(){
    whoseTurn.style.display = 'none';
    picturePlayer1.src = "./images/IMG_1218.mov";
    setTimeout(scorePlayer2, 1500);
}


//Player 2 scoring function. Generates a random number between 1 and 200. Each number assigned to different
//score, image and message. Some have higher probability than others.
let round2= 0;

function scorePlayer2() {
    let number2 = Math.ceil(Math.random() * 200);
    let scoreMessage = "";
    let imageSource = "";
    console.log(number2);
    switch (number2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:    
        case 6:
        case 7:
        case 54:    
        case 79:
        case 80:
        case 81:
        case 82:
        case 84:
        case 139:
        case 140:
        case 156:
        case 157:
        case 158:
        case 159:
        case 170:
        case 171:
        case 172:
        case 173:
        case 174:
        case 175:
            round2++;
            scoreMessage = 'Sider! 1 point';
            imageSource = "./images/siderNoSpots.jpeg";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 138:
        case 141:
        case 160:
        case 161:
        case 162:
        case 163:
        case 176:
        case 177:
        case 178:
        case 179:
        case 180:
        case 181:
            round2++;
            scoreMessage = 'Sider! 1 point';
            imageSource = "./images/siderSpots.jpeg";
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 137:
        case 142:
        case 164:
        case 165:
        case 166:
        case 182:
        case 183:
        case 184:
        case 185:
        case 186:
        case 187:
            round2 += 5;
            scoreMessage = 'Trotter! 5 points';
            imageSource = "./images/trotterSider.jpg";
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 136:
        case 143:
        case 167:
        case 168:
        case 169:
        case 188:
        case 189:
        case 190:
        case 191:
        case 192:
        case 193:
            round2 += 5;
            scoreMessage = 'Razor Back! 5 points';
            imageSource = "./images/razorBackSiderJPG.JPG";
            break;
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 135:
        case 144:
            round2 += 10;
            scoreMessage = 'Trotter + Razor Back! 10 points';
            imageSource = "./images/trotterRazorBackJPG.JPG";
            break;
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 134:
        case 145:
            round2 += 10;
            scoreMessage = 'Snouter! 10 Points';
            imageSource = "./images/snouterSider.jpeg";
            break;
        case 36:
        case 37:
        case 38:
        case 39:
        case 110:
        case 111:
        case 133:
        case 146:
            round2 += 15;
            scoreMessage = 'Snouter + Razor Back! 15 points';
            imageSource = "./images/snouterRazorback.jpeg";
            break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 112:
        case 113:
        case 132:
        case 147:
            round2 += 15;
            scoreMessage = 'Snouter + Trotter! 15 points';
            imageSource = "./images/snouterTrotter.JPG";
            break;
        case 44:
        case 45:
        case 46:
        case 47:
        case 114:
        case 115:
        case 127:
        case 148:
            round2 += 15;
            scoreMessage = 'Leaning Jowler! 15 points';
            imageSource = "./images/leaningJowlerSider.jpeg";
            break;
        case 48:
        case 49:
        case 50:
        case 128:
        case 149:
            round2 += 20;
            scoreMessage = 'Double Razor Back! 20 points';
            imageSource = "./images/doubleRazorBack.jpeg";
            break;
        case 51:
        case 52:
        case 53:
        case 129:
        case 150:
            round2 += 20;
            scoreMessage = 'Double Trotter! 20 points';
            imageSource = "./images/doubleTrotter.jpeg";
            break;
        case 55:
        case 56:
        case 57:
        case 130:
        case 151:
            round2 += 20;
            scoreMessage = 'Leaning Jowler + Razor Back! 20 points';
            imageSource = "./images/leaningJowlerRazorBackJPG.JPG";
            break;
        case 58:
        case 59:
        case 60:
        case 131:
        case 152:
            round2 += 20;
            scoreMessage = 'Leaning Jowler + Trotter! 20 points';
            imageSource = "./images/leaningJowlerTrotter.jpeg";
            break;
        case 61:
            round2 += 60;
            scoreMessage = 'Double Leaning Jowler!!! 60 points';
            imageSource = "./images/doubleLeaningJowler.jpeg";
            break;
        case 62:
        case 63:
            round2 += 40;
            scoreMessage = 'Double Snouter!!! 40 points';
            imageSource = "./images/doubleSnouter.jpeg";
            break;
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
        case 123:
        case 153:
        case 154:
        case 155:
        case 194:
        case 195:
        case 196:
        case 197:
        case 198:
        case 199:
        case 200:
            round2 = 0;
            scoreMessage = 'Pig Out!!! 0 points';
            imageSource = "./images/pigOut.jpeg";
            whoseTurn.style.display = 'block';
            arrow.src = "./images/player1.png";
            flipPlayer2.removeEventListener('click', video2);
            flipPlayer1.addEventListener('click', video);
            break;
        case 76:
        case 77:
        case 78:
        case 124:
        case 125:
        case 126:
            round2 = 0;
            totalPoints.innerHTML = 0;
            scoreMessage = "Oh No! Makin' Bacon! Lose all your points!!";
            imageSource = "./images/makinBacon.JPG";
            whoseTurn.style.display = 'block';
            arrow.src = "./images/player1.png";
            flipPlayer2.removeEventListener('click', video2);
            flipPlayer1.addEventListener('click', video);
            break;
    }

    currentScore.innerHTML = scoreMessage;
    picturePlayer1.src = imageSource;
    roundPoints2.innerHTML = round2;
}



const stickPlayer2 = document.getElementById('stick2');
stickPlayer2.addEventListener('click', stick2);
const player2Wins = document.getElementById('winner2');

// variable to store total points
let totalPlayer2 = 0

//Function for 'stick' adds round score to total score. If score is over 100, you win
function stick2 () {
    totalPoints2.innerHTML = totalPlayer2+=round2;
    round = 0;
    roundPoints2.innerHTML = 0;
    currentScore.innerHTML = 0;
    if (totalPlayer2>=100){
        player2Wins.style.display = 'block';
        hideAtEnd.style.display = 'none';
        currentGo.style.display = 'none';
    } else {
    whoseTurn.style.display = 'block';
    arrow.src = "./images/player1.png";
    flipPlayer2.removeEventListener('click', video2);
    flipPlayer1.addEventListener('click', video);
    }
}




// Original code was too long and difficult to edit so I changed to a switch statement.

// function score() {
//     let number = Math.floor(Math.random() * 38);
//     if (number === 1 || number === 2 || number === 3) {
//         round++;
//         currentScore.innerHTML = 'Sider! 1 point'
//         picturePlayer1.src = "./images/siderNoSpots.jpeg";
//     } else if (number === 4 || number === 5 || number === 6) {
//         round ++ ;
//         currentScore.innerHTML = 'Sider! 1 point'
//         picturePlayer1.src = "./images/siderSpots.jpeg";
//     } else if (number === 7 || number === 8 || number === 9) {
//         round += 5;
//         currentScore.innerHTML = 'Trotter! 5 points'
//         picturePlayer1.src = "./images/trotterSider.jpg";
//     } else if (number === 10 || number === 11 || number === 12) {
//         round += 5;
//         currentScore.innerHTML = 'Razor Back! 5 points'
//         picturePlayer1.src = "./images/razorBackSiderJPG.JPG";
//     } else if (number === 13 || number === 14) {
//         round += 20;
//         currentScore.innerHTML = 'Double Razor Back! 20 points'
//         picturePlayer1.src = "./images/doubleRazorBack.jpeg";
//     } else if (number === 15 || number === 16) {
//         round += 20;
//         currentScore.innerHTML = 'Double Trotter! 20 points'
//         picturePlayer1.src = "./images/doubleTrotter.jpeg";
//     } else if (number === 17 || number === 18) {
//         round += 10;
//         currentScore.innerHTML = 'Trotter + Razor Back! 10 points'
//         picturePlayer1.src = "./images/trotterRazorBackJPG.JPG";
//     } else if (number === 19 || number === 20) {
//         round += 10;
//         currentScore.innerHTML = 'Snouter! 10 Points'
//         picturePlayer1.src = "./images/snouterSider.jpeg";
//     } else if (number === 21 || number === 22) {
//         round += 15;
//         currentScore.innerHTML = 'Snouter + Razor Back! 15 points'
//         picturePlayer1.src = "./images/snouterRazorback.jpeg";
//     } else if (number === 23 || number === 24) {
//         round += 15;
//         currentScore.innerHTML = 'Snouter + Trotter! 15 points'
//         picturePlayer1.src = "./images/snouterTrotter.JPG";
//     } else if (number === 25 || number === 26) {
//         round += 15;
//         currentScore.innerHTML = 'Leaning Jowler! 15 points'
//         picturePlayer1.src = "./images/leaningJowlerSider.jpeg";
//     } else if (number === 27 || number === 28) {
//         round += 20;
//         currentScore.innerHTML = 'Leaning Jowler + Razor Back! 20 points'
//         picturePlayer1.src = "./images/leaningJowlerRazorBackJPG.JPG";
//     } else if (number === 29 || number === 30) {
//         round += 20;
//         currentScore.innerHTML = 'Leaning Jowler + Trotter! 20 points'
//         picturePlayer1.src = "./images/leaningJowlerTrotter.jpeg";
//     } else if (number === 31) {
//         round += 60;
//         currentScore.innerHTML = 'Double Leaning Jowler!!! 60 points'
//         picturePlayer1.src = "./images/doubleLeaningJowler.jpeg";
//     } else if (number === 32) {
//         round += 40;
//         currentScore.innerHTML = 'Double Snouter!!! 40 points'
//         picturePlayer1.src = "./images/doubleSnouter.jpeg";
//     } else if (number === 33 || number === 34 || number === 35) {
//         round = 0;
//         currentScore.innerHTML = 'Pig Out!!! 0 points'
//         picturePlayer1.src = "./images/pigOut.jpeg";
//         whoseTurn.style.display = 'block';
//         arrow.src = "./images/player2.png"
//         flipPlayer1.removeEventListener('click', video);
//         flipPlayer2.addEventListener('click', video2);
//     } else if (number === 36 || number === 37 || number === 38) {
//         round = 0;
//         totalPoints.innerHTML = 0;
//         currentScore.innerHTML = "Oh No! Makin' Bacon! Lose all your points!!";
//         picturePlayer1.src = "./images/makinBacon.JPG";
//         whoseTurn.style.display = 'block';
//         arrow.src = "./images/player2.png";
//         flipPlayer1.removeEventListener('click', video);
//         flipPlayer2.addEventListener('click', video2);
//     }
//     roundPoints.innerHTML = round;
// } 





// function scorePlayer2() {
//     let number2 = Math.floor(Math.random() * 38);
//     if (number2 === 1 || number2 === 2 || number2 === 3) {
//         round2++;
//         currentScore.innerHTML = 'Sider! 1 point'
//         picturePlayer1.src = "./images/siderNoSpots.jpeg";
//     } else if (number2 === 4 || number2 === 5 || number2 === 6) {
//         round2 ++ ;
//         currentScore.innerHTML = 'Sider! 1 point'
//         picturePlayer1.src = "./images/siderSpots.jpeg";
//     } else if (number2 === 7 || number2 === 8 || number2 === 9) {
//         round2 += 5;
//         currentScore.innerHTML = 'Trotter! 5 points'
//         picturePlayer1.src = "./images/trotterSider.jpg";
//     } else if (number2 === 10 || number2 === 11 || number2 === 12) {
//         round2 += 5;
//         currentScore.innerHTML = 'Razor Back! 5 points'
//         picturePlayer1.src = "./images/razorBackSiderJPG.JPG";
//     } else if (number2 === 13 || number2 === 14) {
//         round2 += 20;
//         currentScore.innerHTML = 'Double Razor Back! 20 points'
//         picturePlayer1.src = "./images/doubleRazorBack.jpeg";
//     } else if (number2 === 15 || number2 === 16) {
//         round2 += 20;
//         currentScore.innerHTML = 'Double Trotter! 20 points'
//         picturePlayer1.src = "./images/doubleTrotter.jpeg";
//     } else if (number2 === 17 || number2 === 18) {
//         round2 += 10;
//         currentScore.innerHTML = 'Trotter + Razor Back! 10 points'
//         picturePlayer1.src = "./images/trotterRazorBackJPG.JPG";
//     } else if (number2 === 19 || number2 === 20) {
//         round2 += 10;
//         currentScore.innerHTML = 'Snouter! 10 Points'
//         picturePlayer1.src = "./images/snouterSider.jpeg";
//     } else if (number2 === 21 || number2 === 22) {
//         round2 += 15;
//         currentScore.innerHTML = 'Snouter + Razor Back! 15 points'
//         picturePlayer1.src = "./images/snouterRazorback.jpeg";
//     } else if (number2 === 23 || number2 === 24) {
//         round2 += 15;
//         currentScore.innerHTML = 'Snouter + Trotter! 15 points'
//         picturePlayer1.src = "./images/snouterTrotter.JPG";
//     } else if (number2 === 25 || number2 === 26) {
//         round2 += 15;
//         currentScore.innerHTML = 'Leaning Jowler! 15 points'
//         picturePlayer1.src = "./images/leaningJowlerSider.jpeg";
//     } else if (number2 === 27 || number2 === 28) {
//         round2 += 20;
//         currentScore.innerHTML = 'Leaning Jowler + Razor Back! 20 points'
//         picturePlayer1.src = "./images/leaningJowlerRazorBackJPG.JPG";
//     } else if (number2 === 29 || number2 === 30) {
//         round2 += 20;
//         currentScore.innerHTML = 'Leaning Jowler + Trotter! 20 points'
//         picturePlayer1.src = "./images/leaningJowlerTrotter.jpeg";
//     } else if (number2 === 31) {
//         round2 += 60;
//         currentScore.innerHTML = 'Double Leaning Jowler!!! 60 points'
//         picturePlayer1.src = "./images/doubleLeaningJowler.jpeg";
//     } else if (number2 === 32) {
//         round2 += 40;
//         currentScore.innerHTML = 'Double Snouter!!! 40 points'
//         picturePlayer1.src = "./images/doubleSnouter.jpeg";
//     } else if (number2 === 33 || number2 === 34 || number2 === 35) {
//         round2 = 0;
//         currentScore.innerHTML = 'Pig Out!!! 0 points'
//         picturePlayer1.src = "./images/pigOut.jpeg";
//         whoseTurn.style.display = 'block';
//         arrow.src = "./images/player1.png"
//         flipPlayer2.removeEventListener('click', video2);
//         flipPlayer1.addEventListener('click', video);
//     } else if (number2 === 36 || number2 === 37 || number2 === 38) {
//         round2 = 0;
//         totalPoints2.innerHTML = 0;
//         currentScore.innerHTML = "Oh No! Makin' Bacon! Lose all your points!!";
//         picturePlayer1.src = "./images/makinBacon.JPG";
//         whoseTurn.style.display = 'block';
//         arrow.src = "./images/player1.png";
//         flipPlayer2.removeEventListener('click', video2);
//         flipPlayer1.addEventListener('click', video);
//     }
//     roundPoints2.innerHTML = round2;
// } 
