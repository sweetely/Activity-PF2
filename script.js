const words = [
    "rose", "lily", "daisy", "tulip", "orchid", "sunflower", "lavender", "jasmine", "violet", 
    "cherry blossom", "magnolia", "carnation", "hibiscus", "daffodil", "geranium"
];

let secretWord = "";
let attemptsLeft = 5;

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    document.getElementById("hint").textContent = "The word starts with: " + secretWord[0].toUpperCase();
    document.getElementById("message").textContent = "";
    document.body.style.backgroundColor = "#ffe4f3";
    document.getElementById("guessInput").value = "";
    document.getElementById("restart").style.display = "none";
    attemptsLeft = 5;
}

function submitGuess() {
    let guess = document.getElementById("guessInput").value.trim().toLowerCase();

    if (guess === "") {
        document.getElementById("message").textContent = "Please enter a valid word.";
        return;
    }

    if (guess === secretWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the secret word!";
        document.getElementById("message").style.color = "green";
        document.body.style.backgroundColor = "#d4edda";
        document.getElementById("restart").style.display = "block";
        return;
    }

    attemptsLeft--;
    if (attemptsLeft > 0) {
        document.getElementById("message").textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").textContent = `Game over! The secret word was '${secretWord}'.`;
        document.getElementById("message").style.color = "red";
        document.body.style.backgroundColor = "#f8d7da";
        document.getElementById("restart").style.display = "block";
    }

    document.getElementById("guessInput").value = "";
}

function restartGame() {
    startGame();
}

window.onload = startGame;

document.getElementById("guessInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});
