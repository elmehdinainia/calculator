// alert('js running'); pour verifier js est travailler


//--------------------------variable-------------------------------//
var screen= document.getElementById("screen");



//--------------------------------fonction-----------------------
function clearScreen(){
    screen.value = "";
}


function display(c){
    screen.value += c;
}