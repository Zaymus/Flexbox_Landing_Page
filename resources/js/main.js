const mission = document.getElementById("MS");
const portfolio = document.getElementById("P");
const team = document.getElementById("IT");

mission.onclick = () => {
    location.href = "#mission";
}

portfolio.onclick = () => {
    location.href = "#portfolio";
    window.scrollTo(window.scrollX, window.scrollY + 70);
}

team.onclick = () => {
    location.href = "#team";
}
