const links = document.querySelectorAll("div.nav > p");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const id = this.getAttribute("id");
    console.log(id);
    console.log(id === "MS")
    var offsetTop = 0;
    if (id === "MS")
    {
        var offsetTop = document.getElementById("mission").offsetTop;
    }
    else if (id === "P")
    {
        var offsetTop = document.getElementById("portfolio").offsetTop;
    }
    else if (id === "IT")
    {
        var offsetTop = document.getElementById("team").offsetTop;
    }

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
