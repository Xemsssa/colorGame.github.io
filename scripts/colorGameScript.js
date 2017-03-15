/**
 * Created by xemss on 15.03.2017.
 */

// alert("connect");
// var color = Math.ceil(Math.random(0, 255));

// number of box
var numberOfBox = 6;

// get colors for boxes
// var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"];
var colors = generateRandomColors(numberOfBox);

// alert(colors);
// var box = document.querySelector(".box");
// box.style.background = "red";

// select all boxes
var boxes = document.querySelectorAll(".box");
var goalColor = document.getElementById('goalColor');
// var randomColor = colors[1];
var randomColor = getRandomColor();
var comment = document.getElementById("comment");
var length = boxes.length;

goalColor.textContent = randomColor;

for (var i = 0; i < length; i++) {
    // boxes[i].style.backgroundColor = "blue";
    boxes[i].style.backgroundColor = colors[i];

    boxes[i].addEventListener('click', function () {
        // alert("click");
        // alert(this.style.backgroundColor);

        if (this.style.backgroundColor == randomColor) {
            // alert("Gotcha");
            comment.textContent = "Gotcha!";

            changeColors();
        } else  {
            // this.style.display = "none";
            this.style.backgroundColor = "#2d2d30";
            // this.style.display = "hidden";
            comment.textContent = "Try again :)";

        }
    })
}

// show user winner color
function changeColors() {
    for (var i = 0; i < length; i++) {
        boxes[i].style.backgroundColor = randomColor;
    }
}

// get radom color witch need to find
function getRandomColor() {
    // var color = Math.ceil(Math.random(0, 255));
    // alert(length);
    var color = Math.floor(Math.random() * boxes.length);
    // alert(color);
    return colors[color];
}

function generateRandomColors(num) {
    var array = [];

    for (var i = 0; i <=  num; i++) {
        //
        // var red = Math.floor(Math.random() * 256);
        // var green = Math.floor(Math.random() * 256);
        // var blue = Math.floor(Math.random() * 256);

        // array.push( "rgb(" + red + ", " + green + ", " + blue + ")");
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

