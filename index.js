
var drumNumber = document.querySelectorAll(".drum").length;

function drum(charactor){
    switch(charactor){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play(); 
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play(); 
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play(); 
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play(); 
            break
        
        default:console.log(buttonClicked);
    }
}
function buttonAnimation(charactor){
    var activeButton = document.querySelector("."+charactor);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    }, 100);
}



for(var i = 0;i<drumNumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonClicked = this.textContent;
        console.log(buttonClicked); 
        drum(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

document.addEventListener("keydown", function(event){
    console.log(event.key);
    drum(event.key);
    buttonAnimation(event.key);
});
