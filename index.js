


for(var i=1;i<=document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i-1].addEventListener("click",function(){
   playsound(this.innerHTML);
  

});
}


document.addEventListener("keypress",function(event){
playsound(event.key);
});



function playsound(char){
    switch(char){
        case'w':
        var audio = new Audio("sounds/crash1.mp3");
        audio.play();
        break;

        case'a':
        var audio = new Audio("sounds/crash2.mp3");
        audio.play();
        break;

        case's':
        var audio = new Audio("sounds/crash3.mp3");
        audio.play();
        break;

        case'd':
        var audio = new Audio("sounds/crash4.mp3");
        audio.play();
        break;

        case'j':
        var audio = new Audio("sounds/crash5.mp3");
        audio.play();
        break;

        case'k':
        var audio = new Audio("sounds/crash6.mp3");
        audio.play();
        break;

        case'l':
        var audio = new Audio("sounds/crash7.mp3");
        audio.play();
        break;
    }

}