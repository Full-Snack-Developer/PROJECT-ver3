// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// next function
var sliderMain = document.getElementById("slider-main");
var item = document.getElementsByClassName("item");
function next() {
    sliderMain.append(item[0]);
}
// pre function
function pre() {
    sliderMain.prepend(item[item.length - 1]);
}
// login
var username = 'hiep@gmail.com';
var password = '12345';

function login() {

    var pass = document.getElementById("exampleInputPassword1").value;


    var mail = document.getElementById("exampleInputEmail1").value;

    if (username === mail && pass === password) {
        window.open("home.html");

        const data = { username: "hiep" }

        localStorage.setItem("data", JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("data")))

    }
    else {
        alert('wrong username or password');
    }


}
