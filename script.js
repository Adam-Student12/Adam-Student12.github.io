let navbar = document.getElementById("navbar");
let navicon = document.getElementById("navicon");
let navmenu = document.getElementById("navmenu");

navicon.onclick = function (e) {
    if (navbar.style.height === "50px") {
        document.getElementById("navicon").innerHTML = "menu";
    } else if (navbar.style.height === "250px") {
        document.getElementById("navicon").innerHTML = "close";
    } else {
        document.getElementById("navicon").innerHTML = "menu";
    }
}
