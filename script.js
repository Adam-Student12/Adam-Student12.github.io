let navbar = document.getElementById("navbar");
let navicon = document.getElementById("navicon");
let navmenu = document.getElementById("navmenu");

document.getElementById("navicon").innerHTMl = "close";
document.getElementById("navmenu").style.maxHeight = "50px";

navicon.onclick = function (e) {
    if (document.getElementById("navicon").innerHTMl === "close" && document.getElementById("navmenu").style.maxHeight === "50px") {
        document.getElementById("navicon").innerHTML = "close";
        document.getElementById("navmenu").style.maxHeight = "200px";
    } else if (document.getElementById("navicon").innerHTMl === "close" && document.getElementById("navmenu").style.maxHeight === "200px") {
        document.getElementById("navicon").innerHTML = "menu";
        document.getElementById("navmenu").style.maxHeight = "50px";
    } else if (document.getElementById("navicon").innerHTMl === "menu" && document.getElementById("navmenu").style.maxHeight === "50px") {
        document.getElementById("navicon").innerHTML = "close";
        document.getElementById("navmenu").style.maxHeight = "200px";
    } else {
        document.getElementById("navicon").innerHTML = "close";
        document.getElementById("navmenu").style.maxHeight = "200px";
    }
}

// A friendly welcome message
/* setTimeout(function a() {
    alert("🡪 Hi there! Welcome to my website.");
}, 5000); */
