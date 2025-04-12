const numeroSecreto = Math.floor(Math.random() *10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número entre 1 y 10"));

console.log("Número secreto: " + numeroSecreto);

if(numeroJugador === numeroSecreto){
    console.log("¡Ganaste!");
    alert("¡Ganaste!");

}else{
    console.log("Perdiste");
    if(numeroJugador < numeroSecreto){
        console.log("El número secreto es mayor");
        alert("El número secreto es mayor");
    }else{
        console.log("El número secreto es menor");
        alert("El número secreto es menor");
    }
}
