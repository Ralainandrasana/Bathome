var up = document.querySelector(".up");
var down = document.querySelector(".down");
var heros = document.querySelector(".heros");
var adversaires = document.querySelector(".adversaires");
var HEROS = document.querySelector(".batman-au-cinema");
var ADVERSAIRES = document.querySelector(".nemesis");


up.addEventListener("click", function(){
    window.scrollTo({top: (window.scrollY > 750 ? window.scrollY - 750 : 0), behavior: 'smooth'});
});


down.addEventListener("click", function(){
    window.scrollTo({top: window.scrollY+750, behavior: 'smooth'});
 
});
heros.addEventListener("click", function(){
    window.scrollTo({top: window.scrollY+HEROS.getBoundingClientRect().y, behavior: 'smooth'});

});


adversaires.addEventListener("click", function(){
    window.scrollTo({top: window.scrollY+ADVERSAIRES.getBoundingClientRect().y, behavior: 'smooth'});
   
});

