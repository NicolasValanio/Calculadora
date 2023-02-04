const display = document.getElementById('display');

document.addEventListener('keypress', function(event){
  if (event.key === "Enter" || event.key ==="Intro") {
    calcular();
   } else {
      if (!isNaN(event.key) || event.key === "." || event.key === "-" || event.key === "+" || event.key === "*" || event.key === "/") {
         escribir(event.key);
      }
   }
})

document.addEventListener('keydown', function (event) {
    if(event.key==="Backspace"){
        borrar1()
    }
    
})

function escribir(numero) {
    display.value += numero;
}
function borrar1(){
    display.value = display.value.slice(0,-1);
}
function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value= "Error";
    }
}
function borrar(){
    display.value="";
}
