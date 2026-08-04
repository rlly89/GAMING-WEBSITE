// RLLY89 Gaming Hub JavaScript

// Welcome message when website loads
window.onload = function () {
    alert("🎮 Welcome to RLLY89 Gaming Hub! Enjoy your gaming experience.");
};


// Form validation

document.getElementById("gamingForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    if(name == ""){
        alert("Please enter your gamer name!");
    }
    else{
        alert("🎮 Registration successful! Welcome " + name + " to RLLY89 Gaming Hub.");
    }

});


// Smooth scrolling for navigation (if added later)

document.querySelectorAll("a").forEach(function(link){

    link.addEventListener("click", function(event){

        let target = this.getAttribute("href");

        if(target.startsWith("#")){

            event.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// Gaming button effect

function startGame(){

    alert("🔥 Game starting... Good luck player!");

}