/**
 * Created by xemss on 15.03.2017.
 */

// alert("connect");

// number of box
var numberOfBox = 6;

// select all boxes
var boxes = document.querySelectorAll(".box");
var length = boxes.length;
var colors = generateRandomColors(numberOfBox);
var goalColor = document.getElementById('goalColor');
var randomColor = getRandomColor();
var comment = document.getElementById("comment");
var header = document.getElementById('header');

goalColor.textContent = randomColor;

var newGame = document.getElementById("newGame");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.onclick = function () {
    numberOfBox = 3;
    hard.classList.remove("active");
    easy.classList.add("active");

    colors = generateRandomColors(numberOfBox);

    randomColor = getRandomColor();
    goalColor.textContent = randomColor;

    // use numberOfBox or length
    for (var i = 0; i < length ; i++) {

        if(colors[i]) {
            boxes[i].style.background = colors[i];
        }
        else {
            boxes[i].style.display = "none";
        }

    }

};

hard.addEventListener("click", function () {
    // length = 6;

    easy.classList.remove("active");
    hard.classList.add("active");

    colors = generateRandomColors(numberOfBox);

    randomColor = getRandomColor();
    goalColor.textContent = randomColor;

    for (var i = 0; i < length ; i++) {
            boxes[i].style.background = colors[i];
            boxes[i].style.display = "inline-block";
    }

    setBoxesWithColor();
});

newGame.addEventListener('click', function () {
    colors = generateRandomColors(numberOfBox);
    randomColor = getRandomColor();
    goalColor.textContent = randomColor;

    setBoxesWithColor(length);
});

setBoxesWithColor();

function setBoxesWithColor() {
    for (var i = 0; i < length; i++) {
        boxes[i].style.backgroundColor = colors[i];

        boxes[i].addEventListener('click', function () {

            if (this.style.backgroundColor == randomColor) {
                comment.textContent = "Gotcha!";

                changeColors();
                header.style.backgroundColor = randomColor;
            } else {
                this.style.backgroundColor = "#2d2d30";
                comment.textContent = "Try again :)";

            }
        })
    }
}

// show user winner color
function changeColors() {
    for (var i = 0; i < length; i++) {
        boxes[i].style.background = randomColor;
    }
}

// get random color witch need to find
function getRandomColor() {
    var color = Math.floor(Math.random() * boxes.length);

    return colors[color];
}

function generateRandomColors(num) {
    var array = [];

    for (var i = 0; i <  num; i++) {
        array.push(generateRandomColor());
    }

    return array;
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

