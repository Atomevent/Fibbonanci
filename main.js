const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})


let fx =1;
let sx=1;

function printfib(num){
    console.log(fx);
    console.log(sx);
    for(let i=0;i<num-2;i++){
        let temp = sx;
        sx += fx;
        fx=temp;
        console.log(sx);
        rl.close();
    }
}
rl.question("Enter the amount of number:" , printfib);