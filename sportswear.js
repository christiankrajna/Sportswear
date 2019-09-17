var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", function(){
    nav.classList.toggle("nav-active");
    burger.classList.toggle("turn");
    navLinks.forEach(function(link){
        link.classList.toggle("fade");
    });
});