/*

//Make Random number 1
var rand1 = Math.random() * 6;
var rand1 = Math.floor(rand1 + 1);
//Make Random Number 2
var rand2 = Math.random() * 6;
var rand2 = Math.floor(rand2 + 1);


//Replace images based on random number

function showImg1() {
    if (rand1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");

    } else if (rand1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");

    } else if (rand1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");

    } else if (rand1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");

    } else if (rand1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");

    } else {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");

    }
}

function showImg2() {
    if (rand2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");

    } else if (rand2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");

    } else if (rand2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");

    } else if (rand2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");

    } else if (rand2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");

    } else {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");

    }
}

//Display Winner

function displayWinner(rand1, rand2) {
    if (rand1 > rand2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (rand1 < rand2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else document.querySelector("h1").innerHTML = "Draw!";
}

//Call Functions
displayWinner(rand1, rand2)
showImg1(rand1);
showImg2(rand2);
*/

//The less code version using concatenation with no functions

//Player 1
var randNum1 = Math.floor(Math.random() * 6 + 1);
var randImg1 = "images/dice" + randNum1 + ".png";
//Player 2
var randNum2 = Math.floor(Math.random() * 6 + 1);
var randImg2 = "images/dice" + randNum2 + ".png";


function displayImg() {
    player1 = document.querySelectorAll("img")[0].setAttribute("src", randImg1);
    player2 = document.querySelectorAll("img")[1].setAttribute("src", randImg2);
}

function displayWinner(randNum1, randNum2) {
    if (randNum1 > randNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randNum1 < randNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else document.querySelector("h1").innerHTML = "Draw!";
}

displayImg();
displayWinner(randNum1, randNum2);