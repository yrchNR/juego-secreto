let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10; 


console.log(numeroSecreto)
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Le diste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' } mi bro, eres la pura ñonga.  `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"Te mamaste, el número es mas chirris.");
        }else{
            asignarTextoElemento('p',"¿Cómo así?, el número es mas grande.");     
    }
    intentos++; 
    limpiarCaja();    
}

    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si el número generado está incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se acabarón los números , deja de jugar y ponte a chambear hijo.')
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales (){
    asignarTextoElemento('h1',"Juego de adivinar númeritos");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar un nuevo número aleatorio
     //inicializar el número de intentos
    //deshabilitar el boton de nuevo juego 
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();


