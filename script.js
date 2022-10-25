let navbar = document.getElementById("navbar");
let navicon = document.getElementById("navicon");

navicon.onclick = function (e) {
    if (navbar.style.height === "50px") {
        navicon.innerHTML = "menu";
    } else if (navbar.style.height === "250px") {
        navicon.innerHTML = "close";
    } else {
        navicon.innerHTML = "menu";
    }
}
