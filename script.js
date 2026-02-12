function moveNo() {
    const btn = document.getElementById("noBtn");
    btn.style.left = Math.random() * 300 + "px";
    btn.style.top = Math.random() * 300 + "px";
}

function goNext() {
    window.location.href = "surprise.html";
}

function playMusic() {
    document.getElementById("bgMusic").play();
}

function setVolume(val) {
    document.getElementById("bgMusic").volume = val;
}

function foreverYes() {
    document.getElementById("finalAnswer").innerHTML =
        "You just made my heart complete 🥹❤️<br>Forever starts now 💍";
}
