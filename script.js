function showMessage() {
    document.getElementById("hiddenMessage").innerHTML =
        "Idhu website illa ❤️<br>Idhu en feelings 💖<br>Happy Valentine’s Day 😘";
}

function yesClicked() {
    document.getElementById("answer").innerHTML =
        "YAYYYY 🥹❤️<br>I knew it!<br>You made my day 💖";
}

function moveNo() {
    const noBtn = document.getElementById("noBtn");

    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 300);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
