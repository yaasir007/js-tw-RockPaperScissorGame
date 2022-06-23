const arr = ["rock", "paper", "scissors"];
const checklength = arr.length;
const computer = arr[Math.floor(Math.random()*checklength)];

//get the buttons and paragraph
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const tryagain = document.getElementById("tryagain");
const resultdiv = document.getElementById("resultdiv");
    
rock.addEventListener("click", () => {
    switch(computer) {
        case "paper":
            result.innerHTML = "You Won";
            resultdiv.style.backgroundColor = "#04aa6d";
            break;
        case "scissors":
            result.innerHTML = "You Lost against the Computer";
            resultdiv.style.backgroundColor = "#e84855";
            break;
        default:
            result.innerHTML = "It is a tied";
            resultdiv.style.backgroundColor = "#e84855";
    }
});

paper.addEventListener("click", () => {
    switch(computer) {
        case "rock":
            result.innerHTML = "You Won";
            resultdiv.style.backgroundColor = "#04aa6d";
            break;
        case "scissors":
            result.innerHTML = "You Lost against the Computer";
            resultdiv.style.backgroundColor = "#e84855";
            break;
        default:
            result.innerHTML = "It is a tied";
            resultdiv.style.backgroundColor = "#e84855";
    }
});

scissors.addEventListener("click", () => {
    switch(computer) {
        case "paper":
            result.innerHTML = "You Won";
            resultdiv.style.backgroundColor = "#04aa6d";
            break;
        case "rock":
            result.innerHTML = "You Lost against the Computer";
            resultdiv.style.backgroundColor = "#e84855";
            break;
        default:
            result.innerHTML = "It is a tied";
            resultdiv.style.backgroundColor = "#e84855";
    }
});

tryagain.addEventListener("click", () => {
    result.innerHTML = "";
    resultdiv.style.backgroundColor = "#10b981";
});
