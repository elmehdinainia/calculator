// alert('js running'); pour verifier js est travailler


//--------------------------variable-------------------------------//

var screen= document.getElementById("screen");
var queue = [];
var input = 0;


//--------------------------------fonction-----------------------

                       //pour laffichage
function display(num) { 
screen.value +=num;
input +=num;//bach input t3mar
console.log(`input dand laffichage : ${input}`);

}
                         //pour effacer 
function clearScreen(){ 
    screen.value="";
    input = 0;
    console.log(`input dand  : ${input}`);
}
function traiter(arg){ 
        if (input !==0 ){
            screen.value+=arg;
            input=parseFloat(input);
            queue.push(input);
            queue.push(arg);
            
            input=0;
            console.log(`queue quant faire traiter : ${queue}`);
            console.log(`input dand laffichage : ${input}`);
        }
}
function calculer(queue) {
            if (input !==0){

                input = parseFloat(input);
                queue.push(input);
                console.log(`queue quant faire calculer : ${queue}`);
                console.log(`input dans calculer : ${input}`);
            }
            console.log(`lenght : ${queue.length}`);
            console.log(`lenght : ${queue.length}`);
            for (var i = 2 ; i < queue.length ; i++) {
                
                console.log(`index : ${queue[i]}`);
                switch(queue[i-1]){
                    case "+" : 
                    queue[0] += queue[i]
                    break;

                    case "-" : 
                    queue[0] -= queue[i]
                    break;

                    case "*" : 
                    queue[0] *= queue[i]
                    break;

                    case "/" : 
                    queue[0] /= queue[i]
                    break;
                }
                console.log(`the resultat : ${queue[0]}`);
            }
            console.log(`the resultat : ${queue[0]}`);
            screen.value=queue[0];

            } 
            console.log(`lenght : ${queue.length}`);

            
 